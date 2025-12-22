import axios from 'axios';
import { useAuthStore } from '@/stores/auth.js'
import { getCookie } from '@/helpers/cookieHelper.js'


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
  const auth_store = useAuthStore()
  console.log('lalala', auth_store.access_token);
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
    const auth_store = useAuthStore()
    const og_request = error.config
    console.log(og_request._retry);
    if (error.status == '401' && !og_request._retry) {
      og_request._retry = true

      try {
        const new_aceess_token = await auth_store.refreshToken()

        og_request.headers.Authorization = `Bearer ${new_aceess_token}`
        
        return api(og_request)
      } catch (err) {
        // console.log(og_request._retry); // false lote ya ohn ml
        
        return Promise.reject(err)
      }
      
    }
    return Promise.reject(error)
  }
)

export default api;





