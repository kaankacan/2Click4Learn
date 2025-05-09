import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';

// Create a central Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Function to handle validation errors and other API issues
export const handleValidationErrors = (originalError) => {
  let status = 500;
  let message = 'An unexpected server error occurred. Please try again later.'; // Default server error message
  let details = null;
  let isOperational = false; // Indicates if the error is operational (e.g., validation) or a system/unexpected error

  const rawErrorData = {
    originalMessage: originalError.message,
    originalStack: originalError.stack,
    response: null,
    request: null,
  };

  if (originalError.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const backendError = originalError.response.data; // Contains {timestamp, status, error, message, path, errors?}
    status = originalError.response.status;
    message = backendError.message || message; // Prefer backend's message if available
    rawErrorData.response = backendError;
    isOperational = status < 500; // Typically, 4xx errors are operational

    if (status === 400 && backendError) { // Bad Request, often validation errors
      details = {};

      // Priority 1: Use backendError.errors if available (standard Spring Boot validation format)
      if (backendError.errors) {
        if (Array.isArray(backendError.errors)) {
          backendError.errors.forEach(err => {
            if (err.field && err.defaultMessage) {
              details[err.field] = err.defaultMessage;
            }
          });
        } else if (typeof backendError.errors === 'object') { // Sometimes 'errors' might be an object map
          Object.assign(details, backendError.errors);
        }
      }
      // Priority 2: Parse custom string format in backendError.message if present (e.g., "{key=value,...}")
      else if (backendError.message && backendError.message.startsWith('{') && backendError.message.endsWith('}')) {
        try {
          const messageContent = backendError.message.substring(1, backendError.message.length - 1);
          // Split by comma, but use a lookahead to ensure the comma is followed by a word character, optional spaces, and '=',
          // to prevent splitting commas within a single error message.
          const errorPairs = messageContent.split(/,(?=\s*\w+=)/);
          
          errorPairs.forEach(pair => {
            const firstEqualIndex = pair.indexOf('=');
            if (firstEqualIndex > 0) {
              const field = pair.substring(0, firstEqualIndex).trim();
              const messageValue = pair.substring(firstEqualIndex + 1).trim();
              details[field] = messageValue;
            }
          });
        } catch (e) {
          // If parsing fails, details might remain empty, and the original backendError.message will be used.
        }
      }
      // Priority 3: Handle very specific cases like "email address already in use"
      else if (backendError.message && backendError.message.includes("email adresi zaten kullanımda")) { // Keep Turkish if backend sends this exact string
        details.email = backendError.message;
      }

      // Eğer details objesine bir şeyler eklendiyse, genel mesajı daha kullanıcı dostu yapalım.
      if (details && Object.keys(details).length > 0) {
        message = "Lütfen işaretli alanlardaki bilgileri kontrol edin."; // Her zaman bu kullanıcı dostu mesajı kullan
      } else {
        // details boşsa veya doldurulamadıysa, message backendError.message olarak kalır (eğer o uzun string ise) 
        // veya backendError.error (eğer message o uzun string değilse ve error daha genel bir başlık ise)
        // ya da api.js'nin en başındaki varsayılan mesaja döner.
        // Eğer message zaten o uzun string ise ve details yoksa, useFormError bunu generalError'a atar.
        // Bu durumu da iyileştirmek için, details yoksa ve message o string formatındaysa, message'ı daha genel bir şeye çekebiliriz.
        if (backendError.message && backendError.message.startsWith('{') && backendError.message.endsWith('}')) {
            message = backendError.error || "Formda bazı hatalar mevcut. Lütfen kontrol edin.";
        }
        // details'in kesinlikle null olduğundan emin ol
        details = null; 
      }
    } else if (status === 401) { // Unauthorized
      // Distinguish 401 during login (BadCredentialsException) from other 401s (e.g., token expiration)
      if (originalError.config && originalError.config.url && originalError.config.url.endsWith('/auth/authenticate')) {
        message = backendError.message || 'Invalid email or password. Please check your credentials.';
        // No 'session-expired-error' event is dispatched in this case.
        // The error will be thrown and handled by Login.jsx to display the message.
        // Optionally, set details to highlight fields in the login form.
        details = {
          email: ' ', // Space to potentially trigger error styling on the field
          password: ' '
        };
      } else {
        // All other 401 errors are treated as session termination.
        message = backendError.message || 'Your session is invalid or has expired. Please log in again.';
        window.dispatchEvent(new CustomEvent('session-expired-error', { detail: { status, message, isOperational: true } }));
      }
    }
    // Other 4xx errors (403, 404, etc.) will use the message from the backend.
  } else if (originalError.request) {
    // The request was made but no response was received (e.g., network error)
    message = 'Could not connect to the server. Please check your internet connection or try again later.';
    isOperational = true; // User might be able to resolve this (e.g., fix internet)
    rawErrorData.request = originalError.request;
    status = 0; // Or a custom status code for network errors
  } else {
    // Something happened in setting up the request that triggered an Error (client-side error)
    message = originalError.message || 'An error occurred while preparing the request.';
    isOperational = false; // Typically a developer/code error
  }

  const finalErrorObject = {
    status,
    message,
    details,
    isOperational,
    rawError: rawErrorData
  };

  // Dispatch a global event for unexpected (non-operational) errors or server errors (500+)
  // 401 (session-expired) dispatches its own event above.
  // The error object itself will be thrown regardless, for local handling.
  if (!isOperational && status !== 401) { 
    window.dispatchEvent(new CustomEvent('global-error', { detail: { ...finalErrorObject } }));
  }
  
  throw finalErrorObject; // Throw the standardized error object for further local handling
};

export default api; 