// API CORE DI SINI

import axios from 'axios';
import { backend_url } from '../constants';

//const backendBaseUrl = 'http://localhost:8081';

const login = async (email, password) => {
  try {
    const response = await axios.post(backend_url + '/login', {
      email,
      password,
    });
    return response.data; // Return the response data for further use
  } catch (error) {
    throw error; // Throw the error to be handled in the component
  }
};

const register = async (name, email, password) => {
  try {
    const response = await axios.post(backend_url + '/register', {
      name,
      email,
      password,
      age : 20
    });
    return response; // Return the response data
  } catch (error) {
    throw error; // Throw error to be handled in the component
  }
};

export { login, register };
