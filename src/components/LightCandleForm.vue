<template>
  <div class="p-6">
    <div v-if="success" class="text-center text-primary p-4">
      <p class="font-bold text-lg">Thank you for your tribute.</p>
      <p>Your candle is now lit.</p>
    </div>
    <form v-else @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="block text-muted-foreground text-sm font-bold mb-2">Your Name
          (Optional)</label>
        <input id="name" v-model="name" type="text" placeholder="Leave your name"
          class="w-full px-3 py-2 text-card-foreground bg-input border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div class="mb-6">
        <label for="message" class="block text-muted-foreground text-sm font-bold mb-2">Message
          (Optional)</label>
        <textarea id="message" v-model="message" rows="3" placeholder="Share a memory or a thought"
          class="w-full px-3 py-2 text-card-foreground bg-input border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring"></textarea>
      </div>
      <div class="flex items-center justify-center">
        <button type="submit" :disabled="loading"
          class="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed">
          {{ loading ? 'Submitting...' : 'Light a Candle' }}
        </button>
      </div>
      <p v-if="error" class="text-destructive text-center mt-4">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCandles } from '@/composables/useCandles'

const emit = defineEmits<{
  candleAdded: [candleId: number]
}>()

const { insertCandle, addCandleToList } = useCandles()

const name = ref('')
const message = ref('')
const loading = ref(false)
const error = ref<string | null>(null)
const success = ref(false)

const handleSubmit = async () => {
  loading.value = true
  error.value = null

  try {
    // Call the composable method instead of $fetch
    const response = await insertCandle({
      name: name.value,
      message: message.value
    })

    success.value = true

    // Add the new candle to the shared state immediately
    addCandleToList(response.candle)

    // Emit an event with the new candle's ID
    emit('candleAdded', response.candle.id)

    // Clear form for a clean state
    name.value = ''
    message.value = ''

  } catch (e) {
    error.value = 'Something went wrong. Please try again.'
    console.error('Form submission error:', e)
  } finally {
    loading.value = false
  }
}
</script>
