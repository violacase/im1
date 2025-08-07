import { createRouter, createWebHistory } from 'vue-router'
import { getRouterRoutes } from '@/config/routes'

const routes = [
  ...getRouterRoutes(),
  // Catch-all 404 route
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Global navigation guard to set page titles
router.beforeEach((to) => {
  // Set the page title from route meta, with fallback
  const title = (to.meta?.title as string) || 'My Website'
  document.title = title
})

export default router
