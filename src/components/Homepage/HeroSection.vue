<template>
  <div class="h-screen w-screen flex justify-center items-center relative">
    <!-- Navigation Arrows -->
    <button ref="prevEl" class="absolute left-4 z-10">
      <i class="pi pi-angle-left text-black text-7xl"></i>
    </button>
    <button ref="nextEl" class="absolute right-4 z-10 text-black text-7xl">
      <i class="pi pi-angle-right"></i>
    </button>

    <!-- Swiper Carousel -->
    <swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="w-full max-w-7xl h-full flex items-center justify-center"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative flex justify-center items-center"
      >
        <div
          class="h-full w-full bg-cover bg-center flex items-center justify-start"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="text-start  p-8 rounded-lg">
            <h2 class="text-[#68aaeb] font-bold mb-4 uppercase ">{{slide.header}}</h2>
            <p class="text-[#333] text-5xl font-bold mb-4">
              {{ slide.title }}
            </p>
            <button class="py-[15px] px-[40px] text-md  text-white bg-[#333] text-sm font-bold">
              Shop Now
            </button>
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
      { header: "Accessories",
        title: "Bottle Grinder, Small, 2-Piece",
        image:
          "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/1.jpg",
      },
      { header: "Accessories",
        title: "Minimalist Chair",
        image:
          "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/2.jpg",
      },
      { header: "Handmade",
        title: "Modern Lamp Design",
        image:
          "https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/3.jpg",
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
