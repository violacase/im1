<template>
  <header class="w-full border-b border-gray-200 dark:border-gray-800 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <!-- Desktop: klein logo links -->
      <!-- <AppLogo size="small" class="hidden sm:block" /> -->
      <!-- <AppLogo size="small" class="hidden sm:block bg-red-500" /> -->
      <!-- Mobile: medium logo gecentreerd -->
      <!-- <AppLogo size="medium" class="block sm:hidden mx-auto" /> -->

      <AppLogo size="medium" class="desktop-logo" />
      <AppLogo size="small" class="mobile-logo" />

      <DesktopNav :items="navItems" class="hidden sm:flex" />
      <MobileNav v-model:open="showMobileMenu" :items="navItems" class="sm:hidden" />
    </div>
  </header>
  <!-- Logo on the left side -->
  <!-- <AppLogo variant="nav" class="hidden sm:block" /> -->
  <!-- Small for navigation -->
  <!-- <AppLogo size="small" /> -->
  <!-- <AppLogo src="/images/kers.png" size="medium" /> -->
  <!-- Medium for auth pages -->
  <!-- <AppLogo size="medium" /> -->

  <!-- Large for hero sections -->
  <!-- <AppLogo size="small" /> -->

  <!-- Custom image -->

  <!-- Add this temporarily to see current route -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Home, Settings, Camera, Projector, Info, Flower } from "lucide-vue-next";
import DesktopNav from "@/components/DesktopNav.vue";
import MobileNav from "@/components/MobileNav.vue";
//import AppLogo from "./AppLogo.vue"; // Add this import
// import MobileNavButton from "./MobileNavButton.vue";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    badge: null,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
    badge: null,
  }, {
    label: "Candles",
    href: "/in-memoriam",
    icon: Flower,
    badge: null,
  },
  {
    label: "Embla",
    href: "/emblaDemo",
    icon: Projector,
    badge: "New!",
  },
  {
    label: "Shadcn",
    href: "/locations-carousel",
    icon: Camera,
    badge: "New!",
  },

  {
    label: "Setup",
    href: "/setup",
    icon: Settings,
    badge: null,
  },
];

const showMobileMenu = ref(false);
</script>

<style scoped>
.desktop-logo {
  display: none;
}

.mobile-logo {
  display: block;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .desktop-logo {
    display: block;
  }

  .mobile-logo {
    display: none;
  }
}
</style>
