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
        :emptyLogo="emptyLogo"
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

const emptyLogo = ref(`
  <svg stroke="currentColor" class="text-[100px] md:text-8xl" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"></path>
  </svg>
`);
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

const removeFromWishlist = (itemId) => {
  wishlistItems.value = wishlistItems.value.filter(
    (item) => item.id !== itemId
  );
};

const clearWishlist = () => {
  wishlistItems.value = [];
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
