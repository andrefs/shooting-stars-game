import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Game from './views/Game.vue';
import DefaultTopBar from './components/DefaultTopBar';
import GameTopBar from './components/GameTopBar';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import Register from './views/Register.vue';
import Finish from './views/Finish.vue';
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
      components: {
        default: Game,
        navigation: GameTopBar
      },
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login,
        navigation: DefaultTopBar
      }
    },
    {
      path: '/logout',
      name: 'logout',
      components: {
        default: Logout,
        navigation: DefaultTopBar
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: Register,
        navigation: DefaultTopBar
      }
    },
    {
      path: '/finish',
      name: 'finish',
      components: {
        default: Finish,
        navigation: DefaultTopBar
      }
    },
    {
      path: '*',
      components: {
        default: NotFoundComponent,
        navigation: DefaultTopBar
      }
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
