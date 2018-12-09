<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="show"
      :hide-overlay="hideOverlay"
      :persistent=true
      :no-click-animation=true
      width="150"
      :size="100">
      <div class="text-xs-center">
        <v-card
          color="cyan darken-1"
          dark
        >
          <v-icon
            v-if="previousTurnOutcome === 'won'"
            dark
            class="turn-fb">check</v-icon>
          <v-icon
            v-else-if="previousTurnOutcome === 'lost'"
            dark
            class="turn-fb">close</v-icon>
          <v-progress-circular
            v-else
            id="loading-spinner"
            :size="70"
            :width="7"
            indeterminate
          ></v-progress-circular>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  props: ['hideOverlay'],
  data(){
    return {
      show: true,
    };
  },
  computed: {
    ...mapState(['game', 'gameStatus', 'previousTurnOutcome']),
    loading(){
      if(this.gameStatus === 'fetching'){    return true; }
      if(this.gameStatus === 'postingPick'){ return true; }
      if(this.gameStatus === 'creating'){    return true; }
      return false;
    },
  },
  name: 'VCenterLoadingSpinner'
};
</script>

<style>

#loading-spinner {
  margin: 20px;
}
i.turn-fb {
  width:70px;
  height:70px;
  margin: 20px;
  font-size: 90px;
}

</style>
