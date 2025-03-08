<template>
  <div class="w-full">
    <TopSection
      :breadcrumb="{
        header: 'About us',
        parentLink: '',
        parentPath: '/aboutus',
        link: 'About Us',
      }"
      backgroundImage="https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-1.png"
      :showBreadcrumb="true"
    >
      <main class="py-6 w-full">
        <div class="container mx-auto m">
          <div class="container mx-auto px-4 ">
            <div class="mb-4">
              <h2 class="text-5xl font-normal text-[#333] text-center">Basic minimalism</h2>
            </div>
            <div class="mb-16">
              <h3 class="text-sm tracking-widest text-[#333] uppercase text-center">
                LEZADA STORE - SIMPLY AND BASIC
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="">
                <img class="h-full w-full"
                  src="https://lezada.jamstacktemplates.dev/assets/images/backgrounds/about-bg.png"
                />
              </div>

              <div class=" ">
                <p class="text-[#7e7e7e] text-sm">
                  Lorem ipsum dolor sit amet, consectetur cing elit. Suspe
                  ndisse suscipit sagittis leo sit estibulum issim Lorem ipsum
                  dolor sit amet, consectetur cing elit. ipsum dolor sit amet,
                  consectetur cing elit. Suspe ndisse suscipit sagittis leo sit
                  es
                </p>
                <div class="">
                  <h6 class="uppercase mt-8  font-bold text-[#333]">Address</h6>
                  <div class="my-8 text-[#7e7e7e] text-sm">
                    1800 Abbot Kinney Blvd. Unit D & E Venice
                  </div>
                </div>
                <div class="">
                  <h6 class="uppercase font-bold text-[#333]">Phone</h6>
                  <div class="my-8 text-[#7e7e7e] text-sm">
                    <p>Mobile: (+88) – 1990</p>
                    <p>Hotline: 1800 – 1102</p>
                  </div>
                </div>
                <div class="">
                  <h6 class="uppercase font-bold text-[#333]">email</h6>
                  <div class="my-8 text-[#7e7e7e] text-sm">
                    contact@lezadastore.com
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class=" my-8 mt-16 flex items-center justify-center flex-col">
            <div
        class="relative h-128 w-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style="
          background-image: url('https://lezada.jamstacktemplates.dev/assets/images/backgrounds/testimonials-bg.png')
        "
      >
      
      </div>
        </div>



        <div class="container mx-auto m">
          <div class="container mx-auto px-4 ">
            <div class="mb-4">
              <h2 class="text-5xl font-normal text-[#333] text-center">Basic minimalism</h2>
            </div>
            <div class="mb-16">
              <h3 class="text-sm tracking-widest text-[#333] uppercase text-center">
                LEZADA STORE - SIMPLY AND BASIC
              </h3>
            </div>


<div class="h-screen w-screen bg-cover bg-center bg-no-repeat my-16" style="
          background-image: url('https://lezada.jamstacktemplates.dev/assets/images/backgrounds/about-video-bg-2.png')
        ">

</div>





            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-12">
                <p class="text-sm text-[#333]">On all orders over $99</p>
                <h3 class="font-medium text-4xl text-[#333]">Free Shipping and return</h3>
                <p class="text-[#777777] text-sm">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>
              </div>

              <div class="space-y-12">
                <p class="text-sm text-[#333]">Support 24/7</p>
                <h3 class="font-medium text-4xl text-[#333]">Money back</h3>
                <p class="text-[#777777] text-sm">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </TopSection>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Footer from "@/components/Homepage/Footer.vue";
import TopSection from "@/components/TopSection/TopSection.vue";

const message = ref({
  firstName: "",
  email: "",
  subject: "",
  message: "",
});
</script>
