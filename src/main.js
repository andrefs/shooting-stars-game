import '@babel/polyfill';
import Vue from 'vue';
import initAxios from './plugins/axios';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueGoodshare from 'vue-goodshare';

Vue.config.productionTip = false;

// Passing store to axios plugin allows it to get the
// token from the state (instead of reading it directly
// from the cookie, which would result in two sources of
// truth)
const axios = initAxios(store);

// Injecting axios into the store so we can make
// this.$axios requests inside store actions
store.$axios = axios;

new Vue({
  router,
  store,
  components: {
    VueGoodshare
  },
  render: h => h(App),
}).$mount('#app');

