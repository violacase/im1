<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header class="border-b">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-foreground">
          Embla Carousel Demo
        </h1>
        <p class="text-muted-foreground mt-2">
          A showcase of the Embla Carousel component in Vue 3
        </p>
      </div>
    </header>
    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">
          Image Carousel
        </h2>
        <EmblaCarousel :slides="slides" :autoplay="true" :autoplay-delay="3000" />
      </section>
      <!-- Configuration Panel -->
      <section>
        <div class="bg-card border rounded-lg p-6">
          <h3 class="text-xl font-medium mb-4">Configuration Options</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 class="font-medium text-foreground mb-2">Basic Options</h4>
              <ul class="text-muted-foreground space-y-1">
                <li>• Loop: Enable/disable infinite loop</li>
                <li>• Align: start, center, end</li>
                <li>• Autoplay: Auto-advance slides</li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Navigation</h4>
              <ul class="text-muted-foreground space-y-1">
                <li>• Previous/Next buttons</li>
                <li>• Dot indicators</li>
                <li>• Touch/swipe support</li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-foreground mb-2">Customization</h4>
              <ul class="text-muted-foreground space-y-1">
                <li>• Custom slide content</li>
                <li>• Tailwind CSS styling</li>
                <li>• Themes mode support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import EmblaCarousel from '@/components/EmblaCarousel.vue'
import { onMounted } from 'vue'
import locationsData from '@/assets/images/pics_dj.json'

// Type definition for slide structure
interface Slide {
  title: string
  description: string
  image?: string
  [key: string]: unknown // Allow additional properties
}

// Page metadata - Vue 3 replacement for Nuxt's useSeoMeta
onMounted(() => {
  document.title = 'Embla Carousel Demo'

  const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    || document.createElement('meta')

  if (!document.querySelector('meta[name="description"]')) {
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', 'Demonstration of Embla Carousel component in Vue 3 with Tailwind CSS')
})

// Type the slides data
const slides: Slide[] = locationsData as Slide[]
</script>
