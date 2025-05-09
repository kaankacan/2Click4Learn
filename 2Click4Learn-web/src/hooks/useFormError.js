import { useState, useCallback } from 'react';

export default function useFormError() {
  const [fieldErrors, setFieldErrors] = useState({});
  const [generalError, setGeneralError] = useState('');

  const handleError = useCallback((error) => {
    setGeneralError(''); // Reset previous general error
    setFieldErrors({});   // Reset previous field errors
    
    if (!error) return;
    
    // If the error object has a 'details' property (field-specific errors)
    if (error.details && typeof error.details === 'object') {
      setFieldErrors(error.details);
      // Even if there are field-specific details, there might also be a general message.
      if (error.message) {
        setGeneralError(error.message);
      }
    } else if (error.message) { // If there is only a general message
      setGeneralError(error.message);
    } else { // If no error information is available, set a default message
      setGeneralError('Beklenmeyen bir hata oluştu.'); 
    }
  }, []);

  const clearErrors = useCallback(() => {
    setFieldErrors({});
    setGeneralError('');
  }, []);

  const hasError = useCallback((fieldName) => {
    return !!fieldErrors[fieldName];
  }, [fieldErrors]);

  const getErrorMessage = useCallback((fieldName) => {
    return fieldErrors[fieldName] || '';
  }, [fieldErrors]);

  return {
    fieldErrors,
    generalError,
    handleError,
    clearErrors,
    hasError,
    getErrorMessage
  };
} 