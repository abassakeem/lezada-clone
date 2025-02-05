<template>
    <header class="bg-white">
      <div class="container mx-auto px-3 py-8 flex justify-between items-center">
        <a href="/" class="text-[#7e7e7e] font-bold">
          <img
            src="https://lezada.jamstacktemplates.dev/assets/images/logo.png"
          />
        </a>
  
        <nav class="hidden md:flex space-x-16">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.url"
            class="flex items-center text-lg my-4 text-[#7e7e7e] hover:text-[#333] group relative duration-300"
          >
            {{ link.label }}
            <i
              class="pi pi-angle-down ml-1 h-4 w-4 text-[#d0d0d0] group-hover:text-[#333] duration-300"
            ></i>
            <span
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#333] transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"
            ></span>
          </a>
        </nav>
  
        
        <div class="lg:hidden flex items-center space-x-4">
          <button class="text-[#333] hover:text-gray-800 cursor-pointer text-xl">
            <i class="pi pi-heart"></i>
          </button>
          <button class="text-[#333] hover:text-gray-800 cursor-pointer text-xl">
            <i class="pi pi-shopping-cart"></i>
          </button>
          <button @click="toggleNav">
            <i
              class="pi pi-bars text-[#333] hover:text-gray-800 cursor-pointer text-xl"
            ></i>
          </button>
        </div>
  
     
        <div class="hidden lg:block">
          <div class="flex items-center space-x-8">
            <div class="relative">
              <a class="cursor-pointer">
                <i
                  class="pi pi-search text-[#333] hover:text-gray-800 cursor-pointer"
                ></i>
              </a>
            </div>
            <a href="#" class="text-[#333] hover:text-gray-800 cursor-pointer">
              <i class="pi pi-user"></i>
            </a>
            <a href="#" class="text-[#333] hover:text-gray-800 cursor-pointer">
              <i class="pi pi-heart"></i>
            </a>
            <a href="#" class="text-[#333] hover:text-gray-800 cursor-pointer">
              <i class="pi pi-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
  
     
      <NavMenu v-if="isNavOpen" @close="isNavOpen = false" />
    </header>
  </template>
  
  <script>
  import NavMenu from "@/components/Modals/NavMenu.vue";
  
  export default {
    components: { NavMenu },
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
        isNavOpen: false,
      };
    },
    methods: {
      toggleNav() {
        this.isNavOpen = !this.isNavOpen;
      },
    },
  };
  </script>
  