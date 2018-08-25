<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <LoadingGame v-if="gameStatus==='fetching'" />
        <ChooseNext  v-else-if="!game" />
        <ShowScore   v-else-if="game.isFinished" />
        <PlayGame    v-else />
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import LoadingGame from '../components/LoadingGame.vue';
import ChooseNext from '../components/ChooseNext.vue';
import PlayGame from '../components/PlayGame.vue';
import ShowScore from '../components/ShowScore.vue';

export default {
  name: 'game',
  components: {LoadingGame, ChooseNext, PlayGame, ShowScore},
  created(){
    this.getGame();
  },
  computed: mapState(['game', 'gameStatus']),
  methods: {
    ...mapActions(['fetchOrCreateGame']),
    getGame(){
      this.fetchOrCreateGame();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister');

html, body, .application {
  font-family: 'Love Ya Like A Sister', cursive;
}

h1, h2 {
  text-align: center;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
  font-weight: normal;
}

</style>
