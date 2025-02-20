<script setup>
import { RouterLink, RouterView } from "vue-router";
import "./App.css";
import Nav from "./components/Nav.vue";
import Footer from "./components/Homepage/Footer.vue";
</script>

<template>
  
    <Nav />
    <RouterView />
    <Footer />
    
  
</template>

<style scoped></style>
