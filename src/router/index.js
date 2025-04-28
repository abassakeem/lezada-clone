import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/views/Homepage.vue'
import Auth from '@/views/Auth.vue'
import Singleproduct from '@/views/Singleproduct.vue'
import Shop from '@/views/Shop.vue'
import Cart from '@/views/Cart.vue'
import Wishlist from '@/views/Wishlist.vue'
import Checkout from '@/views/Checkout.vue'
import Blog from '@/views/Blog.vue'
import OrderTracking from '@/views/OrderTracking.vue'
import Essentials from '@/views/Essentials.vue'
import SingleBlog from '@/views/SingleBlog.vue'
import MyAccount from '@/views/MyAccount.vue'
import ContactUs from '@/views/ContactUs.vue'
import About from '@/views/About.vue'

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
      path: '/product/:id',
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
    {
      path: '/ordertracking',
      name: 'orderTracking',
      component: OrderTracking,
    },
    {
      path: '/essentials',
      name: 'essentials',
      component: Essentials,
    },
    {
      path: '/singleblog',
      name: 'singleblog',
      component: SingleBlog,
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: MyAccount,
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs,
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: About,
    },
    
   
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // if browser back/forward, keep previous scroll
    } else {
      return { top: 0 }; // else, scroll to top
    }
  }
})

export default router
