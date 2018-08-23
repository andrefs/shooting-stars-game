import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';
import Api from './services/Api';
let api = Api();

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    loginForm: {
      username: '',
      password: ''
    },
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
    setToken: (state, token) => {
      state.token = token;
    },
    setUser: (state, user) => {
      state.user = user;
    }
  },
  actions: {
    // Login
    async login({commit}, {fields}){
      try {
        // Send credentials to API
        let response = await api.post('/auth/register', fields);
        const {token, user} = response.data;
        commit('setToken', token);
        commit('setUser', user);
      } catch(error){
        if(error.response && error.response.status === 401){
          throw new Error('Bad credentials');
        }
        throw error;
      }
    },

    // Login
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
      getState: (key) => Cookie.getJSON(key),
      setState: (key, state) => Cookie.set(key, state, { expires: 1, secure: false })
    })
  ]
});


export default store;
