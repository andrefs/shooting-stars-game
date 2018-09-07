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
        <v-progress-circular id="loading-spinner"
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
export default {
  props: ['hideOverlay'],
  data(){
    return {
      show: true,
    };
  },
  name: 'VCenterLoadingSpinner'
};
</script>

<style>

#loading-spinner {
  margin: 20px;
}

</style>
