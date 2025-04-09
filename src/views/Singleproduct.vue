<template>
  <div class="w-full">
    <TopSection
      :breadcrumb="{
        header: product?.name || 'Product',
        parentLink: 'Shop',
        parentPath: '/shop',
        link: product?.name || 'Product Details',
      }"
      backgroundImage="https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-1.png"
      :showBreadcrumb="true"
    >
      <main class="py-16">
        <div class="container mx-auto px-4">
          <div class="lg:flex justify-center gap-8 max-w-6xl mx-auto">
            <!-- Product Image Section -->
            <div class="w-full lg:w-1/2">
              <div v-if="product" class="space-y-4">
                <div class="relative group">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-auto transition-transform duration-500 cursor-pointer"
                  />

                  <!-- Product Badges -->
                  <div class="absolute top-4 left-4 space-y-3">
                    <div
                      v-if="product.discount"
                      class="bg-teal-400 w-10 h-10 flex items-center justify-center rounded-full"
                    >
                      <span class="text-white text-sm"
                        >-{{ product.discount }}%</span
                      >
                    </div>
                    <div
                      v-if="product.productType"
                      class="bg-red-600 w-10 h-10 flex items-center justify-center rounded-full"
                    >
                      <span class="text-white text-sm">{{
                        product.productType
                      }}</span>
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="absolute top-4 right-4 space-y-3">
                    <button
                      @click="toggleWishlist(product)"
                      class="block w-8 h-8 transition-colors hover:text-red-500 cursor-pointer"
                      aria-label="Add to wishlist"
                    >
                      <svg
                        class="w-full h-full"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"
                        />
                      </svg>
                    </button>
                    <button
                      @click="toggleCompare(product)"
                      class="block w-8 h-8 transition-colors hover:text-blue-500 cursor-pointer"
                      aria-label="Compare product"
                    >
                      <svg
                        class="w-full h-full"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="overflow-x-auto pb-4 scrollbar-none">
                  <div class="flex space-x-2 min-w-max">
                    <div class="w-32 flex-shrink-0">
                      <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-auto transition-transform duration-500 cursor-pointer"
                      />
                    </div>
                    <div class="w-32 flex-shrink-0">
                      <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-auto transition-transform duration-500 cursor-pointer"
                      />
                    </div>
                    <div class="w-32 flex-shrink-0">
                      <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-auto transition-transform duration-500 cursor-pointer"
                      />
                    </div>
                    <div class="w-32 flex-shrink-0">
                      <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-auto transition-transform duration-500 cursor-pointer"
                      />
                    </div>
                    <div class="w-32 flex-shrink-0">
                      <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-auto transition-transform duration-500 cursor-pointer"
                      />
                    </div>
                    <div class="w-32 flex-shrink-0">
                      <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-auto transition-transform duration-500 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Details Section -->
            <div class="w-full lg:w-1/2 space-y-6">
              <!-- Rating -->
              <div class="flex items-center gap-4 mt-8">
                <div class="flex">
                  <svg
                    v-for="n in 5"
                    :key="n"
                    class="w-5 h-5 text-amber-300"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"
                    />
                  </svg>
                </div>
                <span class="text-gray-600">5 customer reviews</span>
              </div>

              <h2 v-if="product" class="text-4xl font-bold">
                {{ product.name }}
              </h2>
              <div class="flex gap-2 items-center">
                <span v-if="product.discount" class="text-gray-400 line-through"
                  >${{ product.costPrice }}</span
                >
                <span class="text-xl font-bold"
                  >
                     ${{product.price}}
                    
                  </span
                >
              </div>
              <p class="text-gray-700 leading-relaxed">
                {{ product.description }}
              </p>
              <div class="grid gap-3">
                <div class="flex items-center">
                  <h3 class="w-24 font-medium">Size:</h3>
                  <div class="flex gap-4">
                    <button
                      v-for="size in product.sizes"
                      :key="size"
                      @click="selectedSize = size"
                      class="hover:text-[#333] mx-1 text-lg transition-colors cursor-pointer"
                      :class="{
                        'text-[#333] border-[#333]': selectedSize === size,
                        'text-[#ababab]': selectedSize !== size,
                      }"
                    >
                      {{ size }}
                    </button>
                  </div>
                </div>

                <div class="flex items-center">
                  <h3 class="w-24 font-medium">Color:</h3>
                  <div class="flex gap-4">
                    <button
                      v-for="color in product.colors"
                      :key="color"
                      @click="selectedColor = color"
                      class="w-6 h-6 rounded-full transition-transform hover:scale-110 cursor-pointer"
                      :class="{
                        'ring-2 ring-[#333] ring-offset-2':
                          selectedColor === color,
                      }"
                      :style="{ backgroundColor: color }"
                      :aria-label="`Select ${color} color`"
                    ></button>
                  </div>
                </div>
                <div class="flex items-center">
                  <h3 class="w-24 font-medium">Quantity:</h3>
                  <div class="flex items-center border-b-2 border-[#ccc]">
                    <button
                      @click="decreaseQuantity"
                      class="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                      :disabled="quantity <= 0"
                    >
                      -
                    </button>
                    <span class="px-4 py-2 min-w-[3rem] text-center">{{
                      quantity
                    }}</span>
                    <button
                      @click="increaseQuantity"
                      class="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div class="mt-4 flex items-center gap-2">
                  <button
                    class="bg-[#333] text-white px-10 py-3 h-12 cursor-pointer"
                  >
                    ADD TO CART
                  </button>
                  <button
                    class="bg-transparent border-[#d8d8d8] border h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <svg class="h-4 w-4" viewBox="0 0 512 512">
                      <path
                        d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"
                      />
                    </svg>
                  </button>
                  <button
                    class="bg-transparent border-[#d8d8d8] border h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <svg class="h-4 w-4" viewBox="0 0 512 512">
                      <path
                        d="M405.9 288.1c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2h-75.5l-124-155-.1-.1c-2.6-3.1-6.7-5-10.8-5H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h107.4l52.5 66-52.5 66H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h114c4.1 0 8-1.8 10.7-5l.1-.1 53.2-66.8 53.2 66.8.1.1c2.7 3.2 6.6 5 10.7 5h84.4l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l33.6-33.4c4.2-4.1 6.5-9.6 6.5-15.5s-2.3-11.4-6.5-15.5l-35.6-35.5z"
                      />
                      <path
                        d="M279.4 235.4c1.1 1.4 2.8 2.1 4.6 2.1h.1c1.8 0 3.5-.8 4.6-2.2l37.9-47.3h75.8l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l35.6-35.4c4.2-4.1 6.5-9.7 6.5-15.5 0-5.9-2.3-11.4-6.5-15.5l-33.6-33.4c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2H320c-4.1 0-8 1.8-10.7 5l-.1.1-40.3 50.2c-1.8 2.2-1.8 5.4.1 7.6l10.4 12.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="grid gap-2">
                <div class="flex items-center">
                  <h3 class="w-24 font-medium">SKU:</h3>
                  <div class="flex gap-4 text-[#777777]">{{ product.sku }}</div>
                </div>

                <div class="flex items-center">
                  <h3 class="w-24 font-medium">Categories:</h3>
                  <div class="flex gap-4">
                    <button
                      class="w-6 h-6 rounded-full transition-transform cursor-pointer text-[#777777]"
                    >
                      {{ product.category }}
                    </button>
                  </div>
                </div>
                <div class="flex items-center">
                  <h3 class="w-24 font-medium">Tags:</h3>
                  <div class="flex items-center text-[#777777]">
                    {{ product.tags }}
                  </div>
                </div>
                <div class="flex items-center">
                  <h3 class="w-24 font-medium">Share on:</h3>
                  <div class="flex items-center">
                    <ul
                      class="social-icons text-[#777777] flex justify-center items-center gap-2 text-md"
                    >
                      <li>
                        <a href="https://www.twitter.com"
                          ><svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            ></path></svg
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com"
                          ><svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 320 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            ></path></svg
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com"
                          ><svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            ></path></svg
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com"
                          ><svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 576 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                            ></path></svg
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </TopSection>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Footer from "@/components/Homepage/Footer.vue";
import TopSection from "@/components/TopSection/TopSection.vue";
import axios from "axios";
import { useRoute } from "vue-router";



const route = useRoute();

const product = ref([]);
const loading = ref(false);
const error = ref(null);
const token_data = localStorage.getItem("auth_token");


const getProduct= async()=>{
   loading.value = ref(true);

  try{
    const response =await  axios.get(`http://134.209.223.106/api/products/${route.params.id}`, {
      headers: {
        Authorization: `Bearer ${token_data}`,
      },
    })
    console.log("product response", response.data.data)
    product.value = response.data.data

    const loading = ref(true);
  }

catch (err) {
    console.error("Fetch Error:", err);
    error.value = "Failed to fetch products.";
  } finally {
    loading.value = false;
  }

}

onMounted(() => {
  getProduct();
});


const selectedSize = ref("");
const selectedColor = ref("");

const quantity = ref(0);

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};

const calculateDiscountedPrice = (price, discount) => {
  if (!discount) return price;
  const discountedAmount = (price * discount) / 100;
  return (price - discountedAmount).toFixed(2);
};

const toggleWishlist = (product) => {
  console.log("Toggle wishlist for product:", product.id);
};

const toggleCompare = (product) => {
  console.log("Toggle compare for product:", product.id);
};
</script>
