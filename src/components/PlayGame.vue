<template>
  <v-layout class="parent-layout">
    <LogoCorner />
    <TitleCorner :title="title" :pretitle="pretitle" vStep="2"/>
    <v-layout class="play-game-layout">
      <transition name="fade">
        <div class="star-container" data-v-step="1" v-if="showItems">
          <ItemsNoImage   :items="items" :turnNumber="turnNumber" v-if="gameStyle      === 'imageless'" />
          <StarsSVG       :items="items" :turnNumber="turnNumber" v-else-if="gameStyle === 'stars'" />
          <Pictures       :items="items" :turnNumber="turnNumber" v-else />
        </div>
      </transition>
    </v-layout>
    <GameBottomBar :players="players" />
  </v-layout>
</template>

<script>
import {knuthShuffle} from 'knuth-shuffle';
import TitleBar from './TitleBar.vue';
import TitleCorner from './TitleCorner.vue';
import LogoCorner from './LogoCorner.vue';
import StarsSVG from './StarsSVG.vue';
import ItemsNoImage from './ItemsNoImage.vue';
import Pictures from './Pictures.vue';
import GameBottomBar from './GameBottomBar.vue';
import GenericScoreBoard from './GenericScoreBoard.vue';
import {mapState} from 'vuex';

export default {
  name: 'PlayGame',
  components: {
    TitleBar,
    TitleCorner,
    LogoCorner,
    StarsSVG,
    ItemsNoImage,
    GameBottomBar,
    Pictures,
    GenericScoreBoard
  },
  beforeDestroy(){
    this.$tours['game-tour'].stop();
  },
  mounted(){
    if(!this.hideTutorial){
      this.$tours['game-tour'].start();
    }
  },
  computed: {
    ...mapState(['game', 'gameStatus', 'hideTutorial', 'showItems']),
    gameStyle(){
      return process.env.VUE_APP_GAME_STYLE;
    },
    turnNumber(){
      return this.game.turns.previous.length + 1;
    },
    items(){
      const triple = this.game.turns.current.triple;
      // eslint-disable-next-line
      return knuthShuffle([{
        name: triple.itemA.name,
        imagePath: triple.itemA.imagePath,
        description: triple.itemA.description,
        position: 'A'
      }, {
        name: triple.itemB.name,
        imagePath: triple.itemB.imagePath,
        description: triple.itemB.description,
        position: 'B'
      }, {
        name: triple.itemC.name,
        imagePath: triple.itemC.imagePath,
        description: triple.itemC.description,
        position: 'C'
      }]);
    },
    players(){
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
    pretitle(){
      return 'Round';
    },
    title(){
      let turns = this.game && this.game.turns && this.game.turns.previous ?
        this.game.turns.previous.length : 0;
      return (turns+1)+'/10';
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister');

.play-game-content {
  padding: 0 !important;
}

.play-game-layout {
  height: 100%;
}

.artists {
  flex-basis: auto;
  flex-grow: 5;
  height: 100%;
}
.second {
  order: 2;
}

.star-container {
  height: 100%;
  width: 100%;
  z-index: 5;
}

.parent-layout {
  height: 100%;
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

.score-fixed {
  position: fixed;
  bottom: 10px;
  left: 50%;
  margin-left: -5em;
  width: 10em;
  background-color: white;
  z-index: 30;
  display: flex;

}

.score-fixed table.v-table tbody td, table.v-table tbody th {
  height: 40px;
}

div.v-tour {
  z-index: 40;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

