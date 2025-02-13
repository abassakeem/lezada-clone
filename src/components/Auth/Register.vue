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
        <form class="px-3 flex flex-col space-y-4 mt-3">
          <div class="flex flex-col">
            <label class="cursor-pointer font-medium"
              ><span class="text-[#333333]">EMAIL ADDRESS</span
              ><span class="text-[#ff0000]">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              class="border-b-2 border-[#ccc] bg-transparent outline-none p-1 hover:border-[#333] duration-500"
            />
          </div>

          <div class="flex flex-col">
            <label class="font-medium cursor-pointer"
              ><span class="text-[#333333]">PASSWORD</span>
              <span class="text-[#ff0000]">*</span>
            </label>
            <input
              type="password"
              placeholder=""
              class="border-b-2 border-[#ccc] bg-transparent outline-none p-1 hover:border-[#333] duration-500"
            />
          </div>

          <button
            class="bg-[#333] border border-[#333] cursor-pointer text-sm hover:bg-transparent duration-500 hover:text-[#333] text-white px-[40px] py-[12px] self-center"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
