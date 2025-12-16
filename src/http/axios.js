import axios from 'axios';
import { getCookie } from '../helpers/cookieHelper.js';


// Create a new instance of Axios
const api = axios.create({
  // baseURL: 'https://lynette-ratable-nonaristocratically.ngrok-free.dev/api/', 
  // baseURL: 'https://lynette-ratable-nonaristocratically.ngrok-free.dev',
  baseURL: 'http://localhost:5174/api/', 
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// request interceptor
api.interceptors.request.use(config => {
  const token = getCookie('auth_token') 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
});

// response interceptor
let is_refreshing = false
let failed_queue = []

// failed queue kyan tl

// the response interceptor
api.interceptors.response.use(
  response => response,
  async (error) => {
    const og_request = error.config
    console.log('lclcl',og_request._retry);
  }
)

export default api;





