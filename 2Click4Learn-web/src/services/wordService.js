import api, { handleValidationErrors } from './api';

export const getWords = async () => {
  try {
    const response = await api.get('/words');
    return response.data;
  } catch (error) {
    throw handleValidationErrors(error);
  }
};

export const deleteWord = async (wordId) => {
  try {
    await api.delete(`/words/${wordId}`);
  } catch (error) {
    throw handleValidationErrors(error);
  }
}; 