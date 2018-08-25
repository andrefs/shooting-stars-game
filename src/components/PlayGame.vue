<template>
  <div>
    <TitleBar :title="title" />
    <v-container>
      <v-layout>
        <v-flex :class="['artists']">
          <div :class="['star-container']">
            <StarsSVG :items="items" />
          </div>
          <div :class="['labels']">
            <div :class="['label','left']">
              <span>{{items[0].name}}</span>
            </div>
            <div :class="['label','center']">
              <span>{{items[1].name}}</span>
            </div>
            <div :class="['label','right']">
              <span>{{items[2].name}}</span>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <GenericScoreBoard
        title="Score"
        :players="players"
        :columnHeaders="false"/>
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.artists {
  width: 600px;
  margin-bottom: 70px;
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
