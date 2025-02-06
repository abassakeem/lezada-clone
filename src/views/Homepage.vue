<template>
  <div>
    <div class="">
      <HeroSection />
      <ProductsSection />
      <SaleSection />
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Homepage/Footer.vue";
import HeroSection from "@/components/Homepage/HeroSection.vue";
import ProductsSection from "@/components/Homepage/ProductsSection.vue";
import SaleSection from "@/components/Homepage/SaleSection.vue";

export default {
  name: "Homepage",
  components: {
    HeroSection,
    ProductsSection,
    SaleSection,
    Footer
  },
};
</script>

<style></style>
