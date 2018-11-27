<template>
  <v-container class="game-container" fluid>
    <LoadingGame v-if="!token || !game || gameStatus==='fetching' || !gameStatus" />
    <ShowScore   v-else-if="game.isFinished" />
    <PlayGame    v-else />
    <PostingPick v-if="gameStatus==='postingPick'" />
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import LoadingGame from '../components/LoadingGame.vue';
import PostingPick from '../components/PostingPick.vue';
import PlayGame from '../components/PlayGame.vue';
import ShowScore from '../components/ShowScore.vue';

export default {
  name: 'game',
  components: {LoadingGame, ShowScore, PostingPick, PlayGame},
  async created(){
    // if(!this.token){
    //   this.$router.replace({name: 'welcome'});
    // }
    if(!this.token){
      await this.registerGuest();
    }
    this.getGame();
  },
  computed: mapState(['game', 'gameStatus', 'token']),
  methods: {
    ...mapActions(['fetchOrCreateGame', 'registerGuest']),
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

.game-container {
  height: 100%;
}

h1, h2 {
  text-align: center;
}

h2 {
  font-size: 2em;
  font-weight: normal;
}

</style>
