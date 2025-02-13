<template>
  <div class="screen h-full px-3 lg:px-6 w-full group flex justify-center items-center relative">
   
    <div class="absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <button ref="prevEl" class="absolute left-4 z-10">
        <svg class="pi pi-angle-right text-[#e7e7e7] hover:text-[#333] duration-500 text-4xl md:text-7xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
      </button>
      <button ref="nextEl" class="absolute right-4 z-10">
        <svg class="pi pi-angle-right text-[#e7e7e7] hover:text-[#333] duration-500 text-4xl md:text-7xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
      </button>
    </div>

   
    <swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="w-full max-w-6xl flex items-center justify-center"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative flex justify-center items-center"
      >
        <div class="relative w-full aspect-[16/9] flex items-center justify-start">
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute left-4 md:left-8 p-4 md:p-8  bg-opacity-75 rounded-lg lg:w-[40%] max-w-[80%] md:max-w-[60%]">
            <h2 class="text-[#68aaeb] font-bold mb-2 md:mb-4 text-sm md:text-lg uppercase">
              {{ slide.header }}
            </h2>
            <p class="text-[#333] text-xl md:text-5xl font-bold mb-2 md:mb-4">
              {{ slide.title }}
            </p>
            <button class="py-2 md:py-[15px] px-4 md:px-[40px] text-xs md:text-md text-white bg-[#333] font-bold hover:bg-[#555] transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ref, onMounted } from "vue"

const slides = [
  {
    header: "Accessories",
    title: "Bottle Grinder, Small, 2-Piece",
    image: "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/1.jpg",
  },
  {
    header: "Accessories",
    title: "Minimalist Chair",
    image: "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/2.jpg",
  },
  {
    header: "Handmade",
    title: "Modern Lamp Design",
    image: "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/3.jpg",
  },
]

const prevEl = ref(null)
const nextEl = ref(null)

onMounted(() => {
  console.log("Nav buttons mounted:", prevEl.value, nextEl.value)
})
</script>