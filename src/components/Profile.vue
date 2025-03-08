<template>
  <div class="w-full">
    <div class="w-full">
      <div class="buttons flex gap-3 items-center mb-10">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          class="px-[15px] py-[10px] duration-300 cursor-pointer hover:bg-black hover:text-white"
          :class="
            active === button
              ? 'bg-black text-white font-bold'
              : 'text-[#777777]'
          "
          @click="setActive(button)"
        >
          {{ button }}
        </button>
      </div>

      <div
        class="p-8 border border-[#eee] duration-300"
        v-if="active == 'Dashboard'"
      >
        <h3
          class="font-bold text-xl pb-1 border-dotted border-b-2 border-[#eee]"
        >
          {{ active }}
        </h3>
        <p class="my-4 text-[#777]">
          Hello, <span class="font-bold text-[#333]">John Doe </span> (If Not
          <span class="font-bold text-[#333]">John </span> ! Logout)<br />
          From your account dashboard. you can easily check & view your recent
          orders, manage your shipping and billing addresses and edit your
          password and account details.
        </p>
      </div>
      <div
        class="p-8 border border-[#eee] duration-300"
        v-else-if="active == 'Orders'"
      >
        <h3
          class="font-bold text-xl pb-1 border-dotted border-b-2 border-[#eee]"
        >
          {{ active }}
        </h3>
        <table class="min-w-full mt-4 bg-white border-collapse">
          <thead>
            <tr class="bg-[#f8f8f8] text-gray-700 text-left">
              <th class="py-3 px-2 font-semibold border border-[#ccc] w-1/6">
                Order
              </th>
              <th class="py-3 px-2 font-semibold border border-[#ccc] w-1/4">
                Date
              </th>
              <th class="py-3 px-2 font-semibold border border-[#ccc] w-1/4">
                Status
              </th>
              <th class="py-3 px-2 font-semibold border border-[#ccc] w-1/6">
                Total
              </th>
              <th class="py-3 px-2 font-semibold border border-[#ccc] w-1/6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="order in orders"
              :key="order.id"
              class="hover:bg-gray-50"
            >
              <td class="py-2 px-2 border border-[#ccc] text-center">
                {{ order.id }}
              </td>
              <td class="py-2 px-2 border border-[#ccc]">{{ order.date }}</td>
              <td class="py-2 px-2 border border-[#ccc]">
                <span class="px-2 py-1 rounded-full text-sm font-medium">
                  {{ order.status }}
                </span>
              </td>
              <td class="py-2 px-2 border border-[#ccc]">{{ order.total }}</td>
              <td class="py-2 px-2 border border-[#ccc]">
                <button class="px-3 py-1">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="p-8 border border-[#eee] duration-300"
        v-else-if="active == 'Download'"
      >
        <h3
          class="font-bold text-xl pb-1 border-dotted border-b-2 border-[#eee]"
        >
          {{ active }}
        </h3>
        <table class="min-w-full mt-4 text-sm bg-white text-center">
          <thead>
            <tr class="text-gray-700 text-left">
              <th class="py-3 px-2 font-semibold border border-[#ccc] w-1/3">
                Product
              </th>
              <th class="py-3 px-2 font-semibold border border-[#ccc] w-1/4">
                Date
              </th>
              <th class="py-3 px-2 font-semibold border border-[#ccc] w-1/8">
                Expire
              </th>
              <th
                class="py-3 px-2 font-semibold border border-[#ccc] w-1/8 text-center"
              >
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td class="py-2 px-2 text-center border border-[#ccc]">
                {{ product.name }}
              </td>
              <td class="py-2 px-2 border border-[#ccc]">{{ product.date }}</td>
              <td class="py-2 px-2 border border-[#ccc]">
                {{ product.expire }}
              </td>
              <td class="py-2 px-2 border border-[#ccc] text-center">
                <button
                  class="inline-flex gap-2 items-center px-3 py-1 text-gray-800 transition-colors"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"
                    ></path>
                  </svg>
                  Download File
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="p-8 border border-[#eee] duration-300"
        v-else-if="active == 'Payment'"
      >
        <p class="border-t-2 text-[#333] border-[#333] pt-5">
          You Can't Saved Your Payment Method yet.
        </p>
      </div>
      <div
        class="p-8 border border-[#eee] duration-300"
        v-else-if="active == 'Address'"
      >
        <h3
          class="font-bold text-xl pb-1 border-dotted border-b-2 border-[#eee]"
        >
          Billing Address
        </h3>
        <div class="text-[#777]">
          <h3>John Doe</h3>
          <p class="mt-1">
            1355 Market St, Suite 900<br />
            San Francisco, CA 94103
          </p>
          <p class="mt-1">Mobile: (123) 456-7890</p>
          <button class="flex gap-1 mt-2 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
              ></path></svg
            >Edit Address
          </button>
        </div>
      </div>
      <div
        class="p-8 border border-[#eee] duration-300"
        v-else-if="active == 'Account Details'"
      >
        <h3
          class="font-bold text-xl pb-1 border-dotted border-b-2 border-[#eee]"
        >
          {{ active }}
        </h3>
        <div class="">
          <form @submit.prevent="saveChanges" class="space-y-4 mt-4 text-sm">
           
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-gray-500 mb-2"
                  >First Name</label
                >
                <input
                  type="text"
                  id="firstName"
                  v-model="profile.firstName"
                  class="w-full px-4 py-3 border border-[#e8e8e8] rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <div>
                <label for="lastName" class="block text-gray-500 mb-2"
                  >Last Name</label
                >
                <input
                  type="text"
                  id="lastName"
                  v-model="profile.lastName"
                  class="w-full px-4 py-3 border border-[#e8e8e8] rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            
            <div>
              <label for="displayName" class="block text-gray-500 mb-2"
                >Display Name</label
              >
              <input
                type="text"
                id="displayName"
                v-model="profile.displayName"
                class="w-full px-4 py-3 border border-[#e8e8e8] rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

         
            <div>
              <label for="email" class="block text-gray-500 mb-2"
                >Email Address</label
              >
              <input
                type="email"
                id="email"
                v-model="profile.email"
                class="w-full px-4 py-3 border border-[#e8e8e8] rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <!-- Password Change Section -->
            <div class="pt-4">
              <h3
                class="text-[#777] font-bold text-lg border-b border-gray-200 pb-2 mb-4"
              >
                Password change
              </h3>

           
              <div class="mb-6">
                <label for="currentPassword" class="block text-gray-500 mb-2"
                  >Current Password</label
                >
                <input
                  type="password"
                  id="currentPassword"
                  v-model="passwords.current"
                  class="w-full px-4 py-3 border border-[#e8e8e8] rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <!-- New Password Fields (Two Columns) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="newPassword" class="block text-gray-500 mb-2"
                    >New Password</label
                  >
                  <input
                    type="password"
                    id="newPassword"
                    v-model="passwords.new"
                    class="w-full px-4 py-3 border border-[#e8e8e8] rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label for="confirmPassword" class="block text-gray-500 mb-2"
                    >Confirm Password</label
                  >
                  <input
                    type="password"
                    id="confirmPassword"
                    v-model="passwords.confirm"
                    class="w-full px-4 py-3 border border-[#e8e8e8] rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <div class="flex justify-between items-center">
              <button
                type="submit"
                class="bg-[#333] text-white py-3 px-6 font-semibold uppercase text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              >
                Save Changes
              </button>

              <span class="text-gray-300 text-right"> Go to... </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const buttons = ref([
  "Dashboard",
  "Orders",
  "Download",
  "Payment",
  "Address",
  "Account Details",
]);
const active = ref("Dashboard");

const setActive = (button) => {
  active.value = button;
};

const orders = ref([
  { id: 1, date: "Aug 22, 2018", status: "Pending", total: "$3000" },
  { id: 2, date: "July 22, 2018", status: "Approved", total: "$200" },
  { id: 3, date: "June 12, 2017", status: "On Hold", total: "$990" },
]);
const products = ref([
  {
    id: 1,
    name: "Haven - Free Real Estate PSD Template",
    date: "Aug 22, 2020",
    expire: "Yes",
  },
  {
    id: 2,
    name: "HasTech - Portfolio Business Template",
    date: "Sep 12, 2020",
    expire: "Never",
  },
]);

const profile = ref({
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
});
const passwords = ref({
  current: "",
  new: "",
  confirm: "",
});

const saveChanges = () => {
  console.log("saved");
};
</script>

<style></style>
