<script setup lang="ts">
import {
  Drawer,
  DrawerContent,
} from '@/components/ui/drawer'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

function handleOpenChange(isOpen: boolean) {
  if (!isOpen) {
    emit('close')
  }
}
</script>

<template>
  <Drawer :open="props.show" @update:open="handleOpenChange">
    <DrawerContent>
      <div class="mx-auto my-4 h-2 w-[100px] rounded-full bg-muted" />
      <div class="overflow-y-auto p-4">
        <slot />
      </div>
    </DrawerContent>
  </Drawer>
</template>
