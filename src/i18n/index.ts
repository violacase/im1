import { createI18n } from 'vue-i18n'

// Import common translations
import commonEn from '../locales/en.json'
import commonNl from '../locales/nl.json'

// Import route-specific translations
import routesEn from '../locales/routes/en.json'
import routesNl from '../locales/routes/nl.json'

// Import page-specific translations
import demoEn from '../locales/pages/demo/en.json'
import demoNl from '../locales/pages/demo/nl.json'
import aboutEn from '../locales/pages/about/en.json'
import aboutNl from '../locales/pages/about/nl.json'
import homeEn from '../locales/pages/home/en.json'
import homeNl from '../locales/pages/home/nl.json'

export type MessageLanguages = 'en' | 'nl'

// Merge translations
const en = {
  ...commonEn,
  ...routesEn,
  ...demoEn,
  ...aboutEn,
  ...homeEn,
}

const nl = {
  ...commonNl,
  ...routesNl,
  ...demoNl,
  ...aboutNl,
  ...homeNl,
}

export type MessageSchema = typeof en

const messages = {
  en,
  nl,
}

// Get saved locale or default to 'en'
const getSavedLocale = (): MessageLanguages => {
  const saved = localStorage.getItem('user-locale') as MessageLanguages
  return saved && ['en', 'nl'].includes(saved) ? saved : 'en'
}

const i18n = createI18n<[MessageSchema], MessageLanguages>({
  locale: getSavedLocale(),
  fallbackLocale: 'en',
  messages,
  legacy: false,
})

export default i18n
