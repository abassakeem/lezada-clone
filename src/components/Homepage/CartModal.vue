<template>
    <div>
     
      <div
        v-if="isCartOpen"
        class="fixed inset-0 bg-black/10 z-40"
        @click="toggleCart"
      ></div>
 
      <div
        :class="`fixed right-0 top-0 w-1/4 h-full z-50 bg-white flex items-center justify-center duration-300 transform transition-transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`"
      >
        <div class="text-white cursor-pointer" @click.stop="toggleCart">Close</div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(["toggleCart", "isCartOpen"]);
  </script>