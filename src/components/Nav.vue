<template>
  <div class="mb-6">
    <header
      class="bg-white px-3 lg:px-6 w-full"
      :class="[
        'fixed top-0 left-0 transition-shadow duration-500 z-50',
        isScrolled ? 'shadow-xl' : 'shadow-none',
      ]"
    >
      <div class="container mx-auto lg:px-6 flex justify-between items-center">
        <a href="/" class="text-[#7e7e7e] font-bold">
          <img
            src="https://lezada.jamstacktemplates.dev/assets/images/logo.png"
            class=""
          />
        </a>

        <nav class="hidden md:flex space-x-14 relative">
          <div
            v-for="link in navLinks"
            :key="link.label"
            class="flex items-center my-8 cursor-pointer space-x-1 text-md font-medium text-[15px] text-[#7e7e7e] hover:text-[#333] group relative duration-500"
          >
            <router-link :to="link.url">{{ link.label }}</router-link>

            <div
              class="fixed inset-x-0 top-[60px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 z-50"
            >
              <div class="container mx-auto z-50">
                <Dropdown :label="link.label" />
              </div>
            </div>
            <div></div>
            <svg
              stroke="currentColor"
              fill="#ededed"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="group-hover:fill-[#333] mt-1 transition-colors duration-500"
            >
              <path
                d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
              />
            </svg>

            <span
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#333] transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-75 group-hover:origin-left"
            />
          </div>
        </nav>

        <div class="lg:hidden flex py-6 items-center space-x-4">
          <router-link
            :to="{ name: 'wishlist' }"
            class="text-[#333] hover:text-gray-800 cursor-pointer text-xl"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"
              ></path>
            </svg>
          </router-link>
          <router-link
            :to="{ name: 'cart' }"
            class="text-[#333] hover:text-gray-800 cursor-pointer text-xl"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                transform="rotate(-1.057 159.995 423.97) scale(.99997)"
                cx="160"
                cy="424"
                rx="24"
                ry="24"
              ></ellipse>
              <ellipse
                transform="matrix(.02382 -.9997 .9997 .02382 -48.51 798.282)"
                cx="384.5"
                cy="424"
                rx="24"
                ry="24"
              ></ellipse>
              <path
                d="M463.8 132.2c-.7-2.4-2.8-4-5.2-4.2L132.9 96.5c-2.8-.3-6.2-2.1-7.5-4.7-3.8-7.1-6.2-11.1-12.2-18.6-7.7-9.4-22.2-9.1-48.8-9.3-9-.1-16.3 5.2-16.3 14.1 0 8.7 6.9 14.1 15.6 14.1s21.3.5 26 1.9c4.7 1.4 8.5 9.1 9.9 15.8 0 .1 0 .2.1.3.2 1.2 2 10.2 2 10.3l40 211.6c2.4 14.5 7.3 26.5 14.5 35.7 8.4 10.8 19.5 16.2 32.9 16.2h236.6c7.6 0 14.1-5.8 14.4-13.4.4-8-6-14.6-14-14.6H188.9c-2 0-4.9 0-8.3-2.8-3.5-3-8.3-9.9-11.5-26l-4.3-23.7c0-.3.1-.5.4-.6l277.7-47c2.6-.4 4.6-2.5 4.9-5.2l16-115.8c.2-.8.2-1.7 0-2.6z"
              ></path>
            </svg>
          </router-link>
          <button
            @click="modalsStore.toggleNav()"
            class="text-[#333] hover:text-gray-800 cursor-pointer text-xl"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="hidden lg:block">
          <div class="flex items-center justify-center space-x-8 text-xl">
            <div>
              <div v-if="userStore.user" class="group relative">
                Hi, {{ userStore.user.name }}

                <div
                  class="opacity-0 absolute top-[25px] bg-yellow-50 w-full text-center group-hover:opacity-100 duration-500"
                >
                  <button class="cursor-pointer" @click="userStore.logout()">
                    Logout
                  </button>
                </div>
              </div>
              <span v-else>Guest</span>
            </div>
            <div class="relative flex items-center">
              <button
                @click="modalsStore.toggleSearch()"
                class="text-[#333] hover:text-gray-800 cursor-pointer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"
                  ></path>
                </svg>
              </button>
            </div>
            <router-link
              v-if="!userStore.user"
              :to="{ name: 'login-register' }"
              class="text-[#333] hover:text-gray-800 cursor-pointer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"
                ></path>
              </svg>
            </router-link>
            <button
              @click="modalsStore.toggleWishlist()"
              class="text-[#333] hover:text-gray-800 cursor-pointer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"
                ></path>
              </svg>
            </button>
            <button
              @click="modalsStore.toggleCart()"
              class="text-[#333] hover:text-gray-800 cursor-pointer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  transform="rotate(-1.057 159.995 423.97) scale(.99997)"
                  cx="160"
                  cy="424"
                  rx="24"
                  ry="24"
                ></ellipse>
                <ellipse
                  transform="matrix(.02382 -.9997 .9997 .02382 -48.51 798.282)"
                  cx="384.5"
                  cy="424"
                  rx="24"
                  ry="24"
                ></ellipse>
                <path
                  d="M463.8 132.2c-.7-2.4-2.8-4-5.2-4.2L132.9 96.5c-2.8-.3-6.2-2.1-7.5-4.7-3.8-7.1-6.2-11.1-12.2-18.6-7.7-9.4-22.2-9.1-48.8-9.3-9-.1-16.3 5.2-16.3 14.1 0 8.7 6.9 14.1 15.6 14.1s21.3.5 26 1.9c4.7 1.4 8.5 9.1 9.9 15.8 0 .1 0 .2.1.3.2 1.2 2 10.2 2 10.3l40 211.6c2.4 14.5 7.3 26.5 14.5 35.7 8.4 10.8 19.5 16.2 32.9 16.2h236.6c7.6 0 14.1-5.8 14.4-13.4.4-8-6-14.6-14-14.6H188.9c-2 0-4.9 0-8.3-2.8-3.5-3-8.3-9.9-11.5-26l-4.3-23.7c0-.3.1-.5.4-.6l277.7-47c2.6-.4 4.6-2.5 4.9-5.2l16-115.8c.2-.8.2-1.7 0-2.6z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <NavMenu v-show="modalsStore.isNavOpen" @close="modalsStore.closeNav" />
      <SearchModal
        v-show="modalsStore.isSearchOpen"
        @close="modalsStore.closeSearch"
      />
      <CartModal
        v-show="modalsStore.isCartOpen"
        @close="modalsStore.closeCart"
      />
      <WishListModal
        v-show="modalsStore.isWishlistOpen"
        @close="modalsStore.closeWishlist"
      />
    </header>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useModalsStore } from "@/stores/modalsStore";
import NavMenu from "@/components/Modals/NavMenu.vue";
import SearchModal from "./Modals/SearchModal.vue";
import Dropdown from "./Homepage/NavDropdown/dropdown.vue";
import CartModal from "./Modals/CartModal.vue";
import WishListModal from "./Modals/WishListModal.vue";

const modalsStore = useModalsStore();
const userStore = useUserStore();
const isScrolled = ref(false);

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Shop", url: "/shop" },
  { label: "Elements", url: "/" },
  { label: "Pages", url: "" },
  { label: "Blog", url: "/blog" },
];

const profilePic = computed(() => userStore.user?.name);
console.log(profilePic, "profile");

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
