<template>
  <v-app id="shooting-stars">
    <v-toolbar app :clipped-left="clipped">
    <v-btn @click="toggleHelp">{{ showHelp ? 'hide help' : 'show help' }}</v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'App',
  data(){
    return {
      show: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  },
  methods: {
    ...mapActions(['toggleHelp']),
    toggleHelp(){ this.$store.commit('toggleHelp'); }
  },
  computed: mapState(['showHelp'])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#shooting-stars {
  background-color: white;
}

footer { text-align: center; }

footer p {
  color: #888;
  font-size: 13px;
  letter-spacing: .4px;
}

footer a {
  color: #4a89dc;
  text-decoration: none;
  transition: all .2s ease;
}

footer a:hover {
  color: #666;
  text-decoration: underline;
}

footer img {
  width: 80px;
  transition: all .2s ease;
}

footer img:hover { opacity: .83; }

footer img:focus , footer a:focus { outline: none; }
</style>
