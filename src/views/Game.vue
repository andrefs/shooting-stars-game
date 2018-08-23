<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>

        <button v-on:click="apiCall">API call</button>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['getTriples']),
    async apiCall(){
      try {
        await this.$store.dispatch('getTriples');
      } catch(e){
        // TODO error handling
        console.log('XXXXXXXXXXXXXXXXXXX err 1', e);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
