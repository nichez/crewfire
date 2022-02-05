import axios from 'axios';

const url = 'http://localhost:8080';

export const getRequest = async (path) => {
  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const response = await axios.get(`${url}${path}`, config);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
