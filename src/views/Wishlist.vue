<template>
  <div class="w-full">
    <TopSection
      :breadcrumb="{
        header: 'Wishlist',
        parentLink: '',
        parentPath: '/wishlist',
        link: 'Wishlist',
      }"
      backgroundImage="https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      :showBreadcrumb="true"
    >
      <!-- Main Content -->
      <Table
        :items="wishlistItems"
        :showQuantity="false"
        :showTotal="false"
        :showCouponInput="false"
        clearButtonText="CLEAR WISHLIST"
        emptyMessage="No items found in wishlist"
        showEmptyActionButton
        emptyActionButtonText="EXPLORE PRODUCTS"
        removeButtonTitle="Remove from wishlist"
        @remove="removeFromWishlist"
        @clear="clearWishlist"
      />
    </TopSection>
  </div>
</template>

<script setup>
import TopSection from "@/components/TopSection/TopSection.vue";
import { ref } from "vue";
import Table from "@/components/Table/Table.vue";

const props = defineProps({
  Items: {
    type: Array,
    required: true,
  },
});
const wishlistItems = ref([
 
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
