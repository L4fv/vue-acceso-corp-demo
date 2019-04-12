import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Hola from '../pages/Hola.vue';
import Admin from '../pages/Admin.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/proyecto',
      name: 'home',
      component: Hola,
    },
    {
      path: '/admin',
      name: 'home',
      component: Admin,
    }
  ],
});
