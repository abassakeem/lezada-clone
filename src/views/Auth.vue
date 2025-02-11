<template>
  <div class="screen h-full w-full group relative flex flex-col">
    <div
      class="relative h-64 w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
      :style="{
        backgroundImage: `url('https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-2.jpg')`,
      }"
    >
      <div class="w-full max-w-6xl flex flex-col px-3 lg:px-6">
        <h1 class="text-4xl text-#333 font-ligh">Customer Login</h1>
        <router-link to="/" class="flex"
          ><span class="text-[#777777]">Home</span></router-link
        >
        / <span class="text-[#333]">Customer Login</span>
      </div>
    </div>
    <div class="max-w-6xl flex justify-between items-center"></div>
  </div>
  <Login />
  <Footer />
</template>

<script setup>
import Footer from "@/components/Homepage/Footer.vue";
import Login from "@/components/Auth/Login.vue";
import Register from "@/components/Auth/Register.vue";
</script>

<style></style>
