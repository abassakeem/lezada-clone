import { defineStore } from "pinia";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const useWishlistStore = defineStore("wishlistStore", {
  state: () => ({
    wishlistItems: [],
    loading: false,
    error: null,
  }),

  getters: {
    favCount(state) {
      return state.wishlistItems.reduce((p, c) => (c.isfav ? p + 1 : p), 0);
    },
    totalCount(state) {
      return state.wishlistItems.length;
    },
  },

  actions: {
    getAuthToken() {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        throw new Error("Authentication token not found");
      }
      return token;
    },
    async getWishlistItems() {
      this.loading = true;
      try {
        const token = this.getAuthToken();

        const res = await axios.get(`${API_URL}/wishlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Success in getting wishlist items");
        this.wishlistItems.data = res.data;
      } catch (error) {
        console.error("Fetch wishlist error:", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async addWishlistItems(newItem) {
      try {
        console.log("Adding to wishlist:", newItem);
        const token = this.getAuthToken();

        if (!token) {
          console.error("Authentication token not found");
          return;
        }

        const res = await axios.post(`${API_URL}/wishlist/add`, newItem, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Item added to wishlist successfully:", res.data);
        
        await this.getWishlistItems();
        return res.data;
      } catch (err) {
        if (err.response) {
          console.error(
            "Add to wishlist error:",
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

    async deleteWishlistItems(id) {
      try {
        const token = this.getAuthToken();
        await axios.delete(`${API_URL}/wishlist/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.wishlistItems = this.wishlistItems.filter(
          (item) => item.id !== id
        );
      } catch (error) {
        console.error("Delete error:", error);
      }
    },

   
  },
});
