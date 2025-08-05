<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Check, Palette } from "lucide-vue-next";
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

// Custom theme management using localStorage
const currentTheme = useLocalStorage('theme', 'system')
const isOpen = ref(false);
const windowWidth = ref(0);

// Apply theme to document
const applyTheme = (theme: string) => {
  const html = document.documentElement

  // Remove all theme classes
  html.classList.remove('light', 'dark', 'darkblue', 'mediumgreen', 'brown', 'redish', 'darkorange', 'lightorange')

  if (theme === 'system') {
    // Use system preference
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    html.classList.add(systemTheme)
  } else {
    html.classList.add(theme)
  }
}

// Watch for theme changes
watch(currentTheme, (newTheme) => {
  applyTheme(newTheme)
}, { immediate: true })

// Reactive mobile detection
const isMobile = computed(() => windowWidth.value < 768);

// Update window width on resize
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  updateWindowWidth();
  window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

const themes = [
  { label: "Systeem", value: "system" },
  { label: "Licht", value: "light" },
  { label: "Donker", value: "dark" },
  { label: "Blauw", value: "darkblue" },
  { label: "Groen", value: "mediumgreen" },
  { label: "Bruin", value: "brown" },
  { label: "Roodachtig", value: "redish" },
  { label: "Donker Oranje", value: "darkorange" },
  { label: "Licht Oranje", value: "lightorange" },
] as const;

const handleThemeChange = (themeValue: string) => {
  currentTheme.value = themeValue;
  isOpen.value = false;
};

const isSelected = (themeValue: string) => {
  return currentTheme.value === themeValue;
};
</script>

<template>
  <!-- Mobile: Use Drawer -->
  <Drawer v-if="isMobile" v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Button variant="outline" size="icon" aria-label="Selecteer thema" class="touch-manipulation">
        <Palette class="h-4 w-4" />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Selecteer thema</DrawerTitle>
      </DrawerHeader>
      <div class="p-4 pb-8">
        <div class="space-y-1">
          <button v-for="theme in themes" :key="theme.value" @click="handleThemeChange(theme.value)" :class="[
            'w-full flex items-center justify-between p-4 rounded-lg border transition-colors hover:bg-muted active:bg-muted',
            isSelected(theme.value)
              ? 'bg-muted border-primary font-semibold'
              : 'border-border',
          ]" class="min-h-[48px] touch-manipulation">
            <span class="text-left">{{ theme.label }}</span>
            <Check v-if="isSelected(theme.value)" class="w-5 h-5 text-primary shrink-0" />
          </button>
        </div>
      </div>
    </DrawerContent>
  </Drawer>

  <!-- Desktop: Use Dialog -->
  <Dialog v-else v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="outline" size="icon" aria-label="Selecteer thema">
        <Palette class="h-4 w-4" />
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Selecteer thema</DialogTitle>
      </DialogHeader>
      <div class="mt-6">
        <div class="space-y-2">
          <button v-for="theme in themes" :key="theme.value" @click="handleThemeChange(theme.value)" :class="[
            'w-full flex items-center justify-between p-4 rounded-lg border transition-colors hover:bg-muted active:bg-muted',
            isSelected(theme.value)
              ? 'bg-muted border-primary font-semibold'
              : 'border-border',
          ]">
            <span class="text-left">{{ theme.label }}</span>
            <Check v-if="isSelected(theme.value)" class="w-4 h-4 text-primary shrink-0" />
          </button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
