<template>
  <div>
    <h2 class="text-3xl font-bold text-center text-muted-foreground mb-8">Lit Candles</h2>
    <div v-if="pending" class="text-center text-muted-foreground">
      Loading tributes...
    </div>
    <div v-else-if="error" class="text-center text-destructive">
      {{ error }}
    </div>
    <TransitionGroup v-else-if="candles && candles.length > 0" tag="div" name="list"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div v-for="candle in candles" :key="candle.id" class="relative flex flex-col items-center text-center"
        :class="{ 'newly-added': candle.id === newlyAddedId }">
        <!-- This inner div will now be the target of our animation -->
        <div class="p-2 w-full h-full animated-content transition-all duration-300">
          <VirtualCandle />
          <div class="mt-4">
            <!-- Message container with fixed height and scrolling -->
            <div class="h-24 overflow-y-auto pr-2 text-container">
              <p v-if="candle.message" class="text-muted-foreground italic break-words">"{{ candle.message
              }}"</p>
            </div>
            <!-- Name is always visible below the message container -->
            <p v-if="candle.name" class="text-primary font-semibold mt-2">- {{ candle.name }}</p>
            <p v-else class="text-primary/80 font-semibold mt-2">- Anonymous</p>
          </div>
        </div>
      </div>
    </TransitionGroup>
    <div v-else class="text-center text-muted-foreground">
      Be the first to light a candle.
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCandles } from '@/composables/useCandles'
import VirtualCandle from '@/components/VirtualCandle.vue'

defineProps<{
  newlyAddedId?: number | null
}>()

const { candles, pending, error, fetchCandles } = useCandles()

// Load candles when component mounts
onMounted(() => {
  fetchCandles()
})
</script>

<style scoped>
/* TransitionGroup fade-in/up animation */
.list-enter-active,
.list-leave-active {
  transition: all 0.7s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Highlight animation for the newly added candle */
.newly-added {
  /* Ensure the scaled element appears above its siblings */
  z-index: 10;
}

.newly-added .animated-content {
  animation: glow-and-scale 8s ease-out forwards;
  /* Give it a background so it's not transparent when it scales up */
  background-color: var(--color-background);
}

@keyframes glow-and-scale {
  0% {
    transform: scale(1.3);
    box-shadow: 0 0 25px 6px oklch(from var(--color-primary) l c h / 0.3);
    border-radius: 0.75rem;
    /* 12px */
  }

  25% {
    transform: scale(1.2);
    box-shadow: 0 0 25px 6px oklch(from var(--color-primary) l c h / 0.3);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 oklch(from var(--color-primary) l c h / 0);
  }
}

/* Custom scrollbar styling for the text container */
.text-container {
  scrollbar-width: thin;
  scrollbar-color: var(--color-muted-foreground) transparent;
}

.text-container::-webkit-scrollbar {
  width: 6px;
}

.text-container::-webkit-scrollbar-track {
  background: transparent;
}

.text-container::-webkit-scrollbar-thumb {
  background-color: var(--color-muted-foreground);
  border-radius: 3px;
}
</style>
