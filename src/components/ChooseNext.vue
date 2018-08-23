<template>
  <div>
    <h1>Choose next</h1>
    <v-btn v-on:click="createGame">Start game</v-btn>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'ChooseNext',
  methods: {
    ...mapActions(['createGame']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
