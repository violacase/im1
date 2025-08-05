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
import { Check, Palette } from "lucide-vue-next";
import { ref, watch } from "vue";

// Custom theme management using localStorage
const currentTheme = useLocalStorage('theme', 'system')
const isOpen = ref(false);

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
  <!-- Single Dialog for all devices with mobile-optimized styling -->
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="outline" size="icon" aria-label="Selecteer thema"
        class="touch-manipulation min-h-[44px] min-w-[44px] sm:min-h-[40px] sm:min-w-[40px]">
        <Palette class="h-4 w-4 sm:h-4 sm:w-4" />
      </Button>
    </DialogTrigger>

    <DialogContent class="
      w-[95vw] max-w-[400px]
      sm:w-full sm:max-w-md
      max-h-[90vh]
      rounded-lg
      p-0
      overflow-hidden
    ">
      <DialogHeader class="p-6 pb-4 border-b">
        <DialogTitle class="text-lg font-semibold">Selecteer thema</DialogTitle>
      </DialogHeader>

      <div class="p-6 pt-4 max-h-[60vh] overflow-y-auto">
        <div class="space-y-2">
          <button v-for="theme in themes" :key="theme.value" @click="handleThemeChange(theme.value)" :class="[
            'w-full flex items-center justify-between p-4 rounded-lg border transition-colors',
            'hover:bg-muted active:bg-muted focus:bg-muted focus:outline-none focus:ring-2 focus:ring-ring',
            'min-h-[56px] touch-manipulation', // Mobile-friendly touch target
            'text-left',
            isSelected(theme.value)
              ? 'bg-muted border-primary font-semibold ring-2 ring-primary/20'
              : 'border-border hover:border-muted-foreground',
          ]">
            <span class="font-medium">{{ theme.label }}</span>
            <Check v-if="isSelected(theme.value)" class="w-5 h-5 text-primary shrink-0 ml-2" />
          </button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
