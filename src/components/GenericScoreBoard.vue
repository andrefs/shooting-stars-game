<template>
  <v-layout mt-2>
    <v-flex :class="classes">
      <h2>{{title}}</h2>
      <div id="scoreArea">
        <v-data-table
          :headers="headers"
          :hide-headers="!columnHeaders"
          :items="players"
          hide-actions>
          <template slot="items" slot-scope="props">
            <tr>
              <td v-if="props.item.ranking">{{props.item.ranking}}</td>
              <td>{{props.item.username}}</td>
              <td class="score"><v-chip text-color="white" label color="cyan darken-1">{{props.item.score}}</v-chip></td>
              <td v-if="props.item.games">{{props.item.games}}</td>
            </tr>
          </template>
        </v-data-table>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'GenericScoreBoard',
  props: ['title', 'players', 'columnHeaders', 'classes'],
  computed: {
    headers(){
      const h = [];
      if(this.players && this.players.length && this.players[0].ranking){
        h.push({text: 'Ranking', value: 'ranking', align: 'center'});
      }
      h.push({text: 'Player', value: 'username', align: 'center'});
      h.push({text: 'Score', value: 'score', align: 'center'});
      if(this.players && this.players.length && this.players[0].games){
        h.push({text: 'Games played', value: 'games', align: 'center'});
      }
      return h;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#scoreArea {
  font-weight: normal;
  text-align: center;
  margin: 10px 10px;
  padding-top: 0;
}

#scoreArea td {
  font-size: 20px;
}

#scoreArea td.score .v-chip {
  line-height: 1;
  font-size: 30px;
  font-weight: bold;
}

.bottom {
  position: fixed;
  bottom: 35px;
}


</style>
