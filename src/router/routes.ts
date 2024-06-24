import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/HomePage.vue') },
      { path: '/', name: 'HomePag', component: () => import('pages/HomePage.vue') },
      { path: '/Agenda', name: 'Agenda', component: () => import('pages/Agenda.vue') },
      { path: '/CadastroClientes', name: 'CadastroClientes', component: () => import('pages/CadastroClientes.vue') },
      { path: '/Financeiro', name: 'Financeiro', component: () => import('pages/Financeiro.vue') },
      { path: '/ControleAcessos', name: 'ControleAcessos', component: () => import('pages/ControleAcessos.vue') },
      { path: '/test', name: 'test', component: () => import('pages/Teste.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoadingLayout.vue'),
    children: [
      { path: '/login', name: 'login', component: () => import('src/pages/LoginPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
