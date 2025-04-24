import { defineStore } from "pinia";
import axios from "axios";
import api from "@/service/axios";

const API_URL = import.meta.env.VITE_API_URL;

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
        const res = await api.get(`/cart`);
        console.log("Success in getting cart items");
        console.log(res.data);
        this.cartItems = res.data.data;
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
        const token = this.getAuthToken();

        const res = await api.post(`/cart/add`, newItem);

        console.log("Item added to cart successfully:", res.data);
        // Optional: Refresh cart after adding
        await this.getCartItems();
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
      try {
        const token = this.getAuthToken();
        await axios.delete(`${API_URL}/cart/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.cartItems = this.cartItems.filter(
          (item) => item.id !== id
        );
      } catch (error) {
        console.error("Delete error:", error);
      }
    },

    async updateCart() {
      this.loading = true;

      try {
        const token = this.getAuthToken();
        for (const item of this.cartItems) {
          await axios.delete(`${API_URL}/cart/${item.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
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
