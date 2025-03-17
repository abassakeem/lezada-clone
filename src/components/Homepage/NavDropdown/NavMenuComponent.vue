<template>
  <div class="w-full duration-500">
    <div
      class="flex justify-between max-w-6xl mx-auto space-x-16 bg-white p-8 pb-2 shadow-sm"
    >
      <template v-for="(group, key) in subGroups" :key="key">
        <div v-if="group.img" class="flex-1">
          <div class="rounded-lg overflow-hidden">
            <img
              :src="group.img"
              alt="Featured"
              class="w-full h-48 object-contain"
            />
          </div>
        </div>

        <div v-else class="flex-1">
          <h3 class="font-medium text-[#333] mb-4">{{ group.header }}</h3>
          <ul class="space-y-2 pb-1">
            <li
              v-for="(link, index) in group.links"
              :key="index"
              class="relative group"
            >
              <router-link
                :to="link"
                class="text-[#7e7e7e] font-normal duration-500 hover:text-[#7e7e7e] border-b border-transparent hover:border-b-[#333] capitalize"
              >
                {{ link.title }}

                <span
                  v-if="link.img"
                  class="absolute z-[100] left-40 opacity-0 scale-75 transition-all duration-300 hover:opacity-100 group-hover:scale-150 w-100"
                >
                  <img :src="link.img" class="size-14" />
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  subGroups: {
    type: Object,
    required: true,
  },
});
</script>
