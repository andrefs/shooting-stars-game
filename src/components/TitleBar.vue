<template functional>
  <div>
      <h1>{{props.title}}</h1>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.titleVerticalSpace, .titleBar {
  height: 5vw;
  display: flex;
  align-items: center;
}

.titleBar {
  height: 5vw;
  width: 98vw;
  left:1vw;
  top: 1vw;

  position:fixed;
}

.titleDiv {
  width: 50vw;
  margin: 0 auto 0 auto;
  bottom: 0;

}
.titleBar h1 {
  margin-top: 0.5rem;
}

</style>
