// src/services/authService.js
import axios from 'axios';

const BASE_URL = 'YOUR_BASE_API_URL';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const resetPassword = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/reset-password`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
