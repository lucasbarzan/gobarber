import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.102:3333', // 'http://localhost:3333',
});

export default api;
