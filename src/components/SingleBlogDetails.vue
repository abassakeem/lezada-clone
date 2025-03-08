<template>
  <div class="mb-4" v-for="product in products" :key="product.id">
    <img :src="product.img" class="w-full mt-4" />
    <p>{{ product.tag }}</p>
    <h6 class="text-[#333] text-2xl my-4">{{ product.header }}</h6>
    <div class="flex items-center text-[#999999] mb-4 text-sm gap-2">
      <p class="flex items-center gap-2">
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
            d="M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z"
          ></path>
        </svg>
        {{ product.owner }}
      </p>
      <p class="flex items-center gap-2">
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
          ></path>
        </svg>
        {{ product.date }}
      </p>
      <p>{{ product.tag }}</p>
      <p class="flex items-center gap-2">
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
            d="M132.8 368c-20.2 0-44.8-24.6-44.8-44.8V160h-9.6C61.7 160 48 173.7 48 190.4V464l58.5-58h215.1c16.7 0 30.4-14.1 30.4-30.9V368H132.8z"
          ></path>
          <path
            d="M429.1 48H149.9C130.7 48 115 63.7 115 82.9V309c0 19.2 15.7 35 34.9 35h238.2l75.9 53V82.9c0-19.2-15.7-34.9-34.9-34.9z"
          ></path>
        </svg>
        4 comments
      </p>
    </div>

    <div
      class="text-[#777] text-sm mb-6 space-y-4"
      v-for="(detail, index) in product.subDetails"
      :key="index"
    >
      <h3 class="text-black text-3xl">{{ detail.header }}</h3>
      <p class="text-[#777]">{{ detail.description }}</p>
    </div>
  </div>
  <h4 class="text-4xl my-8">Comments <span class="text-[#ababab]">(4)</span></h4>

  <div class=" flex items-center gap-8 mb-16 " v-for="(comment, index) in comments" :key="index">
    <div class="">
        <img :src="comment.img" />
    </div>
    <div class="">
        <h4 class="font-bold text-xl">{{ comment.user }}</h4>
        <p class="text-[#777777]">{{ comment.comment }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
  comments: {
    type: Array,
    required: true,
  },
});
</script>
