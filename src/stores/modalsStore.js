
import { defineStore } from 'pinia'

export const useModalsStore = defineStore('modals', {
  state: () => ({
    isNavOpen: false,
    isSearchOpen: false,
    isCartOpen: false,
    isWishlistOpen: false
  }),
  
  actions: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen
    },
    
    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },
    
    toggleWishlist() {
      this.isWishlistOpen = !this.isWishlistOpen
    },
    
    closeNav() {
      this.isNavOpen = false
    },
    
    closeSearch() {
      this.isSearchOpen = false
    },
    
    closeCart() {
      this.isCartOpen = false
    },
    
    closeWishlist() {
      this.isWishlistOpen = false
    },
    
    closeAllModals() {
      this.isNavOpen = false
      this.isSearchOpen = false
      this.isCartOpen = false
      this.isWishlistOpen = false
    }
  }
})