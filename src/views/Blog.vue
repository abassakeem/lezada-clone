<template>
  <div class="w-full ">
    <!-- Hero Section -->
    <div
      v-if="product"
      class="relative h-64 w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
      :style="{
        backgroundImage: `url('https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-1.png')`,
      }"
    >
      <div class="w-full max-w-6xl flex flex-col px-3 lg:px-6 mt-16">
        <h1 class="text-4xl text-[#333] font-light">Blog</h1>
        <div class="flex items-center gap-2">
          <router-link to="/" class="text-[#777777]">Home</router-link>
          <span>/</span>
          <router-link to="/shop" class="text-[#333]">Blog</router-link>
          >
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="py-16">
      <div class="container mx-auto px-4">
        <div class="lg:flex justify-center gap-8 max-w-6xl mx-auto">
          <!-- Product Image Section -->
          <div class="w-full lg:w-1/5 space-y-6">
            <div class="">
              <input
                type="search"
                class="w-full border-b-2 outline-none py-4 border-[#ccc]"
                placeholder="Search products... "
              />
            </div>

            <div class="">
              <h3 class="mb-6 text-[#333] text-2xl">Categories</h3>

              <div class="all-categories space-y-4">
                <div class="" v-for="category in categories" :key="category.id">
                  <div
                    class="capitalize text-[#999999] duration-500 cursor-pointer hover:underline hover:text-[#333]"
                  >
                    {{ category.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-4/5">
            <BlogContent :products="blog"  />
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Footer from "@/components/Homepage/Footer.vue";
import ProductSection from "@/components/Homepage/ProductsSection.vue";
import BlogContent from "@/components/BlogContent.vue";



const categories = ref([
    {
      id: 1,
      title: "all categories",
    },
    {
      id: 2,
      title: "decor",
    },
    {
      id: 3,
      title: "men",
    },
    {
      id: 4,
      title: "woman",
    },
   
  ]);

const blog = ref([
  {
    id: 1,
    img: "https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail.png",
    date: "feb 19 2025",
    header: "Lorem 49594",
    summary: "kprdmfmdfmsovmldvjosjvovdv",
    description: "",
  },
  {
    id: 2,
    img: "https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-6.png",
    date: "feb 19 2025",
    header: "",
    Summary: "",
    description: "",
  },
  {
    id: 3,
    img: "https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-2-1.png",
    date: "feb 19 2025",
    header: "",
    Summary: "",
    description: "",
  },
  {
    id: 4,
    img: "https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-2-1.png",
    date: "feb 19 2025",
    header: "",
    Summary: "lorem 30",
    description: "",
  },
 
]);


</script>
