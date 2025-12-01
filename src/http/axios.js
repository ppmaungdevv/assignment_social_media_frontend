import axios from 'axios';

// Create a new instance of Axios
const api = axios.create({
  baseURL: 'https://lynette-ratable-nonaristocratically.ngrok-free.dev/api/', 
  // baseURL: 'http://localhost:5174/api/', 
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    'Content-Type': 'application/json',
  }
});

// Optional: Add Auth tokens
api.interceptors.request.use(config => {
  const token = localStorage.getItem('auth_token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;