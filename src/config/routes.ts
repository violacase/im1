import { Home, Settings, Info, Flower, Projector, Camera } from 'lucide-vue-next'
import type { Component } from 'vue'

// Import all page components
import PageHome from '@/pages/pageHome.vue'
import PageAbout from '@/pages/pageAbout.vue'
import PageCandles from '@/pages/pageCandles.vue'
import PageEmbla1 from '@/pages/pageEmbla1.vue'
import PageEmbla2 from '@/pages/pageEmbla2.vue'
import PageDemo from '@/pages/pageDemo.vue'

export interface RouteConfig {
  path: string
  name: string
  component: Component
  label: string
  title: string // Browser page title
  icon: Component
  badge?: string | null
  showInNav: boolean
}

export const routeConfigs: RouteConfig[] = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome,
    label: 'Home',
    title: 'IM-Jurr | Home',
    icon: Home,
    badge: null,
    showInNav: true,
  },
  {
    path: '/about',
    name: 'PageAbout',
    component: PageAbout,
    label: 'About',
    title: 'IM-Jurr | About',
    icon: Info,
    badge: null,
    showInNav: true,
  },
  {
    path: '/candles',
    name: 'In Memoriam Jurriaan',
    component: PageCandles,
    label: 'Candles',
    title: 'IM-Jurr | In Loving Memory',
    icon: Flower,
    badge: null,
    showInNav: true,
  },
  {
    path: '/embla1',
    name: 'PageEmbla1',
    component: PageEmbla1,
    label: 'Embla 1',
    title: 'IM-Jurr | Carousel 1',
    icon: Projector,
    badge: 'New!',
    showInNav: true,
  },
  {
    path: '/embla2',
    name: 'PageEmbla2',
    component: PageEmbla2,
    label: 'Embla 2',
    title: 'IM-Jurr | Carousel 2',
    icon: Camera,
    badge: 'New!',
    showInNav: true,
  },
  {
    path: '/demo',
    name: 'PageDemo',
    component: PageDemo,
    label: 'Demo',
    title: 'IM-Jurr | Demo',
    icon: Settings,
    badge: null,
    showInNav: true,
  },
]

// Helper to get navigation items
export const getNavItems = () => {
  return routeConfigs
    .filter((route) => route.showInNav)
    .map((route) => ({
      label: route.label,
      href: route.path,
      icon: route.icon,
      badge: route.badge,
    }))
}

// Helper to get router routes
export const getRouterRoutes = () => {
  return routeConfigs.map((route) => ({
    path: route.path,
    name: route.name,
    component: route.component,
    meta: {
      title: route.title,
    },
  }))
}
