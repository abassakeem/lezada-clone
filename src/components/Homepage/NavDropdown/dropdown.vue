<template>
  <NavMenuComponent
    v-if="['Home', 'Shop', 'Elements', 'Pages', 'Blog'].includes(label)"
    :subGroups="navLinks.find((link) => link.label === label)?.subGroups"
  />
  <div v-else class="w-full duration-500">
    <div class="w-5xl h-1/4">{{ label.toLowerCase() }}</div>
  </div>
</template>

<script setup>
defineProps(["label"]);
import NavMenuComponent from "./NavMenuComponent.vue";

const navLinks = [
  {
    label: "Home",
    url: "#",
    subGroups: {
      groupOne: {
        header: "Home Group",
        links: ["Decor", "Creative", "Perfumes", "Trending"],
      },
      groupTwo: {
        header: "Home Group",
        links: ["Essentials", "Accessories", "Lookbook", "Furniture"],
      },
      groupThree: {
        header: "Home Group",
        links: ["Smart Design", "Collection", "Jewelry", "Cosmetics"],
      },
      groupFour: {
        header: "Home Group",
        links: ["Swimsuit", "Special", "Concept"],
      },
      groupFive: {
        header: "Featured",
        img: "https://lezada.jamstacktemplates.dev/assets/images/menu-image/menu-element.png",
      },
    },
  },
  {
    label: "Shop",
    url: "#",
    subGroups: {
      groupOne: {
        header: "Shop Group",
        links: ["New Arrivals", "Best Sellers", "Sale Items", "Trending"],
      },
      groupTwo: {
        header: "Shop Group",
        links: ["Women", "Men", "Kids", "Accessories"],
      },
      groupThree: {
        header: "Shop Group",
        links: ["Collections", "Seasonal", "Special", "Limited"],
      },
      groupFour: {
        header: "Shop Group",
        links: ["Brands", "Deals","Ordertracking", "Clearance"],
      },
      groupFive: {
        header: "Featured",
        img: "https://lezada.jamstacktemplates.dev/assets/images/menu-image/megamenu-shop.png",
      },
    },
  },
  {
    label: "Elements",
    url: "#",
    subGroups: {
      groupOne: {
        header: "Elements Group",
        links: ["Typography", "Buttons", "Forms", "Icons"],
      },
      groupTwo: {
        header: "Elements Group",
        links: ["Cards", "Tables", "Navigation", "Modals"],
      },
      groupThree: {
        header: "Elements Group",
        links: ["Alerts", "Badges", "Progress", "Lists"],
      },
      groupFour: {
        header: "Elements Group",
        links: ["Grid", "Layout", "Components"],
      },
      groupFive: {
        header: "Featured",
        img: "https://lezada.jamstacktemplates.dev/assets/images/menu-image/menu-element.png",
      },
    },
  },
  {
    label: "Pages",
    url: "#",
    subGroups: {
      groupOne: {
        header: "Pages Group",
        links: ["About", "Contact", "FAQ", "Terms"],
      },
    },
  },
  {
    label: "Blog",
    url: "#",
    subGroups: {
      groupOne: {
        header: "Blog Group",
        links: ["Latest Posts", "Featured", "News", "Trends"],
      },
    },
  },
];
</script>

<style scoped></style>
