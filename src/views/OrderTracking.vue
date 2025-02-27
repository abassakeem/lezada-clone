<template>
  <div class="w-full">
    <TopSection
      :breadcrumb="{
        header: 'Order Tracking',
        parentLink: '',
        parentPath: '/shop',
        link: 'Order Tracking',
      }"
      backgroundImage="https://lezada.jamstacktemplates.dev/assets/images/backgrounds/breadcrumb-bg-1.png"
      :showBreadcrumb="true"
    >
      <!-- Main Content -->
      <main class="py-16 w-full">
        <div class="container mx-auto">
          <div
            class="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-6xl mx-auto"
          >
            <div class="w-lg p-8 bg-[#f7f7f7]">
              <p class="text-[#777] mb-4">
                To track your order please enter your Order ID in the box below
                and press the "Track" button. This was given to you on your
                receipt and in the confirmation email you should have received.
              </p>

              <form>
                <div class="flex flex-col w-full">
                  <label
                    for="orderID "
                    class="capitalize text-[#333] text-lg my-2 font-medium"
                    >Order ID<span>*</span></label
                  >
                  <input
                    type="text"
                    placeholder="Found in your order confirmation email
"
                    class="border-b-2 border-[#ccc] text-sm text-[#333] my-2 py-2 w-full outline-none"
                  />
                </div>
                <div class="flex flex-col w-full">
                  <label
                    for="email"
                    class="capitalize text-lg text-[#333] my-2 font-medium"
                    >Billing Email<span>*</span></label
                  >
                  <input
                    type="email"
                    placeholder="Email you used during checkout
"
                    class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2 w-full outline-none"
                  />

                  <div class="pt-4 flex items-center justify-center">
                    <button
                      class="px-16 py-2 text-sm font-medium  text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                    >
                      Track
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </TopSection>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Footer from "@/components/Homepage/Footer.vue";
import TopSection from "@/components/TopSection/TopSection.vue";

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
