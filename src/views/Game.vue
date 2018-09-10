<template>
  <v-container class="game-container" fill-height fluid>
    <LoadingGame v-if="!token || !game || gameStatus==='fetching'" />
    <ShowScore   v-else-if="game.isFinished" />
    <PlayGame    v-else />
    <PostingPick v-if="gameStatus==='postingPick'" />
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import LoadingGame from '../components/LoadingGame.vue';
import PostingPick from '../components/PostingPick.vue';
import ChooseNext from '../components/ChooseNext.vue';
import PlayGame from '../components/PlayGame.vue';
import ShowScore from '../components/ShowScore.vue';

export default {
  name: 'game',
  components: {LoadingGame, ChooseNext, ShowScore, PostingPick, PlayGame},
  created(){
    if(!this.token){
      this.$router.replace({name: 'welcome'});
    } else {
      this.getGame();
    }
  },
  computed: mapState(['game', 'gameStatus', 'token']),
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

html, body, .application, #shooting-stars, #shooting-stars .v-jumbotron h3 {
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
