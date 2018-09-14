<template>
  <v-layout
    v-resize="recalcLandscape"
    class="parent-layout"
    column>
    <TitleBar :title="title" />
    <v-layout
      class="play-game-layout"
      v-bind="flexContainer"
      >
      <v-flex :class="{artists:true, second: landscape}">
        <div :class="['star-container']">
          <!-- StarsSVGCluster :items="items" v-if="landscape"/ -->
          <StarsSVGInline :items="items" />
        </div>
        <!-- div class="labels">
          <div :class="{label:true, left: true, landscape: landscape, portrait: !landscape}">
            <span>{{items[0].name}}</span>
          </div>
          <div :class="{label:true, center: true, landscape: landscape, portrait: !landscape}">
            <span>{{items[1].name}}</span>
          </div>
          <div :class="{label:true, right: true, landscape: landscape, portrait: !landscape}">
            <span>{{items[2].name}}</span>
          </div>
        </div -->
      </v-flex>
      <v-flex class="score-flex">
        <GenericScoreBoard
          title="Score"
          :players="players"
          :columnHeaders="false" />
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import {knuthShuffle} from 'knuth-shuffle';
import TitleBar from './TitleBar.vue';
import StarsSVGInline from './StarsSVGInline.vue';
//import StarsSVGCluster from './StarsSVGCluster.vue';
import GenericScoreBoard from './GenericScoreBoard.vue';
import {mapState} from 'vuex';

export default {
  name: 'PlayGame',
  components: {TitleBar, StarsSVGInline, /*StarsSVGCluster,*/ GenericScoreBoard},
  mounted(){
    this.recalcLandscape();
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
    ...mapState(['game', 'gameStatus']),
    items(){
      const triple = this.game.turns.current.triple;
      // eslint-disable-next-line
      return knuthShuffle([{
        name: triple.itemA.name,
        imageUrl: triple.itemA.imageUrl,
        position: 'A'
      }, {
        name: triple.itemB.name,
        imageUrl: triple.itemB.imageUrl,
        position: 'B'
      }, {
        name: triple.itemC.name,
        imageUrl: triple.itemC.imageUrl,
        position: 'C'
      }]);
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
    title(){
      return 'Round '+(this.game.turns.previous.length+1)+'/10';
    },
    flexContainer(){
      if(this.landscape){
        return {column: false, 'align-center': true};
      }
      return {column: true};
    }
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
  flex-basis: 15%;
}

</style>

