<template>
  <v-toolbar app dense>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <ShareBar />
      <v-btn flat @click="toggleHelp">{{ showHelp ? 'hide help' : 'show help' }}</v-btn>
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
    ...mapActions(['toggleHelp']),
    toggleHelp(){ this.$store.commit('toggleHelp'); },
  },
  computed: mapState(['showHelp', 'authStatus', '$route'])
};
</script>
