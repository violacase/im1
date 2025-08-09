<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Github, Star } from 'lucide-vue-next'

// Props interface
interface Props {
  title: string
  description: string
  showActions?: boolean
  showStats?: boolean
  variant?: 'default' | 'gradient' | 'minimal'
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
  showActions: true,
  showStats: true,
  variant: 'default'
})

// Reactive state for animations and stats
const isVisible = ref(false)
const stats = ref({
  stars: 0,
  downloads: 0,
  contributors: 0
})

// Computed styles based on variant
const heroClasses = computed(() => {
  const base = "relative py-16 px-6 text-center overflow-hidden"

  switch (props.variant) {
    case 'gradient':
      return `${base} bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10`
    case 'minimal':
      return `${base} bg-background`
    default:
      return `${base} bg-gradient-to-r from-background to-muted/30`
  }
})

// Animation trigger
onMounted(() => {
  // Trigger entrance animation
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  // Simulate loading stats (you can replace with real API calls)
  setTimeout(() => {
    stats.value = {
      stars: 1250,
      downloads: 15600,
      contributors: 42
    }
  }, 800)
})

// Action handlers
const handleGetStarted = () => {
  // Navigate to documentation or setup guide
  console.log('Get Started clicked')
}

const handleViewGithub = () => {
  // Open GitHub repository
  window.open('https://github.com/your-repo', '_blank')
}

const handleDocumentation = () => {
  // Navigate to docs
  console.log('View Documentation clicked')
}
</script>

<template>
  <div :class="heroClasses">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
    </div>

    <!-- Main content -->
    <div class="relative max-w-4xl mx-auto">
      <!-- Badge/Status -->
      <div class="mb-6 transform transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
        <Badge variant="secondary" class="px-4 py-2 text-sm font-medium">
          <Star class="w-4 h-4 mr-2" />
          Latest Release v2.1.0
        </Badge>
      </div>

      <!-- Title -->
      <h1
        class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-tight transform transition-all duration-700 ease-out delay-100"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
        {{ title }}
      </h1>

      <!-- Description -->
      <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 transform transition-all duration-700 ease-out delay-200"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
        {{ description }}
      </p>

      <!-- Action buttons -->
      <div v-if="showActions"
        class="flex flex-col sm:flex-row gap-4 justify-center mb-12 transform transition-all duration-700 ease-out delay-300"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
        <Button size="lg" class="group px-8 py-3 text-base font-semibold" @click="handleGetStarted">
          Get Started
          <ArrowRight class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>

        <Button variant="outline" size="lg" class="px-8 py-3 text-base font-semibold" @click="handleViewGithub">
          <Github class="mr-2 w-4 h-4" />
          View on GitHub
        </Button>

        <Button variant="ghost" size="lg" class="px-8 py-3 text-base font-semibold" @click="handleDocumentation">
          Documentation
        </Button>
      </div>

      <!-- Stats -->
      <div v-if="showStats"
        class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto transform transition-all duration-700 ease-out delay-500"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
        <Card class="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent class="p-6 text-center">
            <div class="text-2xl font-bold text-foreground mb-1">
              {{ stats.stars.toLocaleString() }}+
            </div>
            <div class="text-sm text-muted-foreground">GitHub Stars</div>
          </CardContent>
        </Card>

        <Card class="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent class="p-6 text-center">
            <div class="text-2xl font-bold text-foreground mb-1">
              {{ stats.downloads.toLocaleString() }}+
            </div>
            <div class="text-sm text-muted-foreground">Downloads</div>
          </CardContent>
        </Card>

        <Card class="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent class="p-6 text-center">
            <div class="text-2xl font-bold text-foreground mb-1">
              {{ stats.contributors }}+
            </div>
            <div class="text-sm text-muted-foreground">Contributors</div>
          </CardContent>
        </Card>
      </div>
    </div>

    <!-- Additional decorative elements -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </div>
</template>

<style scoped>
/* Custom animations for smoother entrance effects */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ensure text gradient works properly */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
