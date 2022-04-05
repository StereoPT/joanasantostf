import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: () => import('../pages/LandingPage.vue')
  },
  {
    path: '/marcacoes',
    name: 'marcacoes',
    component: () => import('../pages/Marcacoes.vue')
  },
  {
    path: '/loja',
    name: 'lojaTerapeuta',
    component: () => import('../pages/LojaTerapeuta.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;