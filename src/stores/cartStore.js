import { defineStore } from "pinia";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const token_data = localStorage.getItem("auth_token");
export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: [],
    loading: false,
    error: null,
  }),

  getters: {
    favCount(state) {
      return state.cartItems.reduce((p, c) => (c.isfav ? p + 1 : p), 0);
    },
    totalCount(state) {
      return state.cartItems.length;
    },
  },

  actions: {
    async getCartItems() {
      this.loading = true;
      try {
        const res = await fetch(`${API_URL}/cart`);
        const data = await res.json();
        this.cartItems = data;
      } catch (error) {
        console.error("Fetch cart error:", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async addCartItems(newItem) {
      try {
        console.log("Adding to cart:", newItem);

        if (!token_data) {
          console.error("Authentication token not found");
          return;
        }

        const res = await axios.post(`${API_URL}/cart/add`, newItem, {
          headers: {
            Authorization: `Bearer ${token_data}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Item added to cart successfully:", res.data);
        return res.data;
      } catch (err) {
        if (err.response) {
          console.error(
            "Add to cart error:",
            err.response.status,
            err.response.data
          );

          if (err.response.status === 422) {
            console.error("Validation errors:", err.response.data);
          }
        } else if (err.request) {
          console.error("No response from server:", err.request);
        } else {
          console.error("Request error:", err.message);
        }
      }
    },
    async deleteCartItems(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);

      const res = await fetch(`${API_URL}/cart` + id, {
        method: "DELETE",
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("Delete error:", error);
      }
    },

    async resetCart() {
      this.loading = true;

      try {
        for (const item of this.cartItems) {
          await fetch(`${API_URL}/cart/${item.id}`, {
            method: "DELETE",
          });
        }

        this.cartItems = [];
      } catch (error) {
        console.error("Error resetting cart:", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
