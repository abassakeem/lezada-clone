<template>
    <div>
      <div class="flex items-center justify-center">
        <HeroSection/>
      </div>
    </div>
  </template>
  
  <script>
  import HeroSection from '@/components/Homepage/HeroSection.vue'
  
  export default {
    name: "Homepage",
    components: {
      HeroSection  
    }
  }
  </script>
  
  <style>
  </style>