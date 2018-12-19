import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';
import router from './router';


Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    gameStatus: '',
    game: {},
    bestScores: {},

    loginForm: {
      username: '',
      password: ''
    },
    registerForm: {
      username: '',
      password: ''
    },

    registerFormOpt: {
      topicKnowledge: '',
      birthYear: '',
      gender: '',
      email: ''
    },

    authStatus: '',
    token: '',
    user: null,

    hideTutorial: false,
    showItems: true,
    previousTurnOutcome: null,
    showLoadingSpinner: false
  },
  mutations: {
    showLoadingSpinner: state => {
      state.showLoadingSpinner = true;
    },
    hideLoadingSpinner: state => {
      state.showLoadingSpinner = false;
    },
    hideTutorial: state => {
      state.hideTutorial = true;
    },
    toggleTutorial: state => {
      state.hideTutorial = !state.hideTutorial;
    },
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

    updateRegisterFormOptGender: (state, gender) => {
      state.registerFormOpt.gender = gender;
    },
    updateRegisterFormOptEmail: (state, email) => {
      state.registerFormOpt.email = email;
    },
    updateRegisterFormOptTopicKnowledge: (state, topicKnowledge) => {
      state.registerFormOpt.topicKnowledge = topicKnowledge;
    },
    updateRegisterFormOptBirthYear: (state, birthYear) => {
      state.registerFormOpt.birthYear = birthYear;
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setUser: (state, user) => {
      state.user = user;
    },

    loginRequest: state => {
      state.authStatus = 'loggingIn';
      state.user = {};
    },
    loginSuccess: (state, {token, user}) => {
      state.authStatus = 'loggedIn';
      state.user = user;
      state.token = token;
    },
    loginFailure: state => {
      state.authStatus = 'loggingInFailed';
    },
    logout: state => {
      state.authStatus = '';
      state.user = null;
      state.token = '';
    },

    registerRequest: state => {
      state.authStatus = 'registering';
      state.token = null;
      state.user = {};
    },
    registerSuccess: (state, {token, user}) => {
      state.authStatus = 'loggedIn';
      state.user = user;
      state.token = token;
    },
    registerFailure: state => {
      state.authStatus = 'registeringFailed';
    },

    registerOptRequest: state => {
      state.registerOptStatus = 'registering';
    },
    registerOptSuccess: state => {
      state.registerOptStatus = 'success';
    },
    registerOptFailure: state => {
      state.registerOptStatus = 'failure';
    },

    registerGuestRequest: state => {
      state.authStatus = 'registering';
      state.user = {};
    },

    fetchOrCreateGameRequest: state => {
      state.gameStatus = 'fetching';
      state.game = null;
    },
    fetchGameRequest: state => {
      state.gameStatus = 'fetching';
      state.game = null;
    },
    fetchGameSuccess: (state, {game}) => {
      state.gameStatus = 'ok';
      state.game = game;
    },
    fetchGameFailure: state => {
      state.gameStatus = 'fetchingFailed';
      state.game = null;
    },
    fetchOrCreateGameFailure: state => {
      state.gameStatus = 'fetchingFailed';
      state.game = null;
    },

    createGameRequest: state => {
      state.gameStatus = 'creating';
      state.game = null;
    },
    createGameSuccess: (state, {game}) => {
      state.gameStatus = 'ok';
      state.game = game;
    },
    createGameFailure: state => {
      state.gameStatus = 'creatingFailed';
      state.game = null;
    },

    previousTurnWon: state => {
      state.previousTurnOutcome = 'won';
    },
    previousTurnLost: state => {
      state.previousTurnOutcome = 'lost';
    },
    clearPreviousTurnOutcome: state => {
      state.previousTurnOutcome = null;
    },
    postPickRequest: state => {
      state.gameStatus = 'postingPick';
      state.showItems = false;
    },
    postPickSuccess: (state, {game}) => {
      state.gameStatus = 'ok';
      state.game = game;
      state.showItems = true;
    },
    postPickFailure: state => {
      state.gameStatus = 'postPickFailed';
    },

    fetchBestScoresRequest: state => {
      state.bestScores = {};
    },
    fetchBestScoresSuccess: (state, {bestScores}) => {
      state.bestScores = bestScores;
    },
    fetchBestScoresFailure: state => {
      state.bestScores = {};
    },

  },
  actions: {

    // Login
    async login({dispatch, commit}, {fields}){
      commit('loginRequest');

      try {
        // Send credentials to API
        let response = await this.$axios.post('/auth/login', fields);
        console.log(response);
        const {token, user} = response.data;
        commit('loginSuccess', {token, user});
      } catch(error){
        commit('loginFailure', error);
        // dispatch something alert
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
        // TODO dispatch something alert

        throw error;
      }
    },

    // Register optional fields
    async registerOpt({dispatch, commit}, {fields}){
      commit('registerOptRequest');

      try {
        // Send credentials to API
        await this.$axios.patch('/user', fields);
        commit('registerOptSuccess');
      } catch(error){
        commit('registerOptFailure', error);
        // TODO dispatch something alert

        throw error;
      }
    },

    // Register guest
    async registerGuest({dispatch, commit}){
      commit('registerGuestRequest');

      try {
        // Send credentials to API
        let response = await this.$axios.post('/auth/registerGuest');
        const {token, user} = response.data;
        commit('registerSuccess', {token, user});
      } catch(error){
        commit('registerFailure', error);
        // TODO dispatch something alert

        throw error;
      }
    },

    async createGame({commit}){
      commit('createGameRequest');
      try {
        let response = await this.$axios.post('/gameInstances/current');
        const game = response.data;
        commit('createGameSuccess', {game});
      } catch(error){
        commit('createGameFailure', error);
        // Unauthorized
        if(error.response && error.response.status === 401){
          router.push({name: 'reset'});
          return;
        }

        // 404 might happen, it's ok
        if(error.response && error.response.status !== 404){
          const err = error.response.data.err.name;
          if(err === 'NoMoreItemsError'){
            router.push({name: 'finish'});
          } else {
          // TODO dispatch something alert
            throw error;
          }
        }
      }
    },

    async fetchGame({commit}){
      commit('fetchGameRequest');
      try {
        let response = await this.$axios.get('/gameInstances/current');
        const game = response.data;
        commit('fetchGameSuccess', {game});
      } catch(error){
        commit('fetchGameFailure', error);

        // Unauthorized
        if(error.response && error.response.status === 401){
          router.push({name: 'reset'});
          return;
        }

        // 404 might happen, it's ok
        if(error.response && error.response.status !== 404){
          // TODO dispatch something alert
          throw error;
        }
      }
    },

    async fetchOrCreateGame({commit, dispatch}){
      commit('fetchOrCreateGameRequest');
      try {
        let response = await this.$axios.get('/gameInstances/current');
        const game = response.data;
        if(game.isFinished){
          dispatch('createGame');
        } else {
          commit('fetchGameSuccess', {game});
        }
      } catch(error){
        // Unauthorized
        if(error.response && error.response.status === 401){
          router.push({name: 'reset'});
          return;
        }

        // there's no current game, we need to create it
        if(error.response && error.response.status !== 404){
          commit('fetchOrCreateGameFailure', error);
          throw error;
        }

        dispatch('createGame');
      }
    },

    async fetchBestScores({commit}){
      commit('fetchBestScoresRequest');
      try {
        let response = await this.$axios.get('/players/bestScores');
        const bestScores = response.data;
        commit('fetchBestScoresSuccess', {bestScores});
      } catch(error){
        commit('fetchBestScoresFailure', error);

        // 404 might happen, it's ok
        if(error.response && error.response.status !== 404){
          // TODO dispatch something alert
          throw error;
        }
      }
    },

    async postPick({commit}, {turnNumber, pick}){
      commit('postPickRequest');
      try {
        let response = await this.$axios.post(`/gameInstances/current/${turnNumber}/${pick}`);
        const game = response.data;
        const previousTurn = game.turns.previous.slice(-1)[0];
        if(previousTurn){
          if(previousTurn.score.player === 0){
            commit('previousTurnLost');
          } else {
            commit('previousTurnWon');
          }
          setTimeout(() => {
            commit('postPickSuccess', {game});
          }, 500);
          setTimeout(() => {
            commit('clearPreviousTurnOutcome');
          }, 1000);
        }
      } catch(error){
        commit('postPickFailure', error);

        // 404 might happen, it's ok
        if(error.response && error.response.status !== 404){
          // TODO dispatch something alert
          throw error;
        }
      }
    },

    // async getTriples(...args){
    //   try {
    //     // Send credentials to API
    //     let response = await this.$axios.get('/triples');
    //   } catch(error){
    //     if(error.response && error.response.status === 401){
    //       throw new Error('Bad credentials');
    //     }
    //     throw error;
    //   }
    // },
  },
  plugins: [
    createPersistedState({
      paths: ['token', 'authStatus', 'hideTutorial', 'user'],
      getState: key => Cookie.getJSON(key),
      setState: (key, state) => Cookie.set(key, state, {expires: 1, secure: false})
    })
  ]
});


export default store;
