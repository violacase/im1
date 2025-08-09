import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import nl from '../locales/nl.json'

export type MessageLanguages = 'en' | 'nl'

export type MessageSchema = typeof en

const messages = {
  en,
  nl,
}

const i18n = createI18n<[MessageSchema], MessageLanguages>({
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages,
  legacy: false, // use Composition API mode
})

export default i18n
