<template functional>
  <div class="logo-corner">
    <router-link :to="{name: 'game'}">
      <img src="img/logo.gif" alt="Shooting Stars logo">
    </router-link>
  </div>
</template>

<style>
.logo-corner {
  width: 20%;
  position: fixed;
  left: 16px;
  align-self: flex-start;
}
.logo-corner img {
  width: 100%;
}
</style>
