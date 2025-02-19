<template>
    <div class="w-full">
      
      <div class="flex justify-center items-center">
        <div
          v-if="product"
          class="relative h-64 w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
          :style="{
            backgroundImage: `url('https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-1.png')`,
          }"
        >
          <div class="w-full max-w-6xl flex flex-col justify-center px-3 lg:px-6 mt-16">
            <h1 class="text-4xl text-[#333] font-light">Wishlist</h1>
            <div class="flex items-center just gap-2">
              <router-link to="/" class="text-[#777777]">Home</router-link>
              <span>/</span>
              
              <span class="text-[#333]">Wishlist</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Main Content -->
      <main class="py-16">
        <div class="container mx-auto px-4">
          <div class="lg:flex justify-center gap-8 max-w-6xl mx-auto">
            Wishlist
          </div>
        </div>
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import Footer from "@/components/Homepage/Footer.vue";
  
  const oneproduct = ref([
    {
      id: 1,
      sizes: ["X", "XL", "L"],
      colors: ["black", "blue", "red"],
      name: "Lorem ipsum decor one",
      img: "https://lezada.jamstacktemplates.dev/assets/images/product/decor/1.jpg",
      discount: 20,
      productType: "new",
      costPrice: 100,
      sku: "asdf101",
      categories: "decor",
      tags: "decor",
  
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis beatae nam cum eligendi similique rerum repellendus tempora dolores sapiente debitis quia ut exercitationem, ipsum nemo magni aliquid illo aspernatur omnis?Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ]);
  
  const selectedSize = ref("");
  const selectedColor = ref("");
  const product = computed(() => oneproduct.value[0]);
  const quantity = ref(0);
  
  const increaseQuantity = () => {
    quantity.value++;
  };
  
  const decreaseQuantity = () => {
    if (quantity.value > 0) {
      quantity.value--;
    }
  };
  
  const calculateDiscountedPrice = (price, discount) => {
    if (!discount) return price;
    const discountedAmount = (price * discount) / 100;
    return (price - discountedAmount).toFixed(2);
  };
  
  const toggleWishlist = (product) => {
    console.log("Toggle wishlist for product:", product.id);
  };
  
  const toggleCompare = (product) => {
    console.log("Toggle compare for product:", product.id);
  };
  </script>
  