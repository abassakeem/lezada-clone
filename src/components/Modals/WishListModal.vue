<template>
  <div>
    <div
      v-if="isWishlistOpen"
      class="fixed inset-0 bg-black/10 z-40"
      @click="toggleWishlist"
    ></div>

    <div
      :class="`fixed right-0 top-0 w-1/4 h-full z-50 bg-white flex duration-500 transform transition-transform ${
        isWishlistOpen ? 'translate-x-0' : 'translate-x-full'
      }`"
    >
      <div class="text-black w-full flex p-5 pb-0 flex-col">
        <div
          class="flex justify-between items-center border-b p-2 border-[#eee]"
        >
          <div class="">Wishlist</div>
          <div class="flex justify-between items-center text-xl">
            <button
              @click="toggleWishlist"
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
          <p>No item found in Wishlist</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["toggleWishlist", "isWishlistOpen"]);
</script>
