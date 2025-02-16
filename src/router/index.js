import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/views/Homepage.vue'
import Auth from '@/views/Auth.vue'
import Singleproduct from '@/views/Singleproduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/login-register',
      name: 'login-register',
      component: Auth,
    },
    {
      path: '/product',
      name: 'product',
      component: Singleproduct,
    },
   
  ],
})

export default router
