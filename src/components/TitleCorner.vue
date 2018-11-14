<template functional>
  <div class="title-corner" :data-v-step="props.vStep">
    <h1 class="pretitle">{{props.pretitle}}</h1>
    <h1>{{props.title}}</h1>
  </div>
</template>

<style>
.title-corner h1 {
  text-align: right;
  font-size: 9vw;
  line-height: 1.1;
}

.title-corner h1.pretitle {
  font-size: 3vw;
  line-height: 1;
}

.title-corner {
  position: fixed;
  right: 16px;
}
</style>
