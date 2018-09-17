<template>
  <v-layout class="parent-layout">
    <TitleBar />
    <v-layout row wrap class="scores-layout">
      <v-flex class="score-flex" mx-2>
        <GenericScoreBoard
          title="This game"
          :players="thisGame"
          :columnHeaders="true" />
      </v-flex>
      <v-flex class="score-flex" mx-2>
        <GenericScoreBoard
          title="Overall"
          :players="overall"
          :columnHeaders="true" />
      </v-flex>
      <v-flex xs6>
        <v-btn block class="start-game" color="cyan darken-1" v-on:click="createGame">Play again!</v-btn>
      </v-flex>
    </v-layout>
  </v-layout>
</template>


<script>
import GenericScoreBoard from './GenericScoreBoard.vue';
import {mapState, mapActions} from 'vuex';
import TitleBar from './TitleBar.vue';

export default {
  name: 'ShowScore',
  components: {TitleBar, GenericScoreBoard},
  created(){
    this.getBestScores();
  },
  computed: {
    ...mapState(['game', 'bestScores']),
    landscape(){
      if(this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height){
        return true;
      }
      return false;
    },
    thisGame(){
      return [{
        username: this.game.player.username,
        score: this.game.currentScore.player,
        main: true
      }, {
        username: this.game.opponentNames.rand1 || 'Dilbert',
        score: this.game.currentScore.rand1
      }, {
        username: this.game.opponentNames.rand2 || 'Ernesto',
        score: this.game.currentScore.rand2
      }];
    },
    overall(){
      if(this.bestScores.player){
        return this.bestScores.player.map(p => {
          if(p.username === this.game.player.username){
            p.main = true;
          }
          return p;
        });
      }
    }
  },
  methods: {
    ...mapActions(['fetchBestScores', 'createGame']),
    getBestScores(){
      this.fetchBestScores();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.v-btn.start-game {
  color: white;
  text-transform: initial;
  font-size: 2em;
  height: 2em;
}
.scores-layout {
  align-items: center;
  display: flex;
  justify-content: space-around;
}
</style>
