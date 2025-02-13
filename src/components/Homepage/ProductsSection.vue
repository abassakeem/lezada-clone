<template>
  <div class="flex items-center justify-center">
    <div class="max-w-6xl w-full flex flex-col items-center justify-center">
      <div class="tab-header text-5xl text-[#ccc] flex items-center justify-center space-x-10 my-16">
        <h3 @click="setActiveTab('New')" class="hover:text-[#333] duration-500  cursor-pointer" :class="{ 'text-[#333]': activeTab === 'New' }">New</h3>
        <h3 @click="setActiveTab('Popular')" class="hover:text-[#333] duration-500 cursor-pointer" :class="{ 'text-[#333]': activeTab === 'Popular' }">Popular</h3>
        <h3 @click="setActiveTab('Sale')" class="hover:text-[#333] duration-500 cursor-pointer" :class="{ 'text-[#333]': activeTab === 'Sale' }">Sale</h3>
      </div>

      <div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">  <ProductCard :products="products" :isSinglePage="false"/></div>
    
      </div> 
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";


 

  
    const activeTab = ref("Popular");

    const setActiveTab = (tab) => {
      activeTab.value = tab;
    };

    const products= [
        {
          id: 1,
          name: "Lorem ipsum decor one",
          img: "https://lezada.jamstacktemplates.dev/assets/images/product/decor/1.jpg",
          discount: 20,
          productType: "new",
          costPrice: 100,
        },
        {
          id: 2,
          name: "Lorem ipsum decor two",
          img: "https://lezada.jamstacktemplates.dev/assets/images/product/decor/2.jpg",
          discount: 15,
          productType: "sale",
          costPrice: 120,
        },
        {
          id: 3,
          name: "Lorem ipsum decor three",
          img: "https://lezada.jamstacktemplates.dev/assets/images/product/decor/3.jpg",
          discount: 10,
          productType: "new",
          costPrice: 80,
        },
        {
          id: 4,
          name: "Lorem ipsum decor four",
          img: "https://lezada.jamstacktemplates.dev/assets/images/product/decor/4.jpg",
          discount: 10,
          productType: "new",
          costPrice: 80,
        },
        {
          id: 5,
          name: "Lorem ipsum decor five",
          img: "https://lezada.jamstacktemplates.dev/assets/images/product/decor/5.jpg",
          discount: 10,
          productType: "new",
          costPrice: 80,
        },
        {
          id: 6,
          name: "Lorem ipsum decor six",
          img: "https://lezada.jamstacktemplates.dev/assets/images/product/decor/6.jpg",
          discount: 10,
          productType: "new",
          costPrice: 80,
        },
      ]

   
</script>
