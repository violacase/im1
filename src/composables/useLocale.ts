import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import type { MessageLanguages } from '../i18n'

export const useLocale = () => {
  const { locale, t, availableLocales } = useI18n()

  const currentLocale = computed(() => locale.value)

  const setLocale = (newLocale: MessageLanguages): void => {
    if (availableLocales.includes(newLocale)) {
      locale.value = newLocale
      localStorage.setItem('user-locale', newLocale)

      // Update HTML lang attribute for accessibility
      document.documentElement.lang = newLocale
    }
  }

  const toggleLocale = (): void => {
    const newLocale: MessageLanguages = locale.value === 'en' ? 'nl' : 'en'
    setLocale(newLocale)
  }

  const getLanguageLabel = (lang: MessageLanguages): string => {
    const labels = {
      en: t('language.english'),
      nl: t('language.dutch'),
    }
    return labels[lang]
  }

  // Watch for locale changes and update document lang
  watch(
    currentLocale,
    (newLocale) => {
      document.documentElement.lang = newLocale
    },
    { immediate: true },
  )

  return {
    currentLocale,
    setLocale,
    toggleLocale,
    getLanguageLabel,
    t,
  }
}
