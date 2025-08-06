import { createRouter, createWebHistory } from 'vue-router'

// Import all page components
import HomePage from '@/pages/homePage.vue'
import AboutPage from '@/pages/aboutPage.vue'
import InMemoriam from '@/pages/in-memoriam.vue'
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
    path: '/in-memoriam',
    name: 'InMemoriam',
    component: InMemoriam,
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
