import api, { handleValidationErrors } from './api';

export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    const data = response.data;
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
  } catch (error) {
    // Process and re-throw the error using the central handler
    throw handleValidationErrors(error);
  }
};

// Login function: accepts either a credentials object or separate email and password parameters
export const login = async (emailOrCredentials, password) => {
  try {
    let credentials;
    
    // Check parameter suitability
    if (typeof emailOrCredentials === 'object' && emailOrCredentials !== null) {
      // If a credentials object is provided
      credentials = emailOrCredentials;
    } else if (typeof emailOrCredentials === 'string' && typeof password === 'string') {
      // If email and password are provided separately
      credentials = { email: emailOrCredentials, password };
    } else {
      // This is a client-side validation before an API call, so it doesn't go through handleValidationErrors.
      // It will be caught by useFormError as error.message.
      throw new Error('Invalid login parameters');
    }
    
    const response = await api.post('/auth/authenticate', credentials);
    const data = response.data;
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
  } catch (error) {
    // Process and re-throw the API error using the central handler
    // If the error is from 'Invalid login parameters' above, handleValidationErrors will still process it,
    // but it won't have error.response, so it will be treated as a generic client-side error.
    throw handleValidationErrors(error);
  }
};

export const logout = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      await api.post('/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      });
    }
  } catch (error) {
    // Log logout errors, but don't necessarily block UI changes
    // We still proceed to clear local storage.
  } finally {
    // Always clear local storage regardless of API call success or failure
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const isAuthenticated = () => {
  return !!getAccessToken();
}; 