import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: () => import('../pages/LandingPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;