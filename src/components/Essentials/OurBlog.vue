<template>
  <div class="flex my-16 items-center justify-center">
    <div class="w-full max-w-5xl grid grid-cols-3 items-center justify-center">
      <div class="mb-8 col-span-1">
        <h3 class="text-2xl font-bold mb-3">From Our Blog</h3>
        <p class="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse
          suscipit sagittis leo sit met condim entum.
        </p>
        <button
          class="px-6 py-2 border border-[#333] bg-[#333] cursor-pointer text-white transition-colors duration-300 hover:bg-white hover:text-[#333]"
        >
          VIEW ALL
        </button>
      </div>

      <div class="w-full overflow-x-auto scrollbar-none col-span-2">
        <div class="flex space-x-6 min-w-max">
          <div
            v-for="detail in details"
            :key="detail.id"
            class="w-96 flex-shrink-0 "
          >
            <div class="rounded  overflow-hidden transition-shadow duration-300">
              <img
                :src="detail.img"
                alt="Blog post"
                class="w-full h-auto transition-transform duration-500 cursor-pointer hover:scale-105"
              />
              <div class="p-3">
                <p class="text-sm text-gray-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M424 96h-40v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H88c-22 0-40 18-40 40v272c0 22 18 40 40 40h336c22 0 40-18 40-40V136c0-22-18-40-40-40zm8 300c0 11-9 20-20 20H100c-11 0-20-9-20-20V216c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v180zM160 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72zM384 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z"
                    ></path>
                  </svg>
                  {{ detail.date }}
                </p>
                <h4 class="font-medium text-2xl my-2 text-[#333]">
                  {{ detail.header }}
                </h4>
                <p class="text-xs text-[#777]">
                  {{ detail.description }}
                </p>
                <button class="underline uppercase text-[#333] mt-2 font-medium text-xs cursor-pointer hover:text-[#D3122A] duration-500">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const details = [
  {
    id: 1,
    img: "https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-1-370x200.png",
    date: "April 2025",
    header: "Winter collection highlights",
    description:
      " Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of 'uglypretty'.",
  },
  {
    id: 2,
    img: "https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-2-1-370x200.png",
    date: "April 2025",
    header: "Winter collection highlights",
    description:
      " Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of 'uglypretty'.",
  },
  {
    id: 3,
    img: "https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-2-1-370x200.png",
    date: "April 2025",
    header: "Winter collection highlights",
    description:
      " Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of 'uglypretty'.",
  },
];
</script>
