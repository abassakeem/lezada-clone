<template>
  <div class="flex items-center justify-center">
    <div class="max-w-6xl w-full flex flex-col items-center justify-center">
      <div class="tab-header text-5xl text-[#ccc] flex items-center justify-center space-x-10 my-16">
        <h3 @click="setActiveTab('New')" class="hover:text-[#333] duration-300  cursor-pointer" :class="{ 'text-[#333]': activeTab === 'New' }">New</h3>
        <h3 @click="setActiveTab('Popular')" class="hover:text-[#333] duration-300 cursor-pointer" :class="{ 'text-[#333]': activeTab === 'Popular' }">Popular</h3>
        <h3 @click="setActiveTab('Sale')" class="hover:text-[#333] duration-300 cursor-pointer" :class="{ 'text-[#333]': activeTab === 'Sale' }">Sale</h3>
      </div>

      <div>
        <ProductCard />
      </div> 
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";

export default {
  components: { ProductCard },

  setup() {
    const activeTab = ref("Popular");

    const setActiveTab = (tab) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
};
</script>
