<template>
    <div class="h-screen w-screen flex justify-center items-center relative">
      <!-- Navigation Arrows -->
      <button ref="prevEl" class="absolute left-4 z-10 bg-black bg-opacity-50 p-3 rounded-full text-white">
        ◀
      </button>
      <button ref="nextEl" class="absolute right-4 z-10 bg-black bg-opacity-50 p-3 rounded-full text-white">
        ▶
      </button>
  
      <!-- Swiper Carousel -->
      <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :navigation="{ prevEl: prevEl, nextEl: nextEl }"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="w-full max-w-7xl h-full flex items-center justify-center"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index" class="relative flex justify-center items-center">
          <div
            class="h-full w-full bg-cover bg-center flex items-center justify-center"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <div class="text-center bg-black bg-opacity-50 p-8 rounded-lg">
              <h2 class="text-white text-3xl font-bold mb-4">{{ slide.title }}</h2>
              <button class="px-6 py-2 bg-white text-black text-sm font-bold">Shop Now</button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/autoplay";
  import { Navigation, Pagination, Autoplay } from "swiper/modules";
  import { ref, onMounted } from "vue";
  
  export default {
    components: { Swiper, SwiperSlide },
    name: "HeroSection",
    setup() {
      const slides = [
        {
          title: "Bottle Grinder, Small, 2-Piece",
          image: "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/1.jpg",
        },
        {
          title: "Minimalist Chair",
          image: "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/2.jpg",
        },
        {
          title: "Modern Lamp Design",
          image: "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/3.jpg",
        },
      ];
  
      // Refs for external navigation buttons
      const prevEl = ref(null);
      const nextEl = ref(null);
  
      onMounted(() => {
        console.log("Nav buttons mounted:", prevEl.value, nextEl.value);
      });
  
      return { slides, Navigation, Pagination, Autoplay, prevEl, nextEl };
    },
  };
  </script>
  