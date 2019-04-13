import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Admin from '../pages/Admin.vue';
import Reservas from '../pages/Reservas.vue';
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
      path: '/listaProductos',
      name: 'home',
      component: Reservas,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    }
  ],
});
