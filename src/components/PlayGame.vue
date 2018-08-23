<template>
  <TitleBar :title="title" />
</template>

<script>
import {mapState} from 'vuex';
import TitleBar from './TitleBar.vue';

export default {
  name: 'PlayGame',
  components: {TitleBar},
  computed: {
    ...mapState(['game', 'gameStatus']),
    title(){
      return 'Round '+(this.game.turns.previous.length+1)+'/10';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
