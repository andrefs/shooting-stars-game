<template functional>
  <div class="title-corner" :data-v-step="props.vStep">
    <div class="left">
      <p class="legend text-xs-center" v-html="props.legend"></p>
    </div>
    <div class="right">
      <h1 class="pretitle">{{props.pretitle}}</h1>
      <h1>{{props.title}}</h1>
    </div>
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

.title-corner p.legend {
  font-size: 5vmin;
  color: #FFCC00;
  text-shadow: -1px 0 #d3b950, 0 1px black, 1px 0 black, 0 -1px #d3b950;
  line-height: 1;
  margin-right: 3vmin;
}
</style>
