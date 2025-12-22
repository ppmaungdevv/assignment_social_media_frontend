import router from '@/router';
import api from '@/http/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue';
import { auth_apis } from '../http/apis/auth';



export const useAuthStore = defineStore('auth', () => {
  // STATES
  const user = ref(null)
  const access_token = ref(null)
  const refreshPromise = ref(null)

  // ACTIONS
  const refreshToken = async () => {
    console.log('pinia refresh');
    if (refreshPromise.value) return refreshPromise.value

    refreshPromise.value = api.post('auth/refresh_token', {})
      .then(res => {
        refreshPromise.value = null
        access_token.value = 'res.data.access_token'
        return 'res.data.access_token'
      })
      .catch(err => {
        refreshPromise.value = null
        handleLogout()
        throw err
      })
      
      return refreshPromise.value
  }

  const handleLogout = async () => {
    user.value = null
    access_token.value = null
    
    await api.post(auth_apis.logout)
    localStorage.clear()
    
    console.log('auth_store');
    await router.push('/auth')
  }

  return {
    user,
    access_token,
    refreshPromise,
    refreshToken,
    handleLogout
  }
})
