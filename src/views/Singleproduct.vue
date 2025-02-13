<template>
  <div class="w-full">
    <!-- Hero Section -->
    <div
      v-if="product"
      class="relative h-64 w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
      :style="{
        backgroundImage: `url('https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-1.png')`,
      }"
    >
      <div class="w-full max-w-6xl flex flex-col px-3 lg:px-6">
        <h1 class="text-4xl text-[#333] font-light">{{ product.name }}</h1>
        <div class="flex items-center gap-2">
          <router-link to="/" class="text-[#777777]">Home</router-link>
          <span>/</span>
          <router-link to="/" class="text-[#777777]">Shop</router-link>
          <span>/</span>
          <span class="text-[#333]">{{ product.name }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="py-16">
      <div class="container mx-auto px-4">
        <div class="lg:flex justify-center gap-8 max-w-6xl mx-auto">
          <!-- Product Image Section -->
          <div class="w-full lg:w-1/2">
            <div v-if="product" class="space-y-4">
              <div class="relative group">
                <img
                  :src="product.img"
                  :alt="product.name"
                  class="w-full h-auto transition-transform duration-500 hover:scale-110 cursor-pointer"
                />

                <!-- Product Badges -->
                <div class="absolute top-4 left-4 space-y-3">
                  <div
                    v-if="product.discount"
                    class="bg-teal-400 w-10 h-10 flex items-center justify-center rounded-full"
                  >
                    <span class="text-white text-sm">-{{ product.discount }}%</span>
                  </div>
                  <div
                    v-if="product.productType"
                    class="bg-red-600 w-10 h-10 flex items-center justify-center rounded-full"
                  >
                    <span class="text-white text-sm">{{ product.productType }}</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="absolute top-4 right-4 space-y-3">
                  <button
                    @click="toggleWishlist(product)"
                    class="block w-8 h-8 transition-colors hover:text-red-500"
                    aria-label="Add to wishlist"
                  >
                    <svg
                      class="w-full h-full"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z" />
                    </svg>
                  </button>
                  <button
                    @click="toggleCompare(product)"
                    class="block w-8 h-8 transition-colors hover:text-blue-500"
                    aria-label="Compare product"
                  >
                    <svg
                      class="w-full h-full"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z" />
                    </svg>
                  </button>
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
                  <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
                </svg>
              </div>
              <span class="text-gray-600">5 customer reviews</span>
            </div>

            <!-- Product Info -->
            <h2 v-if="product" class="text-4xl font-bold">{{ product.name }}</h2>
            <div class="flex gap-2 items-center">
              <span v-if="product.discount" class="text-gray-400 line-through">${{ product.costPrice }}</span>
              <span class="text-xl font-bold">${{ calculateDiscountedPrice(product.costPrice, product.discount) }}</span>
            </div>
            <p class="text-gray-700 leading-relaxed">{{ product.description }}</p>

          
            <div class="grid gap-8">
              <!-- Size Selection -->
              <div class="flex items-center">
                <h3 class="w-24 font-medium">Size:</h3>
                <div class="flex gap-4">
                  <button
                    v-for="size in product.sizes"
                    :key="size"
                    class="px-4 py-2  hover:bg-gray-100 transition-colors"
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
                    class="w-6 h-6 rounded-full border transition-transform hover:scale-110"
                    :style="{ backgroundColor: color }"
                    :aria-label="`Select ${color} color`"
                  ></button>
                </div>
              </div>

              <div class="flex items-center">
                <h3 class="w-24 font-medium">Quantity:</h3>
                <div class="flex items-center border-b">
                  <button
                    @click="decreaseQuantity"
                    class="px-4 py-2 hover:bg-gray-100 transition-colors"
                    :disabled="quantity <= 0"
                  >
                    -
                  </button>
                  <span class="px-4 py-2  min-w-[3rem] text-center">{{ quantity }}</span>
                  <button
                    @click="increaseQuantity"
                    class="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Footer from "@/components/Homepage/Footer.vue";

const oneproduct = ref([
  {
    id: 1,
    sizes: ["X", "XL", "L"],
    colors: ["black", "blue", "red"],
    name: "Lorem ipsum decor one",
    img: "https://lezada.jamstacktemplates.dev/assets/images/product/decor/1.jpg",
    discount: 20,
    productType: "new",
    costPrice: 100,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis beatae nam cum eligendi similique rerum repellendus tempora dolores sapiente debitis quia ut exercitationem, ipsum nemo magni aliquid illo aspernatur omnis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis beatae nam cum eligendi similique rerum repellendus tempora dolores sapiente debitis quia ut exercitationem, ipsum nemo magni aliquid illo aspernatur omnis?",
  },
]);

const product = computed(() => oneproduct.value[0]);
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