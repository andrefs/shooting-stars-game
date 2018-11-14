<template>
  <v-toolbar app dense>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <ShareBar />
      <v-btn data-v-step="4" flat @click="toggleTutorial">{{ hideTutorial ? 'show tutorial' : 'hide tutorial' }}</v-btn>
      <v-btn flat to="login">Login</v-btn>
      <v-btn flat to="register">Register</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import ShareBar from './ShareBar.vue';

export default {
  name: 'TopBar',
  components: {ShareBar},
  methods: {
    ...mapActions(['toggleTutorial']),
    toggleTutorial(){
      if(!this.hideTutorial){
        this.$tours['game-tour'].stop();
      } else {
        this.$store.commit('toggleTutorial');
        this.$tours['game-tour'].start();
      }
    },
  },
  computed: mapState(['hideTutorial', 'authStatus', '$route'])
};
</script>
