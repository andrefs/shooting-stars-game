<template>
  <v-app id="shooting-stars">
    <router-view name="navigation"></router-view>
    <v-content id="app-content" style="padding: 7vh 0px 9vh 0;">
      <router-view/>
    </v-content>
    <!--v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer -->
    <v-tour name="game-tour" :steps="steps" :callbacks="tourCallbacks"></v-tour>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'App',
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
      steps: [
        {
          target: '[data-v-step="1"]',
          content: '<span class="gold">Who is the intruder?</span> Which of these 3 artists is <span class="gold">the least related</span> with the other two?',
          params: {
            placement: 'bottom'
          }
        }, {
          target: '[data-v-step="2"]',
          content: 'Each game is played in <span class="gold">10 rounds.</span>',
          params: {
            placement: 'left'
          }
        }, {
          target: '[data-v-step="3"]',
          content: '<span class="gold">If your opinion matches at least one of the other two players, you score!</span> So, it\'s not really about your opinion but whether you can guess other people\'s opinions!',
          params: {
            placement: 'bottom'
          }
        }, {
          target: '[data-v-step="1"]',
          content: '<span class="gold">Click or tap on the intruder to select it!</span>',
          params: {
            placement: 'bottom'
          }
        }, {
          target: '[data-v-step="5"]',
          content: 'You can <span class="gold">activate this tutorial</span> again by clicking the <span class="gold"><i aria-hidden="true" class="v-icon material-icons">help_outline</i> Show tutorial</span> button at any time.',
          params: {
            placement: 'bottom'
          }
        }, {
          target: '[data-v-step="5"]',
          content: 'You can <span class="gold">enter a fullscreen mode</span> by clicking the <span class="gold"><i aria-hidden="true" class="v-icon material-icons">fullscreen</i> View fullscreen</span> button at any time.',
          params: {
            placement: 'bottom'
          }
        }
      ],
      tourCallbacks: {
        onStop: () => {
          this.hideTutorial();
        },
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Shooting Stars'
    };
  },
  methods: {
    ...mapActions(['toggleTutorial']),
    hideTutorial(){
      this.$store.commit('hideTutorial');
    },
  },
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
  display: flex;
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

span.gold {
  color: #FFCC00;
  font-weight: bold;
}

footer img:focus , footer a:focus { outline: none; }
</style>
