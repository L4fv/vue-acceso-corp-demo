import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Profile from '../pages/Profile.vue';

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
      path: '/perfil',
      name: 'profile',
      component: Profile,
    },
  ],
});
