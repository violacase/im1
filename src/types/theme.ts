// Theme configuration
export const THEME_CONFIG = {
  // Set your preferred default theme here
  // Options: 'system', 'light', 'dark', 'darkblue', 'mediumgreen', 'brown', 'redish', 'darkorange', 'lightorange'
  defaultTheme: 'brown',

  // Available themes
  themes: [
    { label: 'Systeem', value: 'system' },
    { label: 'Licht', value: 'light' },
    { label: 'Donker', value: 'dark' },
    { label: 'Blauw', value: 'darkblue' },
    { label: 'Groen', value: 'mediumgreen' },
    { label: 'Bruin', value: 'brown' },
    { label: 'Roodachtig', value: 'redish' },
    { label: 'Donker Oranje', value: 'darkorange' },
    { label: 'Licht Oranje', value: 'lightorange' },
  ] as const,
}

export type ThemeValue = (typeof THEME_CONFIG.themes)[number]['value']
