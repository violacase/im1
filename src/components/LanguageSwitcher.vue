<template>
  <div class="language-switcher">
    <button @click="toggleLocale" class="language-btn">
      {{ t('language.switch') }}
    </button>
    <div class="current-language">
      {{ getLanguageLabel(currentLocale as MessageLanguages) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import type { MessageLanguages } from '../i18n'

const { currentLocale, toggleLocale, getLanguageLabel, t } = useLocale()
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.language-btn:hover {
  background-color: #0056b3;
}

.current-language {
  font-size: 14px;
  color: #666;
}
</style>
