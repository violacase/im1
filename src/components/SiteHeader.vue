<template>
  <header class="w-full border-b border-gray-200 dark:border-gray-800 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <DesktopNav :items="navItems" class="hidden sm:flex" />
      <MobileNav :items="navItems" class="sm:hidden" />
    </div>
  </header>
</template>

<script setup lang="ts">
import DesktopNav from "@/components/Nav_Desktop.vue";
import MobileNav from "@/components/Nav_Mobile.vue";
import { getNavItems } from "@/config/routes";

const navItems = getNavItems();
</script>
