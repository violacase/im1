<template>
  <div class="bg-background text-foreground min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl lg:text-5xl font-bold text-center mb-4">In Loving Memory Jurriaan</h1>
      <p class="text-center text-lg text-muted-foreground mb-12">Light a virtual candle and share a thought</p>

      <!-- CTA buttons container -->
      <div class="text-center mb-16 flex justify-center items-center space-x-4">
        <!-- New "Read Me" button -->
        <button @click="isContentModalOpen = true"
          class="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300">
          Read Me
        </button>
        <!-- Existing "Light a Candle" button -->
        <button @click="isFormModalOpen = true"
          class="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300">
          Light a Candle
        </button>
      </div>

      <hr class="border-border my-12">

      <Candle_Gallery :newly-added-id="newlyAddedId" />

      <!-- Modal for the "About" content -->
      <RekaModal :show="isContentModalOpen" @close="isContentModalOpen = false">
        <Candle_Content />
      </RekaModal>

      <!-- Modal containing the form -->
      <RekaModal :show="isFormModalOpen" @close="isFormModalOpen = false">
        <Candle_Form @candle-added="handleCandleAdded" />
      </RekaModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RekaModal from '@/components/RekaModal.vue'
import Candle_Content from '@/components/Candle_Content.vue'
import Candle_Gallery from '@/components/Candle_Gallery.vue'
import Candle_Form from '@/components/Candle_Form.vue'

const newlyAddedId = ref<number | null>(null)
const isFormModalOpen = ref(false)
const isContentModalOpen = ref(false)

const handleCandleAdded = (id: number) => {
  newlyAddedId.value = id
  isFormModalOpen.value = false // Close form modal
}
</script>
