<template>
  <div>
    <div class="">
      <HeroSection />
      <SpringCollection />
      <DealOfTheDay/>
      <PNS />
      <OurBlog/>
    </div>
  </div>
</template>

<script setup>
import DealOfTheDay from "@/components/Essentials/DealOfTheDay.vue";
import HeroSection from "@/components/Essentials/HeroSection.vue";
import PNS from "@/components/Essentials/PNS.vue";
import OurBlog from "@/components/Essentials/OurBlog.vue";
import SpringCollection from "@/components/Essentials/SpringCollection.vue";
</script>
