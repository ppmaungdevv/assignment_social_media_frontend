import MainLayout from '../../layouts/MainLayout.vue';
import Home from '../../pages/Home.vue';
import Profile from '../../pages/Profile.vue';

const mainRoutes = {
  path: '/',
  component: MainLayout,
  children: [
    {
      path: '', // Renders at the root path: /
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true }
    }
    // {
    //   path: 'about',
    //   name: 'About',
    //   component: () => import('../../views/AboutView.vue'), // Lazy loading example
    // },
  ],
};

export default mainRoutes;