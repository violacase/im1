<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  ChevronRight,
  X,
} from "lucide-vue-next";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import type { NavItem } from "@/types/navigation";

const route = useRoute()
const router = useRouter()
const isNavigating = ref(false)
const isOpen = ref(false)

// Props for nav items
const props = defineProps<{
  items: NavItem[];
}>();

const handleNavigation = async (href: string) => {
  if (isNavigating.value) return; // Prevent double-clicks

  isNavigating.value = true;
  try {
    // Use Vue Router's navigation
    await router.push(href);
    isOpen.value = false; // Close dialog after navigation
  } catch (error) {
    console.error('Navigation error:', error);
    // Still close the dialog even if navigation fails
    isOpen.value = false;
  } finally {
    isNavigating.value = false;
  }
};
</script>

<template>
  <!-- Hamburger/X button that stays in header -->
  <div class="sm:hidden flex items-center h-full ml-auto">
    <Button variant="ghost" size="icon" aria-label="Menu openen" @click="isOpen = !isOpen">
      <Menu v-if="!isOpen" class="h-5 w-5" />
      <X v-else class="h-5 w-5" />
    </Button>
  </div>

  <!-- Mobile Navigation Dialog -->
  <Dialog v-model:open="isOpen">
    <DialogContent class="
        w-[95vw] max-w-[400px]
        sm:w-full sm:max-w-md
        max-h-[90vh]
        rounded-lg
        p-0
        overflow-hidden
      ">
      <!-- Navigation content - NO close button here -->
      <div class="p-6 max-h-[80vh] overflow-y-auto">
        <div class="space-y-2">
          <button v-for="item in props.items" :key="item.href" @click="handleNavigation(item.href)"
            :disabled="isNavigating" :class="[
              'w-full flex items-center justify-between p-3 rounded-lg transition-colors group',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'min-h-[56px] touch-manipulation',
              route.path === item.href
                ? 'bg-accent border-primary font-semibold'
                : 'border-border bg-card hover:bg-muted hover:border-muted-foreground',
            ]">
            <div class="flex items-center space-x-3">
              <component :is="item.icon"
                class="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span class="font-medium text-left">{{ item.label }}</span>
            </div>

            <div class="flex items-center space-x-2">
              <Badge v-if="item.badge" variant="secondary" class="text-xs">
                {{ item.badge }}
              </Badge>
              <ChevronRight class="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </button>
        </div>
      </div>

      <Separator />

      <!-- Footer section with theme switcher -->
      <div class="p-6 pt-4">
        <ThemeSwitcher class="flex-shrink-0" />
      </div>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
:deep([data-slot="dialog-close"]) {
  display: none !important;
}
</style>
