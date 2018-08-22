import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginForm: {
      username: '',
      password: ''
    }
  },
  mutations: {
    updateLoginFormUsername: (state, username) => {
      state.loginForm.username = username;
    },
    updateLoginFormPassword: (state, password) => {
      state.loginForm.password = password;
    }
  },
  actions: {
    postLogin({username, password}){
      console.log('XXXXXXXXXXXXXX postLogin', {username, password});
      return this.$http({
          url: 'http://localhost:15111/login',
          method: 'POST'
      })
        .then(response => console.log('XXXXXXXXXXXXXX response', response));
    }

  },
});
