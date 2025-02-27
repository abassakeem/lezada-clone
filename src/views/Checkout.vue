<template>
  <div class="w-full">
    <TopSection
      :breadcrumb="{
        header: 'Checkout',
        parentLink: '',
        parentPath: '/shop',
        link: 'Checkout',
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
            <div class="lg:w-2/3">
              <div class="w-full">
                <h3 class="underline font-bold text-xl mb-6">
                  Billing Address
                </h3>
                <div class="w-full">
                  <form>
                    <div
                      class="flex flex-col lg:flex-row lg:justify-between lg:gap-2"
                    >
                      <div class="flex flex-col w-full">
                        <label for="firstname " class="uppercase my-2"
                          >Firstname<span>*</span></label
                        >
                        <input
                          type="text"
                          placeholder="Firstname"
                          class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                        />
                      </div>
                      <div class="flex flex-col w-full">
                        <label for="firstname" class="uppercase my-2"
                          >Lastname<span>*</span></label
                        >
                        <input
                          type="text"
                          placeholder="Lastname"
                          class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                        />
                      </div>
                    </div>

                    <div
                      class="flex flex-col lg:flex-row lg:justify-between lg:gap-2"
                    >
                      <div class="flex flex-col w-full">
                        <label for="email" class="uppercase my-2"
                          >email<span>*</span></label
                        >
                        <input
                          type="text"
                          placeholder="Email address"
                          class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                        />
                      </div>
                      <div class="flex flex-col w-full">
                        <label for="phone number " class="uppercase my-2"
                          >phone no<span>*</span></label
                        >
                        <input
                          type="number"
                          placeholder="Phone number"
                          class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                        />
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <label for="Address " class="uppercase my-2"
                        >Address<span>*</span></label
                      >
                      <input
                        type="text"
                        placeholder="Address 1"
                        class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                      />
                      <input
                        type="text"
                        placeholder="Address 2"
                        class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                      />
                    </div>
                    <div class="flex flex-col">
                      <label for="Address " class="uppercase my-2"
                        >country<span>*</span></label
                      >
                      <select
                        type="text"
                        placeholder="Address 1"
                        class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                      >
                        <option value="Nigeria">Nigeria</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Nigeria">Nigeria</option>
                      </select>
                    </div>
                    <div class="flex flex-col">
                      <label for="Address " class="uppercase my-2"
                        >Address<span>*</span></label
                      >
                      <input
                        type="text"
                        placeholder="Address 1"
                        class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                      />
                      <input
                        type="text"
                        placeholder="Address 2"
                        class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                      />
                    </div>
                    <div class="flex flex-col">
                      <label for="Address " class="uppercase my-2"
                        >State<span>*</span></label
                      >
                      <input
                        type="text"
                        placeholder="State"
                        class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                      />
                      <div class="flex flex-col">
                        <label for="Address " class="uppercase my-2"
                          >Zipcode<span>*</span></label
                        >
                        <input
                          type="number"
                          placeholder="Zipcode"
                          class="border-b-2 border-[#ccc] text-sm text-#333 my-2 py-2"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3">
              <div class="w-full">
                <div class="">
                  <h3 class="underline font-bold text-xl my-6 lg:mt-0">
                    Cart total
                  </h3>
                  <div class="bg-[#f2f2f2] p-4">
                    <table
                      class="w-full border-separate border-spacing-y-4 border-spacing-x-1"
                    >
                      <tr class="text-left font-bold text-2xl mb-4">
                        <th>Product</th>
                        <th>Total</th>
                      </tr>

                      <tr class="p-4 px-2 my-1 border-b border-[#999]">
                        <td class="text-[#777] font-medium">
                          lorem ipsum decor two
                          <span class="quanity"> x8 </span>
                        </td>
                        <td class="font-medium">$15.84</td>
                      </tr>
                      <tr class="p-4 my-1 border-b border-[#999]">
                        <td class="text-[#777] font-medium">
                          lorem ipsum decor two
                          <span class="quanity"> x8 </span>
                        </td>
                        <td class="font-medium">$15.84</td>
                      </tr>

                      <tr
                        class="font-bold text-[#505050] my-1 border-b border-[#999]"
                      >
                        <td>Sub Total</td>
                        <td>$141.72</td>
                      </tr>
                      <tr
                        class="font-bold text-[#505050] my-1 border-b border-[#999]"
                      >
                        <td>Shipping Fee</td>
                        <td>$00.00</td>
                      </tr>
                      <tr class="font-bold text-2xl">
                        <td>Grand Total</td>
                        <td>$141.70</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="">
                  <h3 class="underline font-bold text-xl my-6">
                    Payment Method
                  </h3>
                  <div class="bg-gray-100 p-6 space-y-4">
                    <div class="space-y-3">
                      <div class="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="payment"
                          id="check"
                          class="w-4 h-4 accent-gray-800"
                        />
                        <label for="check" class="font-medium cursor-pointer"
                          >Check Payment</label
                        >
                      </div>

                      <div class="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="payment"
                          id="bank"
                          class="w-4 h-4 accent-gray-800"
                        />
                        <label for="bank" class="font-medium cursor-pointer"
                          >Direct Bank Transfer</label
                        >
                      </div>

                      <div class="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="payment"
                          id="cod"
                          class="w-4 h-4 accent-gray-800"
                        />
                        <label for="cod" class="font-medium cursor-pointer"
                          >Cash on Delivery</label
                        >
                      </div>

                      <div class="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="payment"
                          id="paypal"
                          class="w-4 h-4 accent-gray-800"
                        />
                        <label for="paypal" class="font-medium cursor-pointer"
                          >PayPal</label
                        >
                      </div>

                      <div class="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="payment"
                          id="payoneer"
                          class="w-4 h-4 accent-gray-800"
                        />
                        <label for="payoneer" class="font-medium cursor-pointer"
                          >Payoneer</label
                        >
                      </div>
                    </div>

                    <!-- Terms & Conditions -->
                    <div class="pt-2">
                      <div class="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="terms"
                          class="w-4 h-4 mt-1 accent-gray-800"
                          required
                        />
                        <label for="terms" class="cursor-pointer text-sm">
                          I've read and accept the
                          <a href="#" class="text-blue-600 hover:underline"
                            >Terms & Conditions</a
                          >
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="pt-4">
                    <button
                      class="px-6 py-3 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                    >
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
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
