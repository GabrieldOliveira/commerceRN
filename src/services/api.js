import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5c98f45d42365600143931cb.mockapi.io',
});

export default api;
