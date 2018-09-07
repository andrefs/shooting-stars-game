<template>
  <VCenterLoadingSpinner :hideOverlay=true />
</template>

<script>
import VCenterLoadingSpinner from './VCenterLoadingSpinner.vue';

export default {
  components: {VCenterLoadingSpinner},
  name: 'LoadingSpinner'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vcenter {
  position: fixed;
  bottom: 50%;
}
</style>
