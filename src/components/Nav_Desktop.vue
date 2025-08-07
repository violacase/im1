<template>
  <nav class="flex items-center justify-end flex-1 ml-4 gap-2 sm:gap-4 lg:gap-6">
    <RouterLink v-for="item in items" :key="item.href" :to="item.href"
      class="group flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-muted hover:text-primary relative">
      <!-- Icon -->
      <component v-if="item.icon" :is="item.icon"
        class="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />

      <!-- Label -->
      <span class="font-medium">{{ item.label }}</span>

      <!-- Badge -->
      <Badge v-if="item.badge" variant="secondary" class="text-xs ml-1">
        {{ item.badge }}
      </Badge>

      <!-- Active indicator -->
      <div v-if="route.path === item.href"
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
    </RouterLink>

    <!-- Theme switcher as part of the nav bar -->
    <ThemeSwitcher class="ml-2 sm:ml-4 flex-shrink-0" />
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ThemeSwitcher from "./ThemeSwitcher.vue";
import { Badge } from "@/components/ui/badge";
import type { Component } from 'vue';

interface NavItem {
  label: string
  href: string
  icon: Component
  badge?: string | null
}

const route = useRoute()

defineProps<{
  items: NavItem[];
}>();
</script>
