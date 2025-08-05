<template>
  <header class="w-full border-b border-gray-200 dark:border-gray-800 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <DesktopNav :items="navItems" class="hidden sm:flex" />
      <MobileNav v-model:open="showMobileMenu" :items="navItems" class="sm:hidden" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Home, Settings, Info } from "lucide-vue-next";
import DesktopNav from "@/components/DesktopNav.vue";
import MobileNav from "@/components/MobileNav.vue";
import type { NavItem } from "@/types/navigation";

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/homePage",
    icon: Home,
    badge: null,
  },
  {
    label: "About",
    href: "/aboutPage",
    icon: Info,
    badge: null,
  },
  {
    label: "Setup",
    href: "/setupPage",
    icon: Settings,
    badge: null,
  },
];

const showMobileMenu = ref(false);
</script>
