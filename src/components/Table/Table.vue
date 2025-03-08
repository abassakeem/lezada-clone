<template>
  <div class="w-full">
    <div class="w-full">
      <div class="mb-8 border border-[#e6e6e6]">
        <table class="w-full">
          <thead>
            <tr class="border-b border-[#e6e6e6]">
              <th class="text-left p-4 px-8 text-[15px] font-semibold">
                PRODUCT
              </th>
              <th class="text-left p-4 px-8 text-[15px] font-semibold">
                PRICE
              </th>
              <th class="text-center p-4 px-8 text-[15px] font-semibold">
                {{ isCart ? "QUANTITY" : "" }}
              </th>
              <th class="text-right p-4 px-8 font-semibold">TOTAL</th>
              <th class="w-20"></th>
            </tr>
          </thead>
          <TransitionGroup name="list" tag="tbody">
            <tr
              v-for="item in cartItems"
              :key="item.id"
              class="border-b border-[#e6e6e6]"
            >
              <td class="p-4 px-8">
                <div class="flex items-center space-x-6">
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-24 h-24 object-cover"
                  />
                  <span class="hover:text-[#333] cursor-pointer text-[#777]">{{
                    item.name
                  }}</span>
                </div>
              </td>
              <td class="p-4 px-8">
                <span class="text-sm font-bold"
                  >${{ item.price.toFixed(2) }}</span
                >
              </td>

              <td class="p-4 px-1">
                <div
                  class="flex items-center justify-center space-x-4 border-b-2 pb-1 rounded-[2px] border-[#ccc]"
                >
                  <button
                    @click="decrementQuantity(item)"
                    class="px-3 py-1 text-[#333] transition-all duration-300"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    v-model="item.quantity"
                    @input="updateQuantity(item, $event)"
                    class="w-12 text-center text-bold p-1 outline-none"
                    min="1"
                  />
                  <button
                    @click="incrementQuantity(item)"
                    class="px-3 py-1 text-[#333] transition-all duration-300"
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="p-4 px-8 text-right">
                <span class="text-sm font-bold"
                  >${{ calculateItemTotal(item) }}</span
                >
              </td>
              <td class="p-4 px-8 text-center">
                <button
                  @click="removeItem(item.id)"
                  class="p-2 px-3 cursor-pointer text-gray-400 hover:text-[#333] border border-[#e6e6e6] hover:border-[#333] transition-all duration-300"
                >
                  ×
                </button>
              </td>
            </tr>
          </TransitionGroup>
        </table>
      </div>

      <div
        v-if="cartItems.length > 0"
        class="flex justify-between items-center"
      >
        <div class="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter your coupon code"
            class="p-3 border-b border-[#e6e6e6] min-w-[250px] outline-none active:border-[#333] focus:border-[#333]"
          />
          <button
            class="px-6 py-3 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          >
            APPLY COUPON
          </button>
        </div>
        <button
          @click="clearCart"
          class="px-6 py-3 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
        >
          CLEAR CART
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import { ref } from "vue";

const cartItems = ref([
  {
    id: 1,
    name: "Lorem ipsum fashion ten",
    price: 40.5,
    quantity: 1,
    image:
      "https://lezada.jamstacktemplates.dev/assets/images/product/decor/1.jpg",
  },
  {
    id: 2,
    name: "Lorem ipsum decor eight",
    price: 15.0,
    quantity: 1,
    image:
      "https://lezada.jamstacktemplates.dev/assets/images/product/decor/1.jpg",
  },
]);

const incrementQuantity = (item) => {
  item.quantity++;
};

const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
};

const updateQuantity = (item, event) => {
  const newValue = parseInt(event.target.value) || 1;
  item.quantity = Math.max(1, newValue);
};

const calculateItemTotal = (item) => {
  return (item.price * (item.quantity || 1)).toFixed(2);
};

const removeItem = (itemId) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== itemId);
};

const clearCart = () => {
  cartItems.value = [];
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform 0.3s ease;
}
</style>
l
