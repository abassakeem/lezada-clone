<template>
  <div class="flex items-center justify-center">
    <div class="max-w-5xl w-full flex flex-col justify-center">
      <div
        :class="{
          'tab-header text-5xl text-[#ccc]  space-x-10 my-16': true,
          hidden: isShop,
          block: !isShop,
        }"
      >
        <div class="Header flex space-x-10 justify-start items-start text-left">
          <h3
            @click="setActiveTab('New')"
            class="hover:text-[#333] duration-500 cursor-pointer"
            :class="{ 'text-[#333]': activeTab === 'Popular' }"
          >
            Popular
          </h3>
          <span>/</span>
          <h3
            @click="setActiveTab('New')"
            class="hover:text-[#333] duration-500 cursor-pointer"
            :class="{ 'text-[#333]': activeTab === 'New' }"
          >
            New
          </h3>
          <span>/</span>
          <h3
            @click="setActiveTab('Sale')"
            class="hover:text-[#333] duration-500 cursor-pointer"
            :class="{ 'text-[#333]': activeTab === 'Sale' }"
          >
            Sale
          </h3>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-center">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <ProductCard :products="products" :isSinglePage="false" />
          </div>
          
        
        </div><div class="text-white text-center mt-8 ">
              <button class="bg-[#333] px-[40px] py-[15px] font-bold cursor-pointer">+ online store</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "../Homepage/ProductCard.vue";
defineProps({
  isShop: Boolean,
});
const activeTab = ref("Popular");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const products = [
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
];
</script>
