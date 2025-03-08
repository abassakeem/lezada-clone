<template>
  <div>
    <div
      class="flex items-center gap-2 border-b border-[#e7e7e7] mb-4 py-4"
      v-for="blog in blogs"
      :key="blog.id"
    >
      <div class="w-3/4">
        <img :src="blog.img" class="max-w-full h-auto" />
      </div>
      <div class="text-sm">
        <h6 class="text-[333]">{{ blog.header }}</h6>
        <p class="text-[#777777] flex items-center flex-grow">
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
          >{{ blog.date }}
        </p>
      </div>
    </div>

    <div class="">
      <img
        src="https://lezada.jamstacktemplates.dev/assets/images/banners/blog-sidebar.png"
      />
    </div>

    <div class="popular-tags space-y-6">
      <h3>Popular Tags</h3>
      <span class="text-[#7e7e7e]" v-for="tag in tags" :key="tag">
        <span class="hover:underline duration-300 cursor-pointer text-sm">{{
          tag
        }}</span
        >/
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blogs: {
    type: Array,
    required: true,
  },
});

const tags = [
  "bags",
  "chair",
  "clock",
  "cosmetic",
  "fashion",
  "furniture",
  "holdermask",
  "men",
];
</script>
