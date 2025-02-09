<template>
  <div
    :class="`fixed inset-0 w-full h-full z-50 bg-black flex items-center justify-center duration-300 transform transition-transform 
      ${
        isSearchOpen
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`"
  >
    <div class="text-white cursor-pointer" @click="toggleSearch">Close</div>
  </div>
</template>

<script setup>
defineProps(["toggleSearch", "isSearchOpen"]);
</script>
