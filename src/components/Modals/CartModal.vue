<template>
  <div class="">
    <div
      v-if="isCartOpen"
      class="fixed inset-0 bg-black/10 z-40"
      @click="toggleCart"
    ></div>

    <div
      :class="`fixed right-0 top-0 w-1/4 h-full z-50 bg-white flex duration-500 transform transition-transform ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`"
    >
      <div class="text-black w-full flex p-5 pb-0 flex-col">
        <div
          class="flex justify-between items-center border-b p-2 border-[#eee]"
        >
          <div class="">Cart</div>
          <div class="flex justify-between items-center text-xl">
            <button
              @click="toggleCart"
              class="cursor-pointer hover:rotate-90 duration-600"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="p-2 text-[#777]">
          <p>No item found in Cart</p>
        </div>
        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between gap-4 border-b border-[#eee] py-4"
            v-for="product in products"
            :key="product.id"
          >
            <div class="flex-shrink-0">
              <img
                :src="product.img"
                class="h-[100px] w-[100px] object-cover"
              />
            </div>

            <div class="flex-1 truncate">
              <div class="flex-1 truncate">
                {{ product.title }}
              </div>
              <div class="flex-1 font-bold truncate">${{ product.price }}</div>
            </div>

            <div class="flex-shrink-0">
              <svg
                stroke="currentColor"
                class="hover:text-[#d3122a] duration-500 p-1 rounded cursor-pointer"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="font-bold flex justify-between mt-4 p-3 border-y border-[#eee]"
        >
          <div>Subtotal:</div>
          <div>${{ totalAmount }}</div>
        </div>
        <div class="mt-4">
          <button
            class="text-white bg-[#333] p-[10px] w-full hover:bg-[#d3122a] duration-500 cursor-pointer"
          >
            VIEW CART
          </button>
        </div>
        <div class="mt-4">
          <button
            class="cursor-pointer text-white bg-[#333] p-[10px] w-full hover:bg-[#d3122a] duration-500"
          >
            CHECKOUT
          </button>
        </div>
        <p class="mt-2 text-[#777]">Free Shipping on All Orders Over $100!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

defineProps(["toggleCart", "isCartOpen"]);

const products = ref([
  {
    id: 1,
    img: "https://lezada.jamstacktemplates.dev/assets/images/product/fashion/10.jpg",
    title: "lorem ipsum yyyyyyyyyyyyyyyyyyyyyyyyyy 2",
    price: "23.24",
  },
  {
    id: 2,
    img: "https://lezada.jamstacktemplates.dev/assets/images/product/fashion/10.jpg",
    title: "lorem ipsum 1",
    price: "45.34",
  },
]);
const totalAmount = computed(() => {
  return products.value
    .reduce((sum, product) => sum + parseFloat(product.price || 0), 0)
    .toFixed(2);
});
</script>
