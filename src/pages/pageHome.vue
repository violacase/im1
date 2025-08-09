<template>
  <section class="mb-12">
    <div class="max-w-4xl">
      <nav>
        <a href="#home">{{ t('navigation.home') }}</a>
        <a href="#about">{{ t('navigation.about') }}</a>
        <a href="#contact">{{ t('navigation.contact') }}</a>
      </nav>
      <button>{{ t('common.submit') }}</button>
    </div>
    <div>
      <LanguageSwitcher />
      <h1>{{ t('welcome') }}</h1>
    </div>
  </section>

  <div class="flex justify-center h-screen overflow-x-hidden no-scrollbar">
    <section class="container flex justify-center bg-muted/20 w-full">
      <div class="content-container w-full max-w-full">
        <h2 class="text-2xl font-semibold mb-4">
          {{ t('home.carousel.title') }}
        </h2>

        <Card class="shadow-xl bg-card text-card-foreground w-full max-w-full">
          <EmblaCarousel />
          <CardHeader class="pb-4">
            <CardTitle class="text-2xl sm:text-3xl font-semibold text-center">
              {{ t('home.coverage.title') }}
            </CardTitle>
            <CardDescription class="mt-2 text-center max-w-2xl mx-auto text-muted-foreground">
              {{ t('home.coverage.subtitle') }}
            </CardDescription>
          </CardHeader>

          <CardContent class="p-6 pt-2 space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-accent p-5 rounded-lg text-accent-foreground">
                <h3 class="font-semibold text-lg mb-2">
                  {{ t('home.coverage.consultations.title') }}
                </h3>
                <ul class="space-y-1 text-sm list-disc list-inside pl-1">
                  <li>{{ t('home.coverage.consultations.items.0') }}</li>
                  <li>{{ t('home.coverage.consultations.items.1') }}</li>
                  <li>{{ t('home.coverage.consultations.items.2') }}</li>
                </ul>
              </div>
              <div class="bg-accent p-5 rounded-lg text-accent-foreground">
                <h3 class="font-semibold text-lg mb-2">
                  {{ t('home.coverage.additional.title') }}
                </h3>
                <ul class="space-y-1 text-sm list-disc list-inside pl-1">
                  <li>{{ t('home.coverage.additional.items.0') }}</li>
                  <li>{{ t('home.coverage.additional.items.1') }}</li>
                  <li>{{ t('home.coverage.additional.items.2') }}</li>
                </ul>
              </div>
            </div>
            <div class="text-center pt-4">
              <Button size="lg" variant="default">
                {{ t('home.coverage.cta') }}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import EmblaCarousel from '@/components/EmblaCarousel.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const { t } = useI18n()
</script>
