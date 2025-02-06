<template>
    <div>
      <div class="">
        <HeroSection/>
        <ProductsSection/>
        <SaleSection/>
      </div>
    </div>
  </template>
  
  <script>
  import HeroSection from '@/components/Homepage/HeroSection.vue'
import ProductsSection from '@/components/Homepage/ProductsSection.vue';
import SaleSection from '@/components/Homepage/SaleSection.vue';
  
  export default {
    name: "Homepage",
    components: {
      HeroSection, ProductsSection , SaleSection  
    }
  }
  </script>
  
  <style>
  </style>