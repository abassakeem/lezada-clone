<template>
  <header class="bg-white">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="/" class="text-[#7e7e7e] font-bold text-xl">
        <img
          src="https://lezada.jamstacktemplates.dev/assets/images/logo.png"
        />
      </a>

      <nav class="hidden md:flex space-x-16 ">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.url"
          class="text-[#7e7e7e] hover:text-[#333] flex items-center"
        >
          {{ link.label }}
          <i class="pi pi-angle-down ml-1"></i>
        </a>
      </nav>

      <div class="flex items-center space-x-4">
        <div class="relative">
          <!-- <input
            type="text"
            class="bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          /> -->
          <a class="cursor-pointer">
            <i
              class="pi pi-search text-[#333] hover:text-gray-800 cursor:pointer"
            ></i>
          </a>
        </div>
        <a href="#" class="text-[#333] hover:text-gray-800 cursor:pointer">
          <i class="pi pi-user"></i>
        </a>
        <a href="#" class="text-[#333] hover:text-gray-800 cursor:pointer">
          <i class="pi pi-heart"></i>
        </a>
        <a href="#" class="text-[#333] hover:text-gray-800 cursor:pointer">
          <i class="pi pi-shopping-cart"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navLinks: [
        { label: "Home", url: "#" },
        { label: "Shop", url: "#" },
        { label: "Elements", url: "#" },
        { label: "Pages", url: "#" },
        { label: "Blog", url: "#" },
      ],
    };
  },
};
</script>

<style></style>
