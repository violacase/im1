<template>
  <div class="bg-background text-foreground min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl lg:text-5xl font-bold text-center mb-4">In Loving Memory</h1>
      <p class="text-center text-lg text-muted-foreground mb-12">Light a virtual candle and share a thought.</p>

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

      <CandleGallery :newly-added-id="newlyAddedId" />

      <!-- Modal for the "About" content -->
      <Modal :show="isContentModalOpen" @close="isContentModalOpen = false">
        <CandleContent />
      </Modal>

      <!-- Modal containing the form -->
      <Modal :show="isFormModalOpen" @close="isFormModalOpen = false">
        <LightCandleForm @candle-added="handleCandleAdded" />
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import CandleContent from '@/components/CandleContent.vue'
import CandleGallery from '@/components/CandleGallery.vue'
import LightCandleForm from '@/components/LightCandleForm.vue'

const newlyAddedId = ref<number | null>(null)
const isFormModalOpen = ref(false)
const isContentModalOpen = ref(false)

const handleCandleAdded = (id: number) => {
  newlyAddedId.value = id
  isFormModalOpen.value = false // Close form modal
}
</script>
