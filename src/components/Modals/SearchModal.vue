<template>
  <Transition
    enter-active-class="duration-500 ease-out"
    enter-from-class="translate-x-full opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-active-class="duration-500 ease-in"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="translate-x-full opacity-0"
  >
    <div
      v-if="modalsStore.isSearchOpen"
      class="fixed inset-0 w-full h-full z-50 bg-white flex items-center justify-center transition-transform"
    >
      <div
        class="cancel-btn absolute right-10 top-10 text-5xl cursor-pointer hover:rotate-90 duration-600"
      >
        <button @click="modalsStore.closeSearch" class="cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            ></path>
          </svg>
        </button>
      </div>

      <div class="text-black cursor-pointer">
        <div>
          <input
            type="search"
            class="text-6xl border-b-2 placeholder-shown:text-[#7e7e7e] border-[#333] outline-none"
            placeholder="Search Products..."
          />
        </div>

        <div class="mt-4">
          <label class="text-[#777777]"># Hit enter to search</label>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useModalsStore } from "@/stores/modalsStore";
import { watch } from "vue";

const modalsStore = useModalsStore();

watch(
  () => modalsStore.isSearchOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  },
  { immediate: true }
);
</script>
