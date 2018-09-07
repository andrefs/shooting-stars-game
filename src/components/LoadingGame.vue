<template>
  <v-progress-circular class="vcenter"
    :size="70"
    :width="7"
    color="cyan darken-1"
    indeterminate
  ></v-progress-circular>
</template>

<script>
export default {
  name: 'LoadingGame'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vcenter {
  position: fixed;
  bottom: 50%;
}
</style>
