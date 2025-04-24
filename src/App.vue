<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import "./App.css";
import Nav from "./components/Nav.vue";
import Footer from "./components/Homepage/Footer.vue";

onMounted(() => {
    console.log('App Mounted');
})
</script>

<template>
    <Nav />
    <RouterView />
    <Footer />
</template>

<style scoped></style>
