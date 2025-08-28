import AppLogin from '../AppLogin.vue';
import AppRegister from '../AppRegister.vue';

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/login', component: AppLogin, alias: "/"},
    {path: '/register', component: AppRegister}
  ],
})

export default router
