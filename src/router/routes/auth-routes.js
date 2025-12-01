// src/router/modules/auth.js
import AuthLayout from '../../layouts/AuthLayout.vue';
import Auth from '../../pages/Auth.vue';
// import LoginView from '../../views/LoginView.vue';

const authRoutes = {
  path: '/auth',
  component: AuthLayout,
  children: [
    {
      path: 'auth',
      name: 'auth',
      component: Auth,
    },
    // {
    //   path: 'login',
    //   name: 'Login',
    //   component: LoginView,
    // },
  ],
};

export default authRoutes;