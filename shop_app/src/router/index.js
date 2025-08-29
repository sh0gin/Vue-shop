import AppProducts from '../AppProducts.vue';
import AppLogin from '../AppLogin.vue';
import AppRegister from '../AppRegister.vue';

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/login', component: AppLogin, alias: "/"},
    {path: '/register', component: AppRegister},
    {path: '/products', component: AppProducts}
  ],
  linkActiveClass: 'active',
  // linkExactActiveClass: 'active'
  
})

export default router
