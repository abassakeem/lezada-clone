<template>
  <div class="fixed inset-0 z-50">
    <!-- Background Overlay -->
    <div class="fixed inset-0 bg-black/30 transition-opacity transform ease duration-500" @click="$emit('close')"></div>

    <!-- Main Menu -->
    <div class="fixed right-0 top-0 bottom-0 transform transition-transform duration-500 text-white w-5/6 md:w-1/2 origin-left h-screen flex">
      <!-- Sidebar -->
      <div class="w-[10%] h-full  flex items-start justify-start">
        <button class="bg-[#333] w-full left-4 z-10 p-4" @click="$emit('close')">
          <svg class="h-8 w-8" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path>
          </svg>
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
          <svg class=" absolute right-4 text-[#333] top-5 text-xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path>
          </svg>
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
