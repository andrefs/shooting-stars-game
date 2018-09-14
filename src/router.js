import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Game from './views/Game.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import NotFoundComponent from './components/NotFoundComponent';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'welcome',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Welcome.vue'),
    // },
    {
      // path: '/game',
      path: '/',
      name: 'game',
      component: Game,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '*',
      component: NotFoundComponent
    }

    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
