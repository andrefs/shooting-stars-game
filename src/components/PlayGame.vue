<template>
  <v-layout
    v-resize="recalcLandscape"
    class="parent-layout"
    column>
    <LogoCorner />
    <TitleCorner :title="title" :pretitle="pretitle" vStep="2"/>
    <v-layout
      class="play-game-layout"
      v-bind="flexContainer"
      >
      <v-flex :class="{artists:true, second: landscape}">
        <div class="star-container" data-v-step="1">
          <!-- StarsSVGCluster :items="items" v-if="landscape"/ -->
          <ItemsNoImage   :items="items" :turnNumber="turnNumber" v-if="imageless"/>
          <StarsSVGInline :items="items" :turnNumber="turnNumber" v-else/>
        </div>
      </v-flex>
      <v-flex :class="{'score-flex': true, 'score-flex-portrait': !landscape, 'score-flex-landscape': landscape}">
        <GenericScoreBoard
          title="Score"
          :players="players"
          :columnHeaders="false"
          data-v-step="3"
          />
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import {knuthShuffle} from 'knuth-shuffle';
import TitleBar from './TitleBar.vue';
import TitleCorner from './TitleCorner.vue';
import LogoCorner from './LogoCorner.vue';
import StarsSVGInline from './StarsSVGInline.vue';
import ItemsNoImage from './ItemsNoImage.vue';
// import StarsSVGCluster from './StarsSVGCluster.vue';
import GenericScoreBoard from './GenericScoreBoard.vue';
import {mapState} from 'vuex';

export default {
  name: 'PlayGame',
  components: {
    TitleBar,
    TitleCorner,
    LogoCorner,
    StarsSVGInline,
    ItemsNoImage,
    /* StarsSVGCluster, */
    GenericScoreBoard
  },
  mounted(){
    this.recalcLandscape();
    if(!this.hideTutorial){
      this.$tours['game-tour'].start();
    }
  },
  data(){
    return {
      landscape: 'init'
    };
  },
  methods: {
    recalcLandscape(){
      if(window.innerWidth > window.innerHeight){
        this.landscape = true;
      } else {
        this.landscape = false;
      }
    }
  },
  computed: {
    ...mapState(['game', 'gameStatus', 'hideTutorial']),
    imageless(){
      return process.env.VUE_APP_GAME_STYLE === 'imageless';
    },
    turnNumber(){
      return this.game.turns.previous.length + 1;
    },
    items(){
      const triple = this.game.turns.current.triple;
      // eslint-disable-next-line
      return knuthShuffle([{
        name: triple.itemA.name,
        imageUrl: triple.itemA.imageUrl,
        description: triple.itemA.description,
        position: 'A'
      }, {
        name: triple.itemB.name,
        imageUrl: triple.itemB.imageUrl,
        description: triple.itemB.description,
        position: 'B'
      }, {
        name: triple.itemC.name,
        imageUrl: triple.itemC.imageUrl,
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
    flexContainer(){
      if(this.landscape){
        return {column: false, 'align-center': true};
      }
      return {column: true};
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister');

html {
  overflow: hidden;
}
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
  z-index: 5;
  position: relative;
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

.score-flex {
  align-self: center;
  flex-basis: 15%;
  flex-grow: 0;
  position: relative;
}
.score-flex-portrait {
  margin-top: -10%;
}
.score-flex-landscape {
  margin-top: 15%;
}

div.v-tour {
  z-index: 20;
}

</style>

