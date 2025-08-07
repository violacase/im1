<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

// Disable automatic attribute inheritance
defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  show: boolean
  title?: string
  description?: string
  showHeader?: boolean
  maxWidth?: string
  closable?: boolean
}>(), {
  title: 'empty',
  description: 'empty',
  showHeader: true,
  maxWidth: 'max-w-lg',
  closable: true,
})

const emit = defineEmits<{
  close: []
}>()

function handleOpenChange(isOpen: boolean) {
  if (!isOpen && props.closable) {
    emit('close')
  }
}
</script>

<template>
  <Dialog :open="props.show" @update:open="handleOpenChange">
    <DialogContent :class="[
      'w-[95vw]',
      props.maxWidth,
      'sm:w-full',
      'max-h-[90vh]',
      'rounded-lg',
      'overflow-hidden'
    ]">
      <!-- Header Section -->
      <DialogHeader v-if="props.showHeader" :class="[
        'pb-4 border-b',
        (props.title === 'empty' && props.description === 'empty') ? 'hidden' : ''
      ]">
        <DialogTitle :class="[
          'text-lg font-semibold',
          props.title === 'empty' ? 'hidden' : ''
        ]">
          {{ props.title }}
        </DialogTitle>
        <DialogDescription :class="[
          'text-sm text-muted-foreground',
          props.description === 'empty' ? 'hidden' : ''
        ]">
          {{ props.description }}
        </DialogDescription>
      </DialogHeader>

      <!-- Content Section -->
      <div :class="[
        'max-h-[80vh] overflow-y-auto',
        props.showHeader && (props.title !== 'empty' || props.description !== 'empty') ? 'pt-4' : 'p-6'
      ]">
        <slot />
      </div>
    </DialogContent>
  </Dialog>
</template>
