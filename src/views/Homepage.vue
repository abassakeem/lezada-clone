<template>
  <div>
    <div class="">
      <HeroSection />
      <ProductsSection />
      <SaleSection />
    
    </div>
  </div>
</template>

<script setup>
import Footer from "@/components/Homepage/Footer.vue";
import HeroSection from "@/components/Homepage/HeroSection.vue";
import ProductsSection from "@/components/Homepage/ProductsSection.vue";
import SaleSection from "@/components/Homepage/SaleSection.vue";
// import { useCartStore } from "@/stores/cartStore";
// import { useWishlistStore } from "@/stores/wishlistStore";
// import { onMounted } from "vue";

// const cartStore = useCartStore();
// const wishlistStore = useWishlistStore();

// onMounted(async () => {
//   await Promise.all([
//     cartStore.getCartItems(),
//     wishlistStore.getWishlistItems()
//   ])
// })


</script>

<style></style>
