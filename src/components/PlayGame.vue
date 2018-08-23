<template>
  <div>
  <TitleBar :title="title" />
  <v-container>
    <v-layout>
      <v-flex :class="['artists']">
        <StarsSVG :items="items" />
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

export default {
  name: 'PlayGame',
  components: {TitleBar, StarsSVG},
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

</style>
