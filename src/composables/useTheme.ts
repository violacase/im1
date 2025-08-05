import { ref, watch } from 'vue'
import { THEME_CONFIG, type ThemeValue } from '@/config/theme'

// Custom theme management that respects 'system' choice properly
export function useTheme() {
  // Get initial theme from localStorage or default to system
  const getInitialTheme = (): ThemeValue => {
    if (typeof window === 'undefined') return THEME_CONFIG.defaultTheme as ThemeValue

    const stored = localStorage.getItem('theme')

    // Migration: if 'system' is stored, remove it and treat as no preference
    if (stored === 'system') {
      localStorage.removeItem('theme')
      return 'system'
    }

    if (!stored) return 'system' // No localStorage = system preference

    return stored as ThemeValue
  }

  const currentTheme = ref<ThemeValue>(getInitialTheme())

  // Apply theme to document
  const applyTheme = (theme: ThemeValue) => {
    if (typeof window === 'undefined') return

    const html = document.documentElement

    // Remove all theme classes
    html.classList.remove(
      'light',
      'dark',
      'darkblue',
      'mediumgreen',
      'brown',
      'redish',
      'darkorange',
      'lightorange',
    )

    if (theme === 'system') {
      // Use system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      html.classList.add(systemTheme)
    } else {
      html.classList.add(theme)
    }
  }

  // Set theme with proper localStorage handling
  const setTheme = (theme: ThemeValue) => {
    currentTheme.value = theme

    if (theme === 'system') {
      // Remove from localStorage when user chooses system
      localStorage.removeItem('theme')
    } else {
      // Store non-system themes
      localStorage.setItem('theme', theme)
    }

    applyTheme(theme)
  }

  // Watch for theme changes and apply them
  watch(currentTheme, applyTheme, { immediate: true })

  // Listen for system theme changes when current theme is 'system'
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', () => {
      if (currentTheme.value === 'system') {
        applyTheme('system') // Re-apply to pick up system change
      }
    })
  }

  return {
    currentTheme,
    setTheme,
    themes: THEME_CONFIG.themes,
  }
}
