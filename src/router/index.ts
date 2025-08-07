import { createRouter, createWebHistory } from 'vue-router'

// Import all page components
import HomePage from '@/pages/homePage.vue'
import AboutPage from '@/pages/aboutPage.vue'
import IMpage from '@/pages/IMpage.vue'
import EmblaDemo from '@/pages/emblaDemo.vue'
import SetupPage from '@/pages/setupPage.vue'
import AardigeDemo from '@/pages/aardigeDemo.vue'
import Embla3Page from '@/pages/embla3Page.vue'

const routes = [
  {
    path: '/',
    redirect: '/homePage',
  },
  {
    path: '/homePage',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/aboutPage',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/IMpage',
    name: 'IMpage',
    component: IMpage,
  },
  {
    path: '/emblaDemo',
    name: 'EmblaDemo',
    component: EmblaDemo,
  },
  {
    path: '/embla3Page',
    name: 'Embla3Page',
    component: Embla3Page,
  },
  {
    path: '/setupPage',
    name: 'SetupPage',
    component: SetupPage,
  },
  {
    path: '/aardigeDemo',
    name: 'AardigeDemo',
    component: AardigeDemo,
  },
  // Catch-all 404 route
  {
    path: '/:pathMatch(.*)*',
    redirect: '/homePage',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
