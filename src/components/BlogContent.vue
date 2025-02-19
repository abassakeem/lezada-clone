<template>
    <div class="" v-for="product in products" :key="product.id">
        <img :src="product.img"/>

        <p>{{ product.date }}</p>
        <h6>{{ product.header }}</h6>
        <p>{{ product.summary }}</p>
        <router-link>Read more</router-link>

    </div>
  

</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
  isSinglePage: {
    type: Boolean,
    required: true,
  },})

</script>
