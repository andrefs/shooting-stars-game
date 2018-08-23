import '@babel/polyfill';
import Vue from 'vue';
import initAxios from './plugins/axios';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

// Passing store to axios plugin allows it to get the
// token from the state (instead of reading it directly
// from the cookie, which would result in two sources of
// truth)
initAxios(store);

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

// Injecting axios into the store so we can make
// this.$axios requests inside store actions
store.$axios = app.$axios;

