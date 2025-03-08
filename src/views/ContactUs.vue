<template>
  <div class="w-full">
    <TopSection
      :breadcrumb="{
        header: 'Contact us',
        parentLink: '',
        parentPath: '/ContactUs',
        link: 'Contact Us',
      }"
      backgroundImage="https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-1.png"
      :showBreadcrumb="true"
    >
      <!-- Main Content -->
      <main class="py-16 w-full">
        <div class="container mx-auto my-8">
          <div class="container mx-auto px-4 py-16 text-center">
            <!-- Header Text -->
            <div class="mb-4">
              <h3 class="text-sm tracking-widest text-[#333] uppercase">
                COME HAVE A LOOK
              </h3>
            </div>

            <div class="mb-16">
              <h2 class="text-5xl font-normal text-[#333]">Contact detail</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="flex">
                <div class="mr-4">
                  <svg
                    class="text-[#878787] text-4xl"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M256 48c-79.5 0-144 59.9-144 133.7 0 104 144 282.3 144 282.3s144-178.3 144-282.3C400 107.9 335.5 48 256 48zm0 190.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z"
                    ></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h4 class="uppercase text-sm font-medium text-[#333]">
                    ADDRESS
                  </h4>
                  <p class="text-[#878787]">
                    1800 Abbot Kinney Blvd. Unit D & E Venice
                  </p>
                </div>
              </div>

              <!-- Contact Section -->
              <div class="flex just">
                <div class="mr-4 space-y-4">
                  <svg
                    stroke="currentColor"
                    class="text-[#878787] text-4xl"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z"
                    ></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    class="text-[#878787] text-4xl mr-2"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"
                    ></path>
                    <path
                      d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"
                    ></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h4 class="uppercase text-sm font-medium text-[#333]">
                    CONTACT
                  </h4>
                  <div class="text-[#878787]">
                    <p>Mobile: (+88) – 1990 – 6886</p>
                    <p>Hotline: 1800 – 1102</p>
                  </div>
                  <div class="flex items-center mt-4">
                    <p class="text-[#878787]">Mail: contact@lezadastore.com</p>
                  </div>
                </div>
              </div>

              <!-- Hours Section -->
              <div class="flex">
                <div class="mr-4">
                  <svg
                    class="text-[#878787] text-4xl"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0-81.3 81.2-81.2 212.9 0 294.2 81.2 81.2 212.9 81.2 294.2 0 81.2-81.2 81.2-213 0-294.2zM89.6 263.8c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3zm26.2 82.2c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm2.3-171.5c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zM179.6 404c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zm-2.3-287.5c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm35.4 76.3c-2.3-3.8-1-8.7 2.7-11 3.8-2.3 8.7-1 11 2.7l33.7 62.3c2.5 4.7 3.9 9.9 3.9 15.2v122c0 5-3 8-8 8s-8-3-8-8V262c0-2.7-.7-5.3-1.9-7.6l-33.4-61.6zm44.9 239c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3zm0-336c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3zm87.7 311.7c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm2.3-294.5c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zm61.5 229.5c-1.9 5.4-8.5 7.2-12.8 3.5-2.4-2.1-3.3-5.5-2.3-8.5 1.9-5.4 8.5-7.2 12.8-3.5 2.4 2.1 3.3 5.5 2.3 8.5zM406.8 178c-4.3 3.7-11 1.9-12.8-3.5-1-3-.1-6.5 2.3-8.5 4.3-3.7 11-1.9 12.8 3.5 1 3 .1 6.4-2.3 8.5zm18.8 85.8c-5.6 1.1-10.5-3.8-9.4-9.4.6-3.1 3.1-5.7 6.3-6.3 5.6-1.1 10.5 3.8 9.4 9.4-.6 3.2-3.2 5.7-6.3 6.3z"
                    ></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h4 class="uppercase text-sm font-medium text-[#333]">
                    HOUR OF OPERATION
                  </h4>
                  <div class="text-[#878787]">
                    <p>Monday – Friday : 09:00 – 20:00</p>
                    <p>Sunday & Saturday: 10:30 – 22:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="git my-8 mt-16 flex items-center justify-center flex-col">
          <div class="">
            <h2 class="text-5xl text-center font-normal text-[#333]">
              Get in touch
            </h2>
          </div>
          <form class="space-y-4 mt-4 text-sm w-4xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text "
                  id="firstName"
                  placeholder="First Name *"
                  v-model="message.firstName"
                  class="w-full px-4 py-3 border-b border-[#e8e8e8] focus:border-[#333] outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email *"
                  v-model="message.email"
                  class="w-full px-4 py-3 border-b border-[#e8e8e8] focus:border-[#333] outline-none"
                />
              </div>
            </div>

            <div>
              <label for="Subject" class="block text-gray-500 mb-2"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                v-model="message.subject"
                class="w-full px-4 py-3 border-b border-[#e8e8e8] focus:border-[#333] outline-none"
              />
            </div>
            <textarea
              id="message"
              placeholder="Message"
              v-model="message.message"
              class="w-full px-4 py-3 border-b border-[#e8e8e8] focus:border-[#333] h-[125px] outline-none"
            >
            </textarea>

            <div class="flex justify-center items-center">
              <button
                type="submit"
                class="bg-[#333] text-white py-3 px-6 font-semibold uppercase text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors cursor-pointer"
              >
                Submit
              </button>

              <span class="text-gray-300 text-right"> Go to... </span>
            </div>
          </form>
        </div>
      </main>
    </TopSection>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Footer from "@/components/Homepage/Footer.vue";
import TopSection from "@/components/TopSection/TopSection.vue";

const message = ref({
  firstName: "",
  email: "",
  subject: "",
  message: "",
});
</script>
