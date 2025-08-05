import { createRouter, createWebHistory } from 'vue-router'

// Import all page components
import HomePage from '@/pages/homePage.vue'
import AboutPage from '@/pages/aboutPage.vue'
import SetupPage from '@/pages/setupPage.vue'
import AardigeDemo from '@/pages/aardigeDemo.vue'

const routes = [
  {
    path: '/',
    redirect: '/homePage'
  },
  {
    path: '/homePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/aboutPage',
    name: 'AboutPage', 
    component: AboutPage
  },
  {
    path: '/setupPage',
    name: 'SetupPage',
    component: SetupPage
  },
  {
    path: '/aardigeDemo',
    name: 'AardigeDemo',
    component: AardigeDemo
  },
  // Catch-all 404 route
  {
    path: '/:pathMatch(.*)*',
    redirect: '/homePage'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
