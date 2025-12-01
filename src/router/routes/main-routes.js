import MainLayout from '../../layouts/MainLayout.vue';
import Home from '../../pages/Home.vue';

const mainRoutes = {
  path: '/',
  component: MainLayout,
  children: [
    {
      path: '', // Renders at the root path: /
      name: 'Home',
      component: Home,
    },
    // {
    //   path: 'about',
    //   name: 'About',
    //   component: () => import('../../views/AboutView.vue'), // Lazy loading example
    // },
  ],
};

export default mainRoutes;