<template>
  <div class="flex items-center justify-center">
    <div class="max-w-6xl w-full flex flex-col items-center justify-center">
      <div
        :class="{
          'tab-header text-2xl lg:text-5xl text-[#ccc] flex items-center justify-center space-x-10 my-10 lg:my-16': true,
          hidden: isShop,
          block: !isShop,
        }"
      >
        <h3
          @click="setActiveTab('New')"
          class="hover:text-[#333] duration-500 cursor-pointer"
          :class="{ 'text-[#333]': activeTab === 'New' }"
        >
          New
        </h3>
        <h3
          @click="setActiveTab('Popular')"
          class="hover:text-[#333] duration-500 cursor-pointer"
          :class="{ 'text-[#333]': activeTab === 'Popular' }"
        >
          Popular
        </h3>
        <h3
          @click="setActiveTab('Sale')"
          class="hover:text-[#333] duration-500 cursor-pointer"
          :class="{ 'text-[#333]': activeTab === 'Sale' }"
        >
          Sale
        </h3>
      </div>

      <div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-3">
          <ProductCard :products="products" :isSinglePage="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductCard from "./ProductCard.vue";

defineProps({
  isShop: Boolean,
});

const activeTab = ref("Popular");
const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const products = ref([]);
const loading = ref(false);
const error = ref(null);

const token_data = localStorage.getItem("auth_token");

const getProducts = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get("http://134.209.223.106/api/products", {
      headers: {
        Authorization: `Bearer ${token_data}`,
      },
    });
    products.value = response.data.data.data;
    console.log("Products loaded:", response.data);
  } catch (err) {
    console.error("Fetch Error:", err);
    error.value = "Failed to fetch products.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getProducts();
});
</script>
