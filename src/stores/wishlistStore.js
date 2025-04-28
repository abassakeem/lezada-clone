import { defineStore } from "pinia";
import axios from "axios";
import api from "@/service/axios";

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
    async getWishlistItems() {
      this.loading = true;
      try {
        const res = await api.get(`wishlist`);
        console.log("Success in getting wishlist items");
        this.wishlistItems = res.data.data;
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
        

        const res = await api.post(`/wishlist/add`, newItem)

        console.log("Item added to wishlist successfully:", res.data);
        
        await this.getWishlistItems();
        return res.data.data;
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
       
        const res = await api.delete(`/wishlist/${id}`);
        // this.wishlistItems = this.wishlistItems.filter(
        //   (item) => item.id !== id
        // );
        console.log(res)

        await this.getWishlistItems()
      } catch (error) {
        console.error("Delete error:", error);
      }
    },

   
  },
});
