import { createRouter, createWebHashHistory } from 'vue-router';

import { mof } from '../assets/mof';

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
    name: 'loja',
    component: () => import('../pages/Loja.vue'),
    props: {
      materiais: mof
    }
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: () => import('../pages/Carrinho.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;