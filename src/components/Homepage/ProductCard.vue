<template>
  <div v-for="product in products" :key="product.id" class="space-y-4" @click="()=>console.log(product.id)">
    <div class="relative group">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <div class="h-[500px] w-full relative group">
          <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full  hover:scale-101 cursor-pointer duration-500"
        />
        <img
          :src="product.hover_image"
          :alt="product.name"
          class="w-full h-full hover:scale-101 cursor-pointer duration-500 absolute top-0 opacity-0 group-hover:opacity-100"
        />
        </div>
        
      </router-link>
      <div class="absolute top-4 left-4 space-y-3">
        <div
          class="bg-teal-400 w-10 h-10 flex items-center justify-center rounded-full"
        >
          <span class="text-white text-sm">-{{ product.discount }}%</span>
        </div>
        <div
          class="bg-red-600 w-10 h-10 flex items-center justify-center rounded-full"
        >
          <span class="text-white text-sm">{{ product.productType }}</span>
        </div>
      </div>

      <div
        class="absolute top-4 right-4 opacity-0 invisible cursor-pointer group-hover:opacity-100 group-hover:visible transition-all duration-500"
      >
        <button
          class="bg-white p-3 cursor-pointer hover:bg-gray-100 transition-colors mb-3 block"
        >
          <svg class="h-4 w-4" viewBox="0 0 512 512">
            <path
              d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"
            />
          </svg>
        </button>
        <button
          class="bg-white p-3 mb-3 cursor-pointer hover:bg-gray-100 transition-colors block"
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
        <button
          class="bg-white p-3 cursor-pointer hover:bg-gray-100 transition-colors block"
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

      <div class="tracking-wide">
        <h3 class="relative my-2 duration-500">
          <span class="group-hover:opacity-0 transition-opacity duration-500">
            {{ product.name }}
          </span>

          <router-link
            :to="{ name: 'product', params: { id: product.id } }"
            class="absolute inset-0 text-[#d3122a] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            + Select option
          </router-link>
        </h3>
        <span  class="font-bold"
            >${{ product.price }}</span
          >
        <!-- <div class="flex gap-2">
          <span v-if="product.discount > 0" class="line-through text-gray-400"
            >${{ product.costPrice }}</span
          >
          <span class="font-bold"
            >${{
              calculateDiscountedPrice(product.costPrice, product.discount)
            }}</span
          >
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
  isSinglePage: {
    type: Boolean,
    required: true,
  },
});

const calculateDiscountedPrice = (costPrice, discount) => {
  const discountAmount = (costPrice * discount) / 100;
  return costPrice - discountAmount;
};
</script>
