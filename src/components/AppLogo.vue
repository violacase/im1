<template>
  <RouterLink :to="link" :class="linkClasses" :style="sizeStyle" :aria-label="computedAlt" @click="handleClick">
    <img :src="computedSrc" :alt="computedAlt" :width="numericSize" :height="numericSize"
      class="rounded-lg object-cover w-full h-full" loading="eager" decoding="async" @error="handleImageError"
      @load="handleImageLoad" />
  </RouterLink>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// Types defined inline for simplicity
type LogoSize = 'small' | 'medium' | 'large'

interface Props {
  src?: string
  alt?: string
  size?: LogoSize | number
  link?: string
  customClass?: string
  fallbackSrc?: string
  disabled?: boolean
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
  src: './assets/images/logo.webp',
  alt: 'Logo',
  size: 'small',
  link: '/',
  customClass: '',
  fallbackSrc: './assets/images/logo-fallback.png',
  disabled: false,
})

// Events
const emit = defineEmits<{
  click: [event: Event]
  imageLoad: [event: Event]
  imageError: [event: Event]
}>()

// Reactive state
const imageError = ref(false)
const imageLoaded = ref(false)

// Size configuration
const sizeMap: Record<LogoSize, { class: string; value: number }> = {
  small: { class: 'w-8 h-8 sm:w-10 sm:h-10', value: 40 },
  medium: { class: 'w-12 h-12 sm:w-16 sm:h-16', value: 64 },
  large: { class: 'w-20 h-20 sm:w-24 sm:h-24', value: 96 },
}

// Computed properties
const isNumericSize = computed(() => typeof props.size === 'number')

const numericSize = computed(() => {
  if (isNumericSize.value) {
    return Math.max(props.size as number, 16)
  }
  return sizeMap[props.size as LogoSize].value
})

const sizeClasses = computed(() => {
  if (isNumericSize.value) return ''
  return sizeMap[props.size as LogoSize].class
})

const sizeStyle = computed(() => {
  if (isNumericSize.value) {
    const size = `${numericSize.value}px`
    return { width: size, height: size, minWidth: size, minHeight: size }
  }
  return {}
})

const computedSrc = computed(() => {
  return imageError.value && props.fallbackSrc ? props.fallbackSrc : props.src
})

const computedAlt = computed(() => {
  return props.alt || (props.link === '/' ? 'Go to homepage' : 'Logo')
})

const linkClasses = computed(() => [
  'inline-flex items-center justify-center rounded-lg transition-all duration-200 ease-in-out',
  'hover:opacity-80 hover:scale-105 active:scale-95',
  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
  props.disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
  sizeClasses.value,
  props.customClass,
])

// Event handlers
const handleClick = (event: Event) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}

const handleImageError = (event: Event) => {
  imageError.value = true
  emit('imageError', event)
}

const handleImageLoad = (event: Event) => {
  imageLoaded.value = true
  imageError.value = false
  emit('imageLoad', event)
}

// Expose for parent components
defineExpose({
  imageError,
  imageLoaded,
  numericSize,
})
</script>

<style scoped>
.inline-flex {
  transition-property: opacity, transform, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .inline-flex {
    transition: none !important;
    transform: none !important;
  }

  .inline-flex:hover,
  .inline-flex:active {
    transform: none !important;
  }
}

.inline-flex:focus-visible {
  outline-width: 2px;
  outline-color: var(--accent-color, #3b82f6);
  outline-offset: 2px;
  /* ring-offset-color is not a valid CSS property, you may need to use box-shadow or another approach for offset color */
}

@media (prefers-contrast: high) {
  .inline-flex {
    border: 2px solid currentColor;
  }

  .inline-flex:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 2px;
  }
}

@media print {
  .inline-flex {
    transition: none !important;
    transform: none !important;
    box-shadow: none !important;
  }
}
</style>
