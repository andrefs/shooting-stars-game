<template>
  <div>
  <TitleBar />
  <v-container>
    <v-layout  :column="!landscape" mt-5>
      <v-flex>
        <GenericScoreBoard
          title="Game"
          :players="players"
          :columnHeaders="false" />
      </v-flex>
      <v-flex>
        <GenericScoreBoard
          title="Overall"
          :players="bestScores.player"
          :columnHeaders="true" />
      </v-flex>
    </v-layout>

    <v-layout mt-5>
      <v-flex xs6 offset-xs3>
        <v-btn block class="start-game" large color="cyan darken-1" v-on:click="createGame">Play again!</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
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
    players(){
      return [{
        username: this.game.player.username,
        score: this.game.currentScore.player
      }, {
        username: this.game.opponentNames.rand1 || 'Dilbert',
        score: this.game.currentScore.rand1
      }, {
        username: this.game.opponentNames.rand2 || 'Ernesto',
        score: this.game.currentScore.rand2
      }];
    },
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
}
</style>
