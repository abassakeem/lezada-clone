<template>
  <div
    class="screen h-full w-full group flex justify-center items-center relative"
  >
    <div
      class="absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    >
      <button ref="prevEl" class="absolute left-4 z-10 p-4 bg-white">
        <svg
          class="pi pi-angle-right text-[#e7e7e7] hover:text-[#333] duration-500 text-2xl"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"
          ></path>
        </svg>
      </button>
      <button ref="nextEl" class="absolute right-4 z-10 p-4 bg-white">
        <svg
          class="pi pi-angle-right text-[#e7e7e7] hover:text-[#333] duration-500 text-2xl"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"
          ></path>
        </svg>
      </button>
    </div>

    <swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="w-full flex items-center justify-center"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative flex justify-center items-center"
      >
        <div class="relative aspect-[16/9] lg:aspect-auto w-full flex items-center justify-start">
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full lg:h-3/4 object-cover"
          />
          <div
            class="absolute left-4 md:left-30 p-4 md:p-8 bg-opacity-75 rounded-lg lg:w-[40%] max-w-[80%] md:max-w-[60%]"
          >
            <h2
              class="text-[#68aaeb] font-bold mb-2 md:mb-4 text-sm md:text-lg uppercase"
            >
              {{ slide.header }}
            </h2>
            <p class="text-[#333] text-xl md:text-5xl font-light mb-2 md:mb-4">
              {{ slide.title }}
            </p>
            <button
              class="px-1 cursor-pointer text-xs md:text-md text-[#333] uppercase font-light hover:text-[#777] transition-colors border-b border-[#333]"
            >
              Shop Collection
            </button>
          </div>
          <div
            class="absolute right-4 md:right-30 p-4 md:p-8 bg-opacity-75 rounded-lg lg:w-[40%] max-w-[80%] md:max-w-[60%]"
          >
            <img
              class="text-[#68aaeb] font-bold mb-2 md:mb-4 text-sm md:text-lg uppercase"
              :src="slide.cloth"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ref, onMounted } from "vue";

const slides = [
  {
    header: "Stop & wear",
    title: "Summer flowers",
    image:
      "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-three/bg1.png",
  },
  {
    header: "New Arrivals ",
    title: "Summer 2020",
    image:
      "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-three/bg2.png",
    cloth:
      "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-three/2.png",
  },
  {
    header: "Handmade",
    title: "Modern Lamp Design",
    image:
      "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-three/bg3.png",
    cloth:
      "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-three/1.png",
  },
];

const prevEl = ref(null);
const nextEl = ref(null);

onMounted(() => {
  console.log("Nav buttons mounted:", prevEl.value, nextEl.value);
});
</script>
