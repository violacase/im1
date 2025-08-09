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
  labelKey: string // Translation key instead of hardcoded label
  titleKey: string // Translation key instead of hardcoded title
  icon: Component
  badgeKey?: string | null // Translation key for badge
  showInNav: boolean
}

export const routeConfigs: RouteConfig[] = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome,
    labelKey: 'routes.home.label',
    titleKey: 'routes.home.title',
    icon: Home,
    badgeKey: null,
    showInNav: true,
  },
  {
    path: '/about',
    name: 'PageAbout',
    component: PageAbout,
    labelKey: 'routes.about.label',
    titleKey: 'routes.about.title',
    icon: Info,
    badgeKey: null,
    showInNav: true,
  },
  {
    path: '/candles',
    name: 'In Memoriam Jurriaan',
    component: PageCandles,
    labelKey: 'routes.candles.label',
    titleKey: 'routes.candles.title',
    icon: Flower,
    badgeKey: null,
    showInNav: true,
  },
  {
    path: '/embla1',
    name: 'PageEmbla1',
    component: PageEmbla1,
    labelKey: 'routes.embla1.label',
    titleKey: 'routes.embla1.title',
    icon: Projector,
    badgeKey: 'badges.new',
    showInNav: true,
  },
  {
    path: '/embla2',
    name: 'PageEmbla2',
    component: PageEmbla2,
    labelKey: 'routes.embla2.label',
    titleKey: 'routes.embla2.title',
    icon: Camera,
    badgeKey: 'badges.new',
    showInNav: true,
  },
  {
    path: '/demo',
    name: 'PageDemo',
    component: PageDemo,
    labelKey: 'routes.demo.label',
    titleKey: 'routes.demo.title',
    icon: Settings,
    badgeKey: null,
    showInNav: true,
  },
]

// Helper to get router routes (this one doesn't need translations at build time)
export const getRouterRoutes = () => {
  return routeConfigs.map((route) => ({
    path: route.path,
    name: route.name,
    component: route.component,
    meta: {
      titleKey: route.titleKey, // Store the key, translate in component
    },
  }))
}
