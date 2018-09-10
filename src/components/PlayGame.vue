<template>
  <div class="fullArea">
    <TitleBar :title="title" />
    <v-container :fill-height="!landscape">
      <v-layout
        justify-space-between
        v-bind="flexContainer"
        >
        <v-flex :class="{artists:true, second: landscape}" >
          <div :class="['star-container']">
            <StarsSVG :items="items" />
          </div>
          <div class="labels">
            <div :class="{label:true, left: true, landscape: landscape, portrait: !landscape}">
              <span>{{items[0].name}}</span>
            </div>
            <div :class="{label:true, center: true, landscape: landscape, portrait: !landscape}">
              <span>{{items[1].name}}</span>
            </div>
            <div :class="{label:true, right: true, landscape: landscape, portrait: !landscape}">
              <span>{{items[2].name}}</span>
            </div>
          </div>
        </v-flex>
        <v-flex>
          <GenericScoreBoard
            title="Score"
            :players="players"
            :columnHeaders="false" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {knuthShuffle} from 'knuth-shuffle';
import {mapState} from 'vuex';
import TitleBar from './TitleBar.vue';
import StarsSVG from './StarsSVG.vue';
import GenericScoreBoard from './GenericScoreBoard.vue';

export default {
  name: 'PlayGame',
  components: {TitleBar, StarsSVG, GenericScoreBoard},
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
    landscape(){
      if(this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height){
        return true;
      }
      return false;
    },
    flexContainer(){
      if(this.landscape){
        console.log('flexContainer landscape');
        return {column: false, 'align-center': true};
      }
        console.log('flexContainer portrait');
      return {column: true,  'align-center': true};
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister');

.artists {
  width: 100%;
  margin-top: -7%;
  flex-grow: 2;
}

/**********
* LABELS *
**********/
.label {
  font-family: 'Love Ya Like A Sister', cursive !important;
  text-align: center;
}

.label.portrait {
  font-size: 5vw;
}
.label.landscape {
  font-size: 3vw;
}

div.labels {
  width: 100%;
  position: relative;
  top: -20%;
  text-align: center;
}
.label {
  font-weight: normal;
  width: 30%;
  word-spacing: 30%;

  text-align: center;
  margin: 10px;
  min-height: 60px;
}
.label.left {
  position: absolute;
  left: 0;
}
.label.center {
  position: absolute;
  left: 50%;
  margin-left: -15%;
  margin-top: -4%;
}
.label.right {
  position: absolute;
  right: 0;
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

.second {
  order: 2;
}

.fullArea {
  width: 100%;
  height: 100%;
}
.star-container {
  margin-bottom: -7%;
}

</style>
