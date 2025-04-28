<template>
  <Transition
    enter-active-class="duration-500 ease-out"
    enter-from-class="translate-x-full opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-active-class="duration-500 ease-in"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="translate-x-full opacity-0"
  >
    <div class="">
      <div
        v-if="modalsStore.isWishlistOpen"
        class="fixed inset-0 bg-black/10 z-40"
        @click="modalsStore.toggleWishlist"
      ></div>

      <div
        :class="`fixed right-0 top-0 w-1/4 h-full z-50 bg-white flex duration-500 transform transition-transform ${
          modalsStore.isWishlistOpen ? 'translate-x-0' : 'translate-x-full'
        }`"
      >
        <div class="text-black w-full flex p-5 pb-0 flex-col">
          <div
            class="flex justify-between items-center border-b p-2 border-[#eee]"
          >
            <div class="">Wishlist</div>
            <div class="flex justify-between items-center text-xl">
              <button
                @click="modalsStore.toggleWishlist"
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
          <div v-if="products.length == 0" class="p-2 text-[#777]">
            <p>No item found in Wishlist</p>
          </div>
          <div class="" v-if="products.length > 0">
            <div class="flex flex-col gap-2">
              <div
                class="py-4 border-b border-[#eee]"
                v-for="product in products"
                :key="product.id"
              >
                <router-link
                  @click="modalsStore.toggleWishlist"
                  :to="{ name: 'product', params: { id: product.id } }"
                >
                  <div class="flex justify-between gap-4">
                    <div class="flex-shrink-0">
                      <img
                        :src="product.image"
                        class="h-[75px] w-[100px] object-cover"
                      />
                    </div>

                    <div class="flex-1 truncate">
                      <div class="flex-1 truncate text-xs">
                        {{ product.name }}
                      </div>
                      <div class="flex-1 font-bold truncate text-sm">
                        ${{ product.price }}
                      </div>
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
                    </div></div
                ></router-link>
              </div>
            </div>

            <div class="mt-4">
              <router-link
                to="/wishlist"
                @click="modalsStore.toggleWishlist"
                class="block text-center text-white bg-[#333] p-[10px] w-full hover:bg-[#d3122a] duration-500"
              >
                VIEW WISHLIST
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div></Transition
  >
</template>

<script setup>
import { computed, ref } from "vue";
import { useModalsStore } from "@/stores/modalsStore";
import { useWishlistStore } from "@/stores/wishlistStore";

const modalsStore = useModalsStore();
const isWIshlistOpen = ref(false);
// const products = ref([
//   {
//     id: 1,
//     img: "https://lezada.jamstacktemplates.dev/assets/images/product/fashion/10.jpg",
//     title: "lorem ipsum yyyyyyyyyyyyyyyyyyyyyyyyyy 2",
//     price: "23.24",
//   },
//   {
//     id: 2,
//     img: "https://lezada.jamstacktemplates.dev/assets/images/product/fashion/10.jpg",
//     title: "lorem ipsum 1",
//     price: "45.34",
//   },
// ]);
const wishlistStore = useWishlistStore();
const products = computed(() => {
  const rawData = wishlistStore.wishlistItems || [];
  console.log(rawData.length, "raw dog data");
  return rawData.map((entry) => ({
    id: entry.id,
    name: entry.product.name,
    image: entry.product.image,
    price: parseFloat(entry.product.price),
    quantity: entry.quantity,
  }));
});

console.log(products.value);
</script>
