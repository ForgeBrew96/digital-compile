import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_SERVER_URL,
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default api;
