import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import authRoutes from './routes/auth-routes.js'
import mainRoutes from './routes/main-routes.js';

const routes = [
  authRoutes,
  mainRoutes,
  { 
    path: '/:catchAll(.*)', 
    name: 'NotFound', 
    redirect: '/' // Simple redirect to home
    // component: NotFoundView // Or a dedicated 404 component
  }
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
})

export default router
