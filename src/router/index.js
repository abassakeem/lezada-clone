import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/views/Homepage.vue'
import Auth from '@/views/Auth.vue'
import Singleproduct from '@/views/Singleproduct.vue'
import Shop from '@/views/Shop.vue'
import Cart from '@/views/Cart.vue'
import Wishlist from '@/views/Wishlist.vue'
import Checkout from '@/views/Checkout.vue'
import Blog from '@/views/Blog.vue'

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
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: Wishlist,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
   
  ],
})

export default router
