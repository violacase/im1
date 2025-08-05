<script setup lang="ts">
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
} from "lucide-vue-next";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const route = useRoute()
const router = useRouter()

// Props and emits for proper v-model support
const props = defineProps<{
  open?: boolean;
  items: NavItem[];
}>();

const emit = defineEmits<{
  "update:open": [value: boolean];
}>();

// Props and emits for proper v-model support
interface NavItem {
  label: string;
  href: string;
  icon?: string | object;
  badge?: string | null;
}

const handleNavigation = (href: string) => {
  // Use Vue Router's navigation
  router.push(href);
  emit("update:open", false);
};

// const closeSheet = () => {
//   emit("update:open", false);
// };
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
        <AppLogo size="small" />
        <SheetClose>
          <Button variant="ghost" size="icon" class="rounded-full">
            X
          </Button>
        </SheetClose>
      </div>

      <Separator />

      <nav class="flex-1 px-6 py-4">
        <div class="space-y-2">
          <button v-for="item in props.items" :key="item.href" @click="handleNavigation(item.href)" :class="[
            'w-full flex items-center justify-between p-3 rounded-lg transition-colors group',
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
