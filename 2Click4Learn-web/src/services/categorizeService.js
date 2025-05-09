import api, { handleValidationErrors } from './api';

export const categorizeWords = async () => {
  try {
    const response = await api.get('/words/categorize'); 
    return response.data; // [{ english, category }, ...]
  } catch (error) {
    throw handleValidationErrors(error);
  }
}; 