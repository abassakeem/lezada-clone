<template>
    <div class="fixed inset-0 bg-black/30 transition-opacity duration-300"></div>
    <div class="fixed inset-0 text-white w-screen h-screen flex z-50">
      <div class="w-[20%] h-full bg-black/20 flex items-start justify-start">
        <button ref="prevEl" class="bg-[#333] w-full left-4 z-10 p-4 ">
          <i class="pi pi-times text-white text-3xl "></i>
        </button>
      </div>
      <div class="w-full h-full bg-white">
        <div class="w-full relative">
            <input type="search" placeholder="Search here" class="w-full py-[9px] px-[25px] placeholder-shown:text-gray-600 bg-gray-200 h-[65px]" />

            <i class="pi absolute right-4 pi-search text-[#333] top-5   text-xl "></i>
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
