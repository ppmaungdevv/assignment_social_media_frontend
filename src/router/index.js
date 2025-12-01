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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  const isAuthenticated = localStorage.getItem('auth_token'); 

  if (requiresAuth && !isAuthenticated) {
    next({ 
      name: 'auth', 
      query: { redirect: to.fullPath }
    });
  } else {
    next(); 
  }
});

export default router
