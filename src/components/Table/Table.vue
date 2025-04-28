<template>
  <div class="w-full">
    <div class="w-full">
      <!-- Empty state message -->
      <div
        v-if="items.length === 0"
        class="py-12 text-center border border-[#e6e6e6]"
      >
    
        <div class=" flex items-center justify-center" v-html="emptyLogo"></div>
        <p class="text-lg text-gray-500">{{ emptyMessage }}</p>
        <button
          v-if="showEmptyActionButton"
          @click="emptyActionCallback"
          class="mt-4 px-6 py-3 text-sm font-medium text-white bg-[#333] hover:bg-white hover:border-[#333] hover:text-[#333] border transition-all duration-300 cursor-pointer"
        >
          {{ emptyActionButtonText }}
        </button>
      </div>
      <div class="" v-else>
       
        <!-- Desktop table view (hidden on small screens) -->
        <div class="mb-8 border border-[#e6e6e6] hidden md:block">
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
                  {{ showQuantity ? "QUANTITY" : "" }}
                </th>
                <th class="text-center p-4 px-8 text-[15px] font-semibold">
                  {{ !showQuantity ? "" : "" }}
                </th>
                <th class="text-right p-4 px-8 font-semibold">
                  {{ showTotal ? "TOTAL" : "" }}
                </th>
                <th class="w-20"></th>
              </tr>
            </thead>
            <TransitionGroup name="list" tag="tbody">
              <tr
                v-for="item in items"
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
                    <span
                      class="hover:text-[#333] cursor-pointer text-[#777]"
                      >{{ item.name }}</span
                    >
                  </div>
                </td>
                <td class="p-4 px-8">
                  <span class="text-sm font-bold"
                    >${{ item.price.toFixed(2) }}</span
                  >
                </td>
                <td v-if="showQuantity" class="p-4 px-1">
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
                <td v-if="!showQuantity" class="p-4 px-1">
                  <div
                    class="flex items-center justify-center space-x-4 rounded-[2px]"
                  >
                    <button
                      @click="addToCart(item)"
                      v-if="!item.showSelect"
                      class="px-6 py-3 text-sm font-medium text-white bg-[#333] hover:bg-white hover:border-[#333] hover:text-[#333] border transition-all duration-300 cursor-pointer w-full"
                    >
                      ADD TO CART
                    </button>
                    <button
                      @click="addToCart"
                      v-if="item.showSelect"
                      class="px-6 py-3 text-sm font-medium text-white bg-[#333] hover:bg-white hover:border-[#333] hover:text-[#333] border transition-all duration-300 cursor-pointer w-full"
                    >
                      SELECT OPTION
                    </button>
                  </div>
                </td>

                <td v-else class="p-4 px-1"></td>
                <td class="p-4 px-8 text-right">
                  <span v-if="showTotal" class="text-sm font-bold"
                    >${{ calculateItemTotal(item) }}</span
                  >
                </td>
                <td class="p-4 px-8 text-center">
                  <button
                    @click="removeItem(item.id)"
                    class="p-2 px-3 cursor-pointer text-gray-400 hover:text-[#333] border border-[#e6e6e6] hover:border-[#333] transition-all duration-300"
                    :title="removeButtonTitle"
                  >
                    ×
                  </button>
                </td>
              </tr>
            </TransitionGroup>
          </table>
        </div>

        <!-- Mobile card view (visible only on small screens) -->
        <div class="md:hidden">
          <TransitionGroup name="list">
            <div
              v-for="item in items"
              :key="item.id"
              class="mb-4 p-4 border border-[#e6e6e6]"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-16 h-16 object-cover"
                  />
                  <span class="text-[#777] hover:text-[#333] cursor-pointer">{{
                    item.name
                  }}</span>
                </div>
                <button
                  @click="removeItem(item.id)"
                  class="p-2 cursor-pointer text-gray-400 hover:text-[#333] border border-[#e6e6e6] hover:border-[#333] transition-all duration-300"
                  :title="removeButtonTitle"
                >
                  ×
                </button>
              </div>

              <div class="grid grid-cols-2 gap-2">
                <div>
                  <p class="text-xs text-gray-500">PRICE</p>
                  <p class="text-sm font-bold">${{ item.price.toFixed(2) }}</p>
                </div>
                <div v-if="showTotal" class="text-right">
                  <p class="text-xs text-gray-500">TOTAL</p>
                  <p class="text-sm font-bold">
                    ${{ calculateItemTotal(item) }}
                  </p>
                </div>
                <div v-if="showQuantity" class="col-span-2 mt-2">
                  <p class="text-xs text-gray-500 mb-1">QUANTITY</p>
                  <div
                    class="flex items-center space-x-4 border-b-2 pb-1 w-full max-w-xs mx-auto rounded-[2px] border-[#ccc]"
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
                      class="w-full text-center text-bold p-1 outline-none"
                      min="1"
                    />
                    <button
                      @click="incrementQuantity(item)"
                      class="px-3 py-1 text-[#333] transition-all duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
      
      <!-- Cart Summary Section (Desktop & Mobile) -->
      <div class="flex flex-col md:flex-row md:justify-between mt-8 w-full" v-if="items.length > 0">
        <!-- Action buttons on left side -->
        <div
          v-if="showActionButtons"
          class="flex flex-col justify-between w-full sm:flex-row sm:items-center gap-4 mb-6 md:mb-0"
        >
          <div
            v-if="showCouponInput"
            class="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <input
              type="text"
              placeholder="Enter your coupon code"
              class="p-3 border-b border-[#e6e6e6] w-full sm:min-w-[250px] outline-none active:border-[#333] focus:border-[#333]"
            />
            <button
              @click="applyCoupon"
              class="px-6 py-3 text-sm w-full font-medium text-white bg-[#333] hover:bg-white hover:border-[#333] hover:text-[#333] border transition-all duration-300 cursor-pointer "
            >
              APPLY COUPON
            </button>
          </div>
          <button
            v-if="showClearButton"
            
            class="px-6 py-3 text-sm font-medium text-white bg-[#333] hover:bg-white hover:border-[#333] hover:text-[#333] border transition-all duration-300 cursor-pointer w-full sm:w-auto mt-4 sm:mt-0"
          >
            {{ clearButtonText }}
          </button>
        </div>
        
        <!-- Cart Totals table on right side -->
        
      </div>
      <div class="flex flex-col justify-end items-end">
      <div class="w-full md:w-1/3 mt-6   bg-[#f7f7f7] ">
          <h3 class="text-lg font-bold p-4 ">CART TOTALS</h3>
          <table class="w-full">
            <tr class="">
              <td class="p-6 text-[#777]">Subtotal</td>
              <td class="p-6 text-right font-bold">${{ calculateSubtotal() }}</td>
            </tr>
            <tr class="border-b border-[#e6e6e6]" v-if="discount > 0">
              <td class="p-6 text-[#777]">Discount</td>
              <td class="p-6 text-right font-bold text-green-600">-${{ discount.toFixed(2) }}</td>
            </tr>
            <tr class="border-b border-[#e6e6e6]" v-if="shipping > 0">
              <td class="p-6 text-[#777]">Shipping</td>
              <td class="p-6 text-right font-bold">${{ shipping.toFixed(2) }}</td>
            </tr>
            <tr class="border-b border-[#e6e6e6]" v-if="tax > 0">
              <td class="p-6 text-[#777]">Tax</td>
              <td class="p-6 text-right font-bold">${{ tax.toFixed(2) }}</td>
            </tr>
            <tr>
              <td class="p-6 text-[#333] font-bold">Total</td>
              <td class="p-6 text-right font-bold">${{ calculateTotal() }}</td>
            </tr>
          </table>
          <div class="p-4">
            <router-link to="/checkout"
              @click="proceedToCheckout"
              class="px-6 py-3 text-sm font-medium text-white bg-[#333] hover:bg-white hover:border-[#333] hover:text-[#333] border transition-all duration-300 cursor-pointer w-full"
            >
              PROCEED TO CHECKOUT
            </router-link>
          </div>
        </div>
    </div></div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRef, ref, computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  showQuantity: {
    type: Boolean,
    default: true,
  },
  showTotal: {
    type: Boolean,
    default: true,
  },
  showActionButtons: {
    type: Boolean,
    default: true,
  },
  showCouponInput: {
    type: Boolean,
    default: true,
  },
  showClearButton: {
    type: Boolean,
    default: true,
  },
  clearButtonText: {
    type: String,
    default: "CLEAR CART",
  },
  emptyMessage: {
    type: String,
    default: "No items found in your cart",
  },
  showEmptyActionButton: {
    type: Boolean,
    default: false,
  },
  emptyActionButtonText: {
    type: String,
    default: "CONTINUE SHOPPING",
  },
  removeButtonTitle: {
    type: String,
    default: "Remove item",
  },
  emptyLogo: {
    type: String,
    default: "",
  },
  shipping: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  tax: {
    type: Number,
    default: 0,
  }
});

const emit = defineEmits([
  "increment",
  "decrement",
  "update",
  "remove",
  "clear",
  "apply-coupon",
  "empty-action",
  "checkout"
]);

const showSelect = ref(false);

const incrementQuantity = (item) => {
  emit("increment", item);
};

const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    emit("decrement", item);
  }
};

const addToCart = (item) => {
  item.showSelect = true;
};

const updateQuantity = (item, event) => {
  const newValue = parseInt(event.target.value) || 1;
  emit("update", item, Math.max(1, newValue));
};

const calculateItemTotal = (item) => {
  return (item.price * (item.quantity || 1)).toFixed(2);
};

const calculateSubtotal = () => {
  return props.items
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);
};

const calculateTotal = () => {
  const subtotal = parseFloat(calculateSubtotal());
  const total = subtotal + props.shipping + props.tax - props.discount;
  return total.toFixed(2);
};

const removeItem = (itemId) => {
  emit("remove", itemId);
};

const clearItems = () => {
  emit("clear");
};

const applyCoupon = () => {
  emit("apply-coupon");
};

const emptyActionCallback = () => {
  emit("empty-action");
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