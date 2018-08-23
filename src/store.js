import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    loginForm: {
      username: '',
      password: ''
    },
    registerForm: {
      username: '',
      password: ''
    },
    status: {},
    token: '',
    user: null
  },
  mutations: {
    updateLoginFormUsername: (state, username) => {
      state.loginForm.username = username;
    },
    updateLoginFormPassword: (state, password) => {
      state.loginForm.password = password;
    },
    updateRegisterFormUsername: (state, username) => {
      state.registerForm.username = username;
    },
    updateRegisterFormPassword: (state, password) => {
      state.registerForm.password = password;
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setUser: (state, user) => {
      state.user = user;
    },

    loginRequest: state => {
      state.status = { loggingIn: true };
      state.user = {};
    },
    loginSuccess: (state, {token, user}) => {
      state.status = { loggedIn: true };
      state.user = user;
      state.token = token;
    },
    loginFailure: state => {
      state.status = {};
      state.user = null;
      state.token = '';
    },
    logout: state => {
      state.status = {};
      state.user = null;
      state.token = '';
    },

    registerRequest: state => {
      state.status = { registering: true };
      state.user = {};
    },
    registerSuccess: (state, {token, user}) => {
      state.status = { registered: true };
      state.user = user;
      state.token = token;
    },
    registerFailure: state => {
      state.status = {};
      state.user = null;
      state.token = '';
    },
  },
  actions: {
    // Login
    async login({dispatch, commit}, {fields}){
      commit('loginRequest');

      try {
        // Send credentials to API
        let response = await this.$axios.post('/auth/login', fields);
        const {token, user} = response.data;
        commit('loginSuccess', {token, user});
      } catch(error){
        commit('loginFailure', error);
        // dispatch something alert

        if(error.response && error.response.status === 401){
          throw new Error('Bad credentials');
        }
        throw error;
      }
    },

    // Register
    async register({dispatch, commit}, {fields}){
      commit('registerRequest');

      try {
        // Send credentials to API
        let response = await this.$axios.post('/auth/register', fields);
        const {token, user} = response.data;
        commit('registerSuccess', {token, user});
      } catch(error){
        commit('registerFailure', error);
        // dispatch something alert

        throw error;
      }
    },


    async getTriples(...args){
      console.log('XXXXXXXXXXXXXXXXXXXx getTriples args', args);
      console.log('XXXXXXXXXXXXXXXXXXXx getTriples this', this);
      try {
        // Send credentials to API
        let response = await this.$axios.get('/triples');
        console.log('XXXXXXXXXXXXXXXXX getTriples response', response);
      } catch(error){
        if(error.response && error.response.status === 401){
          throw new Error('Bad credentials');
        }
        throw error;
      }
    },
  },
  plugins: [
    createPersistedState({
      paths: ['token'],
      getState: key => Cookie.getJSON(key),
      setState: (key, state) => Cookie.set(key, state, { expires: 1, secure: false })
    })
  ]
});


export default store;
