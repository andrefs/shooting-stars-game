<template>
  <v-toolbar class="bottom-bar" data-v-step="3">
    <v-toolbar-title class="bb-title hidden-sm-and-down">Scores:</v-toolbar-title>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-toolbar-title>
      <span :class="{'player-name': true, 'main-player': players[0].main}">{{ players[0].username}} </span>
      <v-chip :text-color="players[0].main ? '#FFCC00' : 'white'" label color="cyan darken-1">{{players[0].score}}</v-chip>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <span :class="{'player-name': true, 'main-player': players[1].main}">{{ players[1].username}} </span>
      <v-chip :text-color="players[1].main ? '#FFCC00' : 'white'" label color="cyan darken-1">{{players[1].score}}</v-chip>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <span :class="{'player-name': true, 'main-player': players[2].main}">{{ players[2].username}} </span>
      <v-chip :text-color="players[2].main ? '#FFCC00' : 'white'" label color="cyan darken-1">{{players[2].score}}</v-chip>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'GameBottomBar',
  props: ['title', 'players'],
};
</script>

<style>
.bottom-bar {
  position: fixed;
  bottom: 0;
  user-select: none;
}

.bottom-bar .player-name, .bottom-bar .bb-title {
  font-size: 4vmin;
  line-height: 1;
}
.bottom-bar .bb-title {
  text-overflow: initial;
}

.bottom-bar .player-name.main-player {
  font-weight: 800;
  font-size: 6vmin;
  width: 25vw;
}

.bottom-bar .v-chip {
  font-size: 4vmin;
}

.bottom-bar .v-chip__content {
  padding: 0 2px;
  height:auto;
}
.bottom-bar .v-toolbar__content, .v-toolbar__extension {
  padding: 0;
}
.bottom-bar .v-toolbar__title:not(:first-child) {
  margin-left: 2vw;
}

.bottom-bar .player-name {
  width: 20vw;
  display:inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
  vertical-align: middle;
}
</style>
