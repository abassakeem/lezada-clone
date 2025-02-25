<template>
  <div class="w-full">
 
    <div v-if="showBreadcrumb" class="flex justify-center items-center">
      <div
        class="relative h-64 w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
        :style="{
          backgroundImage: `url('${backgroundImage}')`
        }"
      >
        <div class="w-full max-w-6xl flex flex-col justify-center px-3 lg:px-6 mt-16">
          <h1 class="text-4xl text-[#333] font-light">{{ breadcrumb.header }}</h1>
          <div class="flex items-center gap-2">
            <router-link to="/" class="text-[#777777] hover:text-[#333] transition-colors">
              Home
            </router-link>
            <span class="text-[#777777]">/</span>
            <router-link 
              :to="breadcrumb.parentPath" 
              class="text-[#777777] hover:text-[#333] transition-colors"
            >
              {{ breadcrumb.parentLink }}
            </router-link>
            <!-- <span class="text-[#777777]">/</span> -->
            <span class="text-[#333]">{{ breadcrumb.link }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="py-16">
      <div class="container mx-auto px-4">
        <div class="lg:flex justify-center gap-8 max-w-6xl mx-auto">
          <slot></slot>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'


const props = defineProps({
  breadcrumb: {
    type: Object,
    required: true,
    
  },
  backgroundImage: {
    type: String,
    default: '/assets/images/backgrounds/breadcrumb-bg-1.png'
  },
  showBreadcrumb: {
    type: Boolean,
    default: true
  }
})
</script>

