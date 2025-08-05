<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
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

// Props and emits for proper v-model support
const props = defineProps<{
  open?: boolean;
  items: NavItem[];
}>();

const emit = defineEmits<{
  "update:open": [value: boolean];
}>();

const handleNavigation = async (href: string) => {
  if (isNavigating.value) return; // Prevent double-clicks

  isNavigating.value = true;
  try {
    // Use Vue Router's navigation
    await router.push(href);
    emit("update:open", false);
  } catch (error) {
    console.error('Navigation error:', error);
    // Still close the menu even if navigation fails
    emit("update:open", false);
  } finally {
    isNavigating.value = false;
  }
};
</script>

<template>
  <Sheet :open="props.open" @update:open="emit('update:open', $event)">
    <SheetTrigger as-child>
      <div class="sm:hidden flex items-center h-full">
        <!-- Hamburger menu button -->
        <Button variant="ghost" size="icon" aria-label="Menu openen">
          <Menu class="h-5 w-5" />
        </Button>
      </div>
    </SheetTrigger>

    <SheetContent side="right" class="w-80 p-0">
      <div class="p-6 pb-4 flex items-center justify-between">
        <!-- <AppLogo size="small" /> -->
        <span class="font-semibold text-lg">Menu</span>
        <SheetClose>
          <Button variant="ghost" size="icon" class="rounded-full" aria-label="Menu sluiten">
            <X class="h-4 w-4" />
          </Button>
        </SheetClose>
      </div>

      <Separator />

      <nav class="flex-1 px-6 py-4">
        <div class="space-y-2">
          <button v-for="item in props.items" :key="item.href" @click="handleNavigation(item.href)"
            :disabled="isNavigating" :class="[
              'w-full flex items-center justify-between p-3 rounded-lg transition-colors group',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              route.path === item.href
                ? 'bg-muted text-foreground'
                : 'hover:bg-muted active:bg-muted',
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
      </nav>

      <Separator />

      <!-- Footer section with theme switcher -->
      <div class="p-6 pt-4">
        <ThemeSwitcher class="ml-2 sm:ml-4 flex-shrink-0" />
      </div>
    </SheetContent>
  </Sheet>
</template>
