<template>
  <MyHero :title="t('about.hero.title')" :description="t('about.hero.description')" />

  <div class="bg-background text-foreground min-h-screen py-12">
    <div class="container mx-auto px-4 max-w-3xl">
      <h1 class="text-4xl lg:text-5xl font-bold text-center mb-8">
        {{ t('about.content.title') }}
      </h1>
      <div class="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6">
        <p>
          {{ t('about.content.paragraphs.0') }}
        </p>
        <p>
          {{ t('about.content.paragraphs.1') }}
        </p>
        <p>
          {{ t('about.content.paragraphs.2') }}
        </p>
        <p>
          {{ t('about.content.paragraphs.3') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import MyHero from '@/components/MyHero.vue'

const { t } = useI18n()
</script>
