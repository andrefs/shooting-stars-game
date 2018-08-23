<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <LoadingGame v-if="gameStatus==='fetching'" />
        <ChooseNext  v-else-if="!game" />
        <ShowScore   v-else-if="game.isFinished" />
        <PlayGame    v-else />
        <button v-on:click="apiCall">API call</button>
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
    ...mapActions(['fetchGame']),
    async apiCall(){
      // try {
      //   await this.$store.dispatch('getTriples');
      // } catch(e){
      //   // TODO error handling
      //   console.log('XXXXXXXXXXXXXXXXXXX err 1', e);
      // }
    },
    getGame(){
      this.fetchGame();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister');

html, body {
  font-family: 'Love Ya Like A Sister', cursive;
}

/**********
* LABELS *
**********/

div.labels {
  width: 100%;
  position: relative;
  top: -15%;
}
.label {
  font-weight: normal;
  width: 120px;
  z-index: -1;

  text-align: center;
  margin: 10px;
  min-height: 60px;
  font-size: 30px;
}
.label.left {
  position: absolute;
  left: 12%;
}
.label.center {
  position: absolute;
  left: 50%;
  margin-left: -60px;
  margin-top: -4%;
}
.label.right {
  position: absolute;
  right: 12%;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
