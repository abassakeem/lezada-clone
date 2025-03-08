<template>
    <div class="w-full">
      <div class="w-full">
       ass
        
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
  
 