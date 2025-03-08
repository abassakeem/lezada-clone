<template>
  <div class=" mb-4" v-for="product in products" :key="product.id">
    <router-link to="/singleblog" class="cursor-pointer space-y-4">
      <img :src="product.img" class="w-7xl" />

      <p class="flex items-center text-[#999999] text-sm gap-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M424 96h-40v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H88c-22 0-40 18-40 40v272c0 22 18 40 40 40h336c22 0 40-18 40-40V136c0-22-18-40-40-40zm8 300c0 11-9 20-20 20H100c-11 0-20-9-20-20V216c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v180zM160 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72zM384 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z"
          ></path></svg
        >{{ product.date }}
      </p>
      <h6 class="text-[#333] text-2xl">{{ product.header }}</h6>
      <p class="text-[#777] text-sm">{{ product.summary }}</p>
      <router-link
        class="underline uppercase text-[#333] mt-2 font-medium text-xs cursor-pointer hover:text-[#D3122A] duration-500"
        >Read more</router-link
      >
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
  isSinglePage: {
    type: Boolean,
    required: true,
  },
});
</script>
