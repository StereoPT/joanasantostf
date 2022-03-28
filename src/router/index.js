import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'mainView',
    component: () => import('../views/MainView.vue'),
    children: [
      {
        path: '',
        name: 'mainView.landingPage',
        component: () => import('../pages/LandingPage.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;