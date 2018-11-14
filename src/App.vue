<template>
  <v-app id="shooting-stars">
    <TopBar :showHelp="showHelp"/>
    <v-content id="app-content">
      <router-view/>
    </v-content>
    <!--v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer -->
    <v-tour name="game-tour" :steps="steps" :callbacks="tourCallbacks"></v-tour>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';
import {mapActions, mapState} from 'vuex';

export default {
  name: 'App',
  components: {TopBar},
  data(){
    return {
      show: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      steps: [{
          target: '[data-v-step="1"]',
          content: 'Who is the intruder? Can you guess which musical artist is the least related with the other two?',
          params: {
            placement: 'right'
          }
        }, {
          target: '[data-v-step="2"]',
          content: 'Each game is played in 10 rounds.',
          params: {
            placement: 'left'
          }
        }, {
          target: '[data-v-step="3"]',
          content: 'If your opinion matches at least one of the other two players, you score. So, it\'s not really about your opinion but whether <b>you can guess other people\'s opinions</b>!',
          params: {
            placement: 'bottom'
          }
        }, {
          target: '[data-v-step="4"]',
          content: 'You can activate this tutorial again by clicking here at any time.',
          params: {
            placement: 'bottom'
          }
      }],
      tourCallbacks: {
        onStop: () => {
          this.toggleTutorial();
        },
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  },
  methods: {
    ...mapActions(['toggleTutorial']),
    toggleTutorial(){
      this.$store.commit('toggleTutorial');
    },
  },
  computed: mapState(['showHelp'])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

html { font-size: calc(1em + 1vw); }


#shooting-stars {
  background-color: white;
}

#app-content {
  height: 100vh;
}

footer { text-align: center; }

footer p {
  color: #888;
  font-size: 13px;
  letter-spacing: .4px;
}

footer a {
  color: #4a89dc;
  text-decoration: none;
  transition: all .2s ease;
}

footer a:hover {
  color: #666;
  text-decoration: underline;
}

footer img {
  width: 80px;
  transition: all .2s ease;
}

footer img:hover { opacity: .83; }

footer img:focus , footer a:focus { outline: none; }
</style>
