<template>
  <div>
    <v-jumbotron :gradient="gradient" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3>Shooting Stars</h3>
          </v-flex>

        </v-layout>
      </v-container>
    </v-jumbotron>

    <v-layout mt-5>
      <v-flex xs6 offset-xs3>
        <v-btn  v-on:click="startGame" block class="start-game" large color="cyan darken-1">Play now!</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import {mapActions, mapState} from 'vuex';

export default {
  data: () => ({
    gradient: 'to top, #7B1FA2, #E1BEE7'
  }),
  computed: mapState(['token']),
  methods: {
    ...mapActions(['registerGuest']),
    async startGame(){
      if(!this.token){
        await this.registerGuest();
      }
      this.$router.push({name: 'game'});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
