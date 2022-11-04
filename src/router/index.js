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
    path: '/loja/mof/material',
    name: 'loja.mof.ref',
    component: () => import('../pages/DetailsPage.vue'),
    props: {
      material: Object
    }
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: () => import('../pages/Carrinho.vue')
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