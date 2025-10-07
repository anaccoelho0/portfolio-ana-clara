import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
const SobreMimView = () => import('@/views/SobreMimView.vue'); 
const ProjetosView = () => import('@/views/ProjetosView.vue');
const ContatoView = () => import('@/views/ContatoView.vue');

const routes = [
  {
    path: '/',
    name: 'Home', 
    component: HomeView,
    meta: { title: 'Ana Clara | Desenvolvedora & UX' }
  },
  {
    path: '/sobre',
    name: 'SobreMim', /
    component: SobreMimView,
    meta: { title: 'Ana Clara | Sobre Mim' }
  },
  {
    path: '/projetos',
    name: 'Projetos', 
    component: ProjetosView,
    meta: { title: 'Ana Clara | Projetos' }
  },
  {
    path: '/contato',
    name: 'Contato', 
    component: ContatoView,
    meta: { title: 'Ana Clara | Contato' }
  },
];

const router = createRouter({
  history: createWebHistory,
  routes,
  
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
