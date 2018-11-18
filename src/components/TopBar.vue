<template>
  <!--v-toolbar app dense>
    <v-toolbar-title>Toolbar Mobile Menu</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn data-v-step="4" flat @click="toggleTutorial">{{ hideTutorial ? 'show tutorial' : 'hide tutorial' }}</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="login">Login</v-btn>
      <v-btn flat to="register">Register</v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Cenas 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Cenas 2</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar -->

  <v-toolbar app dense>
    <v-toolbar-items class="hidden-sm-and-down share-bar-h">
            <vue-goodshare-facebook      has_icon  />
            <vue-goodshare-twitter      has_icon  />
            <vue-goodshare-reddit      has_icon  />
            <vue-goodshare-email      has_icon  />
    </v-toolbar-items>
    <v-menu  class="hidden-md-and-up">
      <v-toolbar-side-icon  slot="activator"><v-icon>share</v-icon></v-toolbar-side-icon>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <vue-goodshare-facebook      has_icon  />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <vue-goodshare-twitter      has_icon  />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <vue-goodshare-reddit      has_icon  />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <vue-goodshare-email      has_icon  />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn data-v-step="4" flat @click="toggleTutorial">{{ hideTutorial ? 'show tutorial' : 'hide tutorial' }}</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="login">Login</v-btn>
      <v-btn flat to="register">Register</v-btn>
    </v-toolbar-items>
    <v-menu  class="hidden-md-and-up">
      <v-toolbar-side-icon  slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Register</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue';
import VueGoodshareReddit from 'vue-goodshare/src/providers/Reddit.vue';
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue';
import VueGoodshareEmail from 'vue-goodshare/src/providers/Email.vue';

export default {
  name: 'TopBar',
  components: {
    VueGoodshareFacebook,
    VueGoodshareReddit,
    VueGoodshareTwitter,
    VueGoodshareEmail,
  },
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
  computed: mapState(['hideTutorial', 'authStatus', '$route']),
};
</script>

<style>
.share-bar-h {
  font-size: 0.7em;
}
</style>
