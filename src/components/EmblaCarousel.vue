<template>
  <div class="relative" :class="{ 'absolute inset-0': fullscreen, 'fullscreen-carousel': fullscreen }"
    :style="fullscreenStyles">
    <!-- Carousel Container -->
    <div class="overflow-hidden" :class="fullscreen ? 'h-full w-full fullscreen-viewport' : 'rounded-lg'"
      ref="emblaRef">
      <div class="flex" :class="{ 'h-full fullscreen-container': fullscreen }"
        :style="fullscreen ? { marginLeft: '0px' } : {}">
        <div v-for="(slide, index) in slides" :key="index"
          :class="fullscreen ? 'flex-none w-full h-full fullscreen-slide' : 'flex-none w-full min-w-0'"
          :style="fullscreen ? { paddingLeft: '0px', flex: '0 0 100%' } : {}">
          <div class="relative flex items-center justify-center"
            :class="fullscreen ? 'h-full w-full bg-black' : 'aspect-video bg-slate-100 dark:bg-slate-800'">
            <!-- Slide Content -->
            <template v-if="slide.image">
              <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
              <!-- Optional overlay content -->
              <!-- <div
                class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center text-white">
                <h3 class="text-2xl font-semibold mb-2 drop-shadow-md">
                  {{ slide.title }}
                </h3>
                <p class="drop-shadow">
                  {{ slide.description }}
                </p>
              </div> -->
            </template>
            <template v-else>
              <div class="text-center">
                <h3 class="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {{ slide.title }}
                </h3>
                <p class="text-slate-600 dark:text-slate-400">
                  {{ slide.description }}
                </p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button @click="scrollPrev" :disabled="!canScrollPrev"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed">
      <ChevronLeft class="w-5 h-5 text-slate-700 dark:text-slate-300" />
    </button>

    <button @click="scrollNext" :disabled="!canScrollNext"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed">
      <ChevronRight class="w-5 h-5 text-slate-700 dark:text-slate-300" />
    </button>

    <!-- Dots Indicator -->
    <div class="flex justify-center space-x-2" :class="fullscreen ? 'absolute bottom-4 left-0 right-0 z-10' : 'mt-4'">
      <button v-for="(_, index) in slides" :key="index" @click="scrollTo(index)" :class="[
        'w-2 h-2 rounded-full transition-all duration-200',
        selectedIndex === index
          ? 'bg-slate-800 dark:bg-slate-200'
          : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
      ]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, type Ref, type CSSProperties } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import type { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import type { AutoplayType } from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

// Type definitions
interface Slide {
  title: string
  description: string
  image?: string
}

interface Props {
  slides?: Slide[]
  options?: EmblaOptionsType
  autoplay?: boolean
  autoplayDelay?: number
  fullscreen?: boolean
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
  slides: () => [
    { title: 'Slide 1', description: 'This is the first slide' },
    { title: 'Slide 2', description: 'This is the second slide' },
    { title: 'Slide 3', description: 'This is the third slide' }
  ],
  options: () => ({
    loop: true,
    align: 'start'
  }),
  autoplay: true,
  autoplayDelay: 4000,
  fullscreen: false
})

// Reactive state
const canScrollPrev: Ref<boolean> = ref(false)
const canScrollNext: Ref<boolean> = ref(false)
const selectedIndex: Ref<number> = ref(0)

// Computed styles for fullscreen mode
const fullscreenStyles = computed<CSSProperties>(() => {
  if (props.fullscreen) {
    return {
      '--slide-size': '100%',
      '--slide-spacing': '0px',
      '--slide-height': '100vh',
      'maxWidth': 'none'
    } as CSSProperties
  }
  return {}
})

// Setup plugins
const plugins: AutoplayType[] = []
if (props.autoplay) {
  plugins.push(Autoplay({ delay: props.autoplayDelay }) as AutoplayType)
}

// Initialize Embla Carousel
const [emblaRef, emblaApi] = emblaCarouselVue(props.options, plugins)

// Navigation methods
const scrollPrev = (): void => {
  emblaApi.value?.scrollPrev()
}

const scrollNext = (): void => {
  emblaApi.value?.scrollNext()
}

const scrollTo = (index: number): void => {
  emblaApi.value?.scrollTo(index)
}

// Update button states
const updateButtonStates = (): void => {
  if (!emblaApi.value) return
  canScrollPrev.value = emblaApi.value.canScrollPrev()
  canScrollNext.value = emblaApi.value.canScrollNext()
}

// Update selected index
const updateSelectedIndex = (): void => {
  if (!emblaApi.value) return
  selectedIndex.value = emblaApi.value.selectedScrollSnap()
}

// Setup event listeners
onMounted((): void => {
  if (!emblaApi.value) return

  updateButtonStates()
  updateSelectedIndex()

  emblaApi.value.on('select', updateButtonStates)
  emblaApi.value.on('select', updateSelectedIndex)
  emblaApi.value.on('reInit', updateButtonStates)
  emblaApi.value.on('reInit', updateSelectedIndex)
})

// Cleanup
onUnmounted((): void => {
  if (!emblaApi.value) return

  emblaApi.value.off('select', updateButtonStates)
  emblaApi.value.off('select', updateSelectedIndex)
  emblaApi.value.off('reInit', updateButtonStates)
  emblaApi.value.off('reInit', updateSelectedIndex)
})
</script>

<style scoped>
/* Add any component-specific styles here if needed */
.fullscreen-carousel {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}

.fullscreen-viewport {
  height: 100vh !important;
}

.fullscreen-container {
  height: 100% !important;
}

.fullscreen-slide {
  height: 100vh !important;
}

/* Ensure smooth transitions */
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
