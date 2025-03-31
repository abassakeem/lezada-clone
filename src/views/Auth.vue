<template>
  <div class="w-full">
    <div
      class="relative h-64 w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
      :style="{
        backgroundImage: `url('https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-2.jpg')`,
      }"
    >
      <div class="w-full max-w-6xl flex flex-col px-3 lg:px-6">
        <h1 class="text-4xl text-#333 font-light">Customer Login</h1>
        <div class="flex items-center gap-2">
          <router-link to="/" class="text-[#777777]">Home</router-link>
          <span>/</span>
          <span class="text-[#333]">Customer Login</span>
        </div>
      </div>
    </div>
  </div>

  <main class="min-h-screen py-16 mt-15">
    <div class="container mx-auto px-4">
      <div class="lg:flex justify-center gap-8 max-w-6xl mx-auto">
        <div class="w-full lg:w-1/2">
          <Login />
        </div>
        <div class="w-full lg:w-1/2">
          <Register />
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>

<script setup>
import Footer from "@/components/Homepage/Footer.vue";
import Login from "@/components/Auth/Login.vue";
import Register from "@/components/Auth/Register.vue";

</script>

<style></style>
