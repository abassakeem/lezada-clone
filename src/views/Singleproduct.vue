<template>
  <div class="w-full">
    <div
      class="relative h-64 w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
      :style="{
        backgroundImage: `url(' https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-1.png')`,
      }"
    >
      <div class="w-full max-w-6xl flex flex-col px-3 lg:px-6">
        <h1 class="text-4xl text-#333 font-light">Lorem ipsum dolor sit.</h1>
        <div class="flex items-center gap-2">
          <router-link to="/" class="text-[#777777]">Home</router-link>
          <span>/</span>
          <span class="text-[#333]">Lorem ipsum dolor sit.</span>
        </div>
      </div>
    </div>
  </div>
  <main class="min-h-screen py-16 mt-15">
    <div class="container mx-auto px-4">
      <div class="lg:flex justify-center gap-8 max-w-6xl mx-auto">
        <div class="w-full lg:w-1/2">
          <ProductCard :products="product" :isSinglePage="true" />
        </div>
        <div class="w-full lg:w-1/2">
        
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>

<script setup>
import Footer from "@/components/Homepage/Footer.vue";
import ProductCard from "@/components/Homepage/ProductCard.vue";

const product= [
        {
          id: 1,
          name: "Lorem ipsum decor one",
          img: "https://lezada.jamstacktemplates.dev/assets/images/product/decor/1.jpg",
          discount: 20,
          productType: "new",
          costPrice: 100,
        },
       
      ]
</script>

<style></style>
