<template>
  <div
    class="relative w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
  >
    <div class="w-full max-w-6xl flex flex-col p-3 lg:p-6">
      <div>
        <div class="header text-center p-3 mt-12">
          <h1 class="lg:text-4xl text-#333 text-xl">Register</h1>
          <p class="text-[#777777] mt-3">
            If you don't have an account, register<br />
            now!
          </p>
        </div>
        <form
          @submit.prevent="register"
          class="px-3 flex flex-col space-y-4 mt-3"
        >
          <div class="flex flex-col">
            <label class="cursor-pointer font-medium">
              <span class="text-[#333333]">FULL NAME</span>
              <span class="text-[#ff0000]">*</span>
            </label>
            <input
              type="text"
              v-model="userData.name"
              placeholder="Enter your full name"
              class="border-b-2 border-[#ccc] bg-transparent outline-none p-1 hover:border-[#333] duration-500"
            />
          </div>

          <div class="flex flex-col">
            <label class="cursor-pointer font-medium">
              <span class="text-[#333333]">EMAIL ADDRESS</span>
              <span class="text-[#ff0000]">*</span>
            </label>
            <input
              type="email"
              v-model="userData.email"
              placeholder="Enter your email"
              class="border-b-2 border-[#ccc] bg-transparent outline-none p-1 hover:border-[#333] duration-500"
            />
          </div>

          <div class="flex flex-col">
            <label class="font-medium cursor-pointer">
              <span class="text-[#333333]">PASSWORD</span>
              <span class="text-[#ff0000]">*</span>
            </label>
            <input
              type="password"
              v-model="userData.password"
              placeholder="Create a password"
              class="border-b-2 border-[#ccc] bg-transparent outline-none p-1 hover:border-[#333] duration-500"
            />
          </div>

          <div class="flex flex-col">
            <label class="cursor-pointer font-medium">
              <span class="text-[#333333]">PHONE NUMBER</span>
              <span class="text-[#ff0000]">*</span>
            </label>
            <input
              type="tel"
              v-model="userData.phone_number"
              placeholder="Enter your phone number"
              class="border-b-2 border-[#ccc] bg-transparent outline-none p-1 hover:border-[#333] duration-500"
            />
          </div>

          <div class="flex flex-col">
            <label class="cursor-pointer font-medium">
              <span class="text-[#333333]">ADDRESS</span>
              <span class="text-[#ff0000]">*</span>
            </label>
            <input
              type="text"
              v-model="userData.address"
              placeholder="Enter your address"
              class="border-b-2 border-[#ccc] bg-transparent outline-none p-1 hover:border-[#333] duration-500"
            />
          </div>

          <div v-if="error" class="text-red-500 text-center">
            {{ error }}
          </div>

          <div v-if="success" class="text-green-500 text-center">
            {{ success }}
          </div>

          <button
            type="submit"
            class="bg-[#333] border border-[#333] cursor-pointer text-sm hover:bg-transparent duration-500 hover:text-[#333] text-white px-[40px] py-[12px] self-center"
            :disabled="loading"
          >
            {{ loading ? "Processing..." : "Register" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const userData = reactive({
  name: "Test User",
  email: "test@example.com",
  password: "password123",
  phone_number: "+1234567890",
  address: "123 Test Street",
});

const loading = ref(false);
const error = ref(null);
const success = ref(null);
const regesteredModal = () => {
  Swal.fire({
    title: "Registration successful!",

    imageUrl:
      "https://cdnl.iconscout.com/lottie/premium/thumb/thumbs-up-animation-download-in-lottie-json-gif-static-svg-file-formats--like-logo-thumb-cute-hand-gesture-pack-sign-symbols-animations-4639088.gif",

    imageAlt: "Custom image",
  });
};


const register = async () => {
  loading.value = true;
  error.value = null;
  success.value = null;

  try {
    const response = await axios.post(
      "http://134.209.223.106/api/register",
      userData
    );

    console.log("Registration successful:", response.data);
    success.value = "Registration successful! You can now log in.";

    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token);
    }

    // setTimeout(() => {
    //   window.location.href = '/';
    // }, 2000);
    regesteredModal();
  } catch (err) {
    console.error("Registration Error:", err);
    const apiMessage = err.response?.data?.message || "Something went wrong.";

    error.value = apiMessage;

    Swal.fire({
      title: "Registration Failed",
      text: apiMessage, 
      icon: "error",
      confirmButtonText: "Retry",
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style></style>
