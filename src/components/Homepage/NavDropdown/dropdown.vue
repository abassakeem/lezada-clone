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
        links: [
          {
            title: "Decor",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/decor.jpg",
          },
          {
            title: "Creative",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/creative.jpg",
          },
          {
            title: "Perfumes",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/perfumes.jpg",
          },
          {
            title: "Trending",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/trending.jpg",
          },
        ],
      },
      groupTwo: {
        header: "Home Group",
        links: [
          {
            title: "Essentials",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/essentials.jpg",
          },

          {
            title: "Accessories",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/accessories.jpg",
          },
          {
            title: "Lookbook",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/lookbook.jpg",
          },
          {
            title: "Furniture",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/furniture.jpg",
          },
        ],
      },
      groupThree: {
        header: "Home Group",
        links: [
          {
            title: "smart design",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/smart-design.jpg",
          },
          {
            title: "collection",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/collection.jpg",
          },
          {
            title: "jewelry",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/smart-design.jpg",
          },
          {
            title: "Cosmetics",
            img: "	https://lezada.jamstacktemplates.dev/assets/images/home-preview/collection.jpg",
          },
        ],
      },
      groupFour: {
        header: "Home Group",
        links: [
          {
            title: "Swimsuit",
          },
          {
            title: "Special",
          },
          {
            title: "Concept",
          },
        ],
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
        links: [
          {
            title: "swim-suit",
          },
          {
            title: "special",
          },
          {
            title: "concept",
          },
          {
            title: "",
          },
        ],
      },
      groupTwo: {
        header: "Shop Group",
        links: [
          {
            title: "Women",
          },
          {
            title: "Men",
          },
          {
            title: "Kids",
          },
          {
            title: "Accessories",
          },
        ],
      },
      groupThree: {
        header: "Shop Group",
        links: [
          {
            title: "Collections",
          },
          {
            title: "Seasonal",
          },
          {
            title: "Special",
          },
          {
            title: "Limited",
          },
        ],
      },
      groupFour: {
        header: "Shop Group",
        links: [
          {
            title: "Checkout",
          },
          {
            title: "Ordertracking",
          },
          {
            title: "myaccount",
          },
          {
            title: "login-register",
          },
        ],
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
        links: [
          {
            title: "Typography",
          },
          {
            title: "Buttons",
          },
          {
            title: "Forms",
          },
          {
            title: "Icons",
          },
        ],
      },
      groupTwo: {
        header: "Elements Group",
        links: [
          {
            title: "Cards",
          },
          {
            title: "Tables",
          },
          {
            title: "Navigation",
          },
          {
            title: "Modals",
          },
        ],
      },
      groupThree: {
        header: "Elements Group",
        links: [
          {
            title: "Alerts",
          },
          {
            title: "Badges",
          },
          {
            title: "Progress",
          },
          {
            title: "Lists",
          },
        ],
      },
      groupFour: {
        header: "Elements Group",
        links: [
          {
            title: "Grid",
          },
          {
            title: "Layout",
          },
          {
            title: "Components",
          },
        ],
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
        links: [
          {
            title: "About",
          },
          {
            title: "Contact",
          },
          {
            title: "FAQ",
          },
          {
            title: "Terms",
          },
        ],
      },
    },
  },
  {
    label: "Blog",
    url: "#",
    subGroups: {
      groupOne: {
        header: "Blog Group",
        links: [
          {
            title: "Latest Posts",
          },
          {
            title: "Featured",
          },
          {
            title: "News",
          },
          {
            title: "Trends",
          },
        ],
      },
    },
  },
];
</script>

<style scoped></style>
