# Assets Directory

This directory contains static assets for the application:

- `images/` - Image files (PNG, JPG, SVG, etc.)
- `icons/` - Icon files and custom SVG icons
- `css/` - CSS and styling files
- Other static assets like fonts, documents, etc.

## Usage

You can import assets using:

```js
import logo from '@/assets/images/logo.png'
import icon from '@/assets/icons/custom-icon.svg'
import '@/assets/css/components.css'
```

## CSS Organization

- `main.css` - Main stylesheet with Tailwind imports and theme
- Component-specific CSS files can be added here
- Consider organizing by feature: `components/`, `pages/`, `utilities/`

## Public vs Assets

- Use `src/assets/` for assets that need to be processed by Vite (imported in components)
- Use `public/` for assets that should be served as-is (referenced by absolute path)
