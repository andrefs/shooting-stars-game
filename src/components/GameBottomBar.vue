<template>
  <v-toolbar height="15vw" class="bottom-bar">
    <v-toolbar-title>
      <span class="player-name">{{ players[0].username}}:</span>
      <v-chip :text-color="players[0].main ? '#FFCC00' : 'white'" label color="cyan darken-1">{{players[0].score}}</v-chip>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <span class="player-name">{{ players[1].username}}:</span>
      <v-chip :text-color="players[1].main ? '#FFCC00' : 'white'" label color="cyan darken-1">{{players[1].score}}</v-chip>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <span class="player-name">{{ players[2].username}}:</span>
      <v-chip :text-color="players[2].main ? '#FFCC00' : 'white'" label color="cyan darken-1">{{players[2].score}}</v-chip>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'GameTopBar',
  props: ['title', 'players'],
};
</script>

<style>
.bottom-bar {
  position: fixed;
  bottom: 0;
}

.bottom-bar .player-name, .bottom-bar .bb-title {
  font-size: 4vw;
}

.bottom-bar .v-chip {
  font-size: 6vw;
}

.bottom-bar .v-chip__content {
  padding: 0 6px;
}
</style>
