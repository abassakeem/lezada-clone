<template>
    <div class="w-full">
      
      <TopSection
      :breadcrumb="{
        header: 'My Account',
        parentLink: '',
        parentPath: '/cart',
        link: 'My Account'
      }"
      backgroundImage="https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      :showBreadcrumb="true"
    >
  
       <Profile/>
     
           </TopSection>
         
 
     
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import Footer from "@/components/Homepage/Footer.vue";
import TopSection from "@/components/TopSection/TopSection.vue";
import Table from "@/components/Table/Table.vue";
import Profile from "@/components/Profile.vue";
  
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
      sku: "asdf101",
      categories: "decor",
      tags: "decor",
  
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis beatae nam cum eligendi similique rerum repellendus tempora dolores sapiente debitis quia ut exercitationem, ipsum nemo magni aliquid illo aspernatur omnis?Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ]);
  
  const selectedSize = ref("");
  const selectedColor = ref("");
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
  