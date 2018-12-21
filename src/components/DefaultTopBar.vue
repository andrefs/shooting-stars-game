<template>
  <v-toolbar app height=35 class="topbar">
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
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-if="!loggedIn"  to="login">Login</v-btn>
      <v-btn flat v-if="!loggedIn"  to="register">Register</v-btn>
      <v-btn flat v-if="loggedIn" to="logout">Logout</v-btn>
      <v-btn flat to="about">About</v-btn>
    </v-toolbar-items>
    <v-toolbar-title class="main-player-name" v-if="user"><v-icon>person_pin</v-icon><span>{{user.username}}</span></v-toolbar-title>
    <v-menu  class="hidden-md-and-up">
      <v-toolbar-side-icon  slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-if="!loggedIn" to="login">
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="!loggedIn" to="register">
          <v-list-tile-content>
            <v-list-tile-title>Register</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="loggedIn" to="logout">
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="about">
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import {mapState} from 'vuex';
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue';
import VueGoodshareReddit from 'vue-goodshare/src/providers/Reddit.vue';
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue';
import VueGoodshareEmail from 'vue-goodshare/src/providers/Email.vue';

export default {
  name: 'DefaultTopBar',
  components: {
    VueGoodshareFacebook,
    VueGoodshareReddit,
    VueGoodshareTwitter,
    VueGoodshareEmail,
  },
  methods: {
    toggleTutorial(){
      if(!this.hideTutorial){
        this.$tours['game-tour'].stop();
      } else {
        this.$store.commit('toggleTutorial');
        this.$tours['game-tour'].start();
      }
    },
  },
  computed: {
    ...mapState(['hideTutorial', 'authStatus', 'user']),
    loggedIn(){
      return this.user && this.user.isGuest === false;
    }
  }
};
</script>

<style>
.topbar {
  z-index: 10;
  width: 100vw;
}
.share-bar-h {
  font-size: 0.7em;
}
.v-toolbar .v-btn {
  margin: 0;
}

.main-player-name {
  user-select: none;
  color: #1BA4B9;
}
.main-player-name .v-icon {
  color: #1BA4B9;
}
</style>
