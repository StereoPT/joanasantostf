import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: () => import('../views/MainPage.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;