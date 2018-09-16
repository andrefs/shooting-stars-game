<template functional>
  <div class="title-corner">
    <h1 class="pretitle">{{props.pretitle}}</h1>
    <h1>{{props.title}}</h1>
  </div>
</template>

<style>
.title-corner h1 {
  font-size: 3em;
  line-height: 1.1;
}

.title-corner h1.pretitle {
  font-size: 1em;
  line-height: 1;
}

.title-corner {
  position: fixed;
  right: 16px;
  z-index: 0;
}
</style>
