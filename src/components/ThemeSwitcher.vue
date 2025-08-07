<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Check, Palette } from "lucide-vue-next";
import { ref } from "vue";
import { useTheme } from "@/composables/useTheme";
import type { ThemeValue } from "@/types/theme";

// Use our custom theme management that properly handles 'system'
const { currentTheme, setTheme, themes } = useTheme()
const isOpen = ref(false);

const handleThemeChange = (themeValue: string) => {
  setTheme(themeValue as ThemeValue);
  isOpen.value = false;
};

const isSelected = (themeValue: string) => {
  return currentTheme.value === themeValue;
};

const getThemeClasses = (themeValue: string) => {
  const selected = isSelected(themeValue);
  return [
    'w-full flex items-center justify-between p-4 rounded-lg border transition-colors hover:bg-muted active:bg-muted',
    selected
      ? 'bg-accent border-primary font-semibold'
      : 'border-border',
  ];
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
        <DialogTitle class="text-lg font-semibold">Select a theme</DialogTitle>
        <DialogDescription class=" sm:block">
          Try another theme color scheme if you like
        </DialogDescription>
      </DialogHeader>

      <div class="p-6 pt-4 max-h-[60vh] overflow-y-auto">
        <div class="space-y-2">
          <button v-for="theme in themes" :key="theme.value" @click="handleThemeChange(theme.value)"
            :class="getThemeClasses(theme.value)" class="min-h-[56px] touch-manipulation">
            <span class="font-medium text-left">{{ theme.label }}</span>
            <Check v-if="isSelected(theme.value)" class="w-5 h-5 text-primary shrink-0 ml-2" />
          </button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
