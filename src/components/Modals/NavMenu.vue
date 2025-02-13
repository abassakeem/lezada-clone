<template>
  <div class="fixed inset-0 z-50">
    <!-- Background Overlay -->
    <div class="fixed inset-0 bg-black/30 transition-opacity transform ease duration-500" @click="$emit('close')"></div>

    <!-- Main Menu -->
    <div class="fixed transform transition-transform duration-500 inset-0 text-white w-screen h-screen flex">
      <!-- Sidebar -->
      <div class="w-[20%] h-full bg-black/20 flex items-start justify-start">
        <button class="bg-[#333] w-full left-4 z-10 p-4" @click="$emit('close')">
          <i class="pi pi-times text-white text-3xl"></i>
        </button>
      </div>

      <!-- Search Input Section -->
      <div class="w-full h-full bg-white">
        <div class="w-full relative">
          <input
            type="search"
            placeholder="Search here"
            class="w-full py-[9px] px-[25px] placeholder-shown:text-gray-600 bg-gray-200 h-[65px]"
          />
          <i class="pi absolute right-4 pi-search text-[#333] top-5 text-xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "NavMenu",
  
};
</script>

<style></style>
