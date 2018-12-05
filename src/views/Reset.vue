<template>
  <div></div>
</template>


<script>
export default {
  mounted(){
    this.$store.commit('logout');
    this.$router.replace({name: 'game'});
  }
};
</script>
