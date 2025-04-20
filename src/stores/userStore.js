
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
    loading: false,
    error: null,
    authenticated: false,
  }),

  actions: {
    async getUser() {
      this.loading = true
      this.error = null

      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/user`)
        const userData = response.data.data.user

        console.log('User data:', userData)

        this.user = userData
        this.authenticated = true

      } catch (err) {
        this.error = err.response?.data?.message || 'Login failed'
        this.failedLoggedInModal() 
        console.error('Login Error:', err)
      } finally {
        this.loading = false
      }
    },

    setUser(data) {
      this.user = data
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('auth_token') 
      window.location.href = '/login-register'
    },


    failedLoggedInModal() {
  
      alert(this.error || 'Login failed')
    }
  }
})
