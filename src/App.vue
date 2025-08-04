<!-- src/App.vue -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from "@/components/SiteHeader.vue";
</script>

<template>
  <div>
    <SiteHeader />
    <main class="flex-grow">
      <div class="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        <RouterView />
      </div>
    </main>
    <h1>Footer. Komt nog. Zie default.vue</h1>
  </div>
</template>
