import { createRouter, createWebHashHistory } from 'vue-router';

import { mof } from '../assets/mof';
import { outros } from '../assets/outros';

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
    component: () => import('../pages/LojaTerapeuta.vue'),
  },
  {
    path: '/loja/mof',
    name: 'loja.mof',
    component: () => import('../pages/Loja.vue'),
    props: {
      title: 'Materiais MOF',
      materiais: mof
    }
  },
  {
    path: '/loja/outros',
    name: 'loja.outros',
    component: () => import('../pages/Loja.vue'),
    props: {
      title: 'Outros Materiais',
      materiais: outros
    }
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: () => import('../pages/Stocks.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;