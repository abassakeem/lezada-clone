<template>
  <div class="relative w-full">
    <div class="w-full max-w-6xl bg-[#f7f7f7] flex flex-col p-3 lg:p-6">
      <div>
        <div class="header text-center p-3 mt-12">
          <h1 class="lg:text-4xl text-#333 text-xl">Login</h1>
          <p class="text-[#777777] mt-3">Great to have you back!</p>
        </div>
        <form class="px-3 flex flex-col space-y-12 mt-3">
          <input
            type="text"
            v-model="username"
            value="test@example.com"
            placeholder="Username or email address"
            class="border-b-2 border-[#ccc] bg-transparent outline-none p-1"
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            value="password123"
            class="border-b-2 border-[#ccc] bg-transparent outline-none p-1"
          />
          <button
            class="bg-[#333] border border-[#333] cursor-pointer text-sm hover:bg-transparent duration-500 hover:text-[#333] text-white px-[40px] py-[12px] self-start"
          >
            Login
          </button>
          <div class="flex self-center justify-center">
           
          </div>
          <div class="flex items-center gap-2">
            <input type="checkbox" class="cursor-pointer" />
            <label class="text-[#777777] cursor-pointer">Remember me</label>
          </div>
          <router-link class="text-[#777777] hover:text-[#333]">
            Lost your password?
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios'


const data = ref(null);
const loading = ref(false);
const error = ref(null);
const authenticated = ref(false);

const login = async (username, password) => {
  login.value = true;
  error.value = null;
  try {
    const response = axios.post("http://134.209.223.106/api/login", {
      username,
      password,
    });

    const token = response.data.token;
    localStorage.setItem("auth_token", token);
    authenticated.value = true;

    await fetchData();
  } catch (err) {
    error.value = err.message || "Login failed";
    console.error("Login Error:", err);
  } finally {
    loading.value = false;
  }
};
</script>

<style></style>
