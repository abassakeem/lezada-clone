<template>
  <div class="w-full">
    <TopSection
      :breadcrumb="{
        header: 'Cart',
        parentLink: '',
        parentPath: '/cart',
        link: 'Cart',
      }"
      backgroundImage="https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      :showBreadcrumb="true"
    >
      <!-- Main Content -->

      <Table
        :emptyLogo="emptyLogo"
        :items="cartItems"
        emptyMessage="Your cart is empty"
        showEmptyActionButton
        emptyActionButtonText="CONTINUE SHOPPING"
        @increment="incrementCartItem"
        @decrement="decrementCartItem"
        @remove="removeFromCart"
       
      />
    </TopSection>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Footer from "@/components/Homepage/Footer.vue";
import TopSection from "@/components/TopSection/TopSection.vue";
import Table from "@/components/Table/Table.vue";
import { useCartStore } from "@/stores/cartStore";

const cartItems = computed(() => {
  const rawData = cartStore.cartItems || [];
  return rawData.map((entry) => ({
    id: entry.id,
    name: entry.product.name,
    image: entry.product.image,
    price: parseFloat(entry.product.price),
    quantity: entry.quantity,
  }));
});

const cartStore = useCartStore();

onMounted(async () => {
  await cartStore.getCartItems();
  console.log("Cart Items from store:", cartStore.cartItems.data.data);
});

const incrementCartItem = (item) => {
  const cartItem = cartItems.value.find((i) => i.id === item.id);
  if (cartItem) {
    cartItem.quantity++;
  }
};

const decrementCartItem = (item) => {
  const cartItem = cartItems.value.find((i) => i.id === item.id);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
  }
};
const emptyLogo = ref(`
  <svg stroke="currentColor" class="text-[100px] md:text-8xl" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z"></path></svg>
`);

const calculateDiscountedPrice = (price, discount) => {
  if (!discount) return price;
  const discountedAmount = (price * discount) / 100;
  return (price - discountedAmount).toFixed(2);
};

const toggleCart = (product) => {
  console.log("Toggle Cart for product:", product.id);
};

const toggleCompare = (product) => {
  console.log("Toggle compare for product:", product.id);
};

const removeFromCart = async (id) => {
  cartStore.deleteCartItems(id);
};


</script>
