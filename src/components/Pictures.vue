    <!-- <path  d="M129.783 1.78h121.67v79.927h-121.67z"  />
    <path  d="M1.779 49.028h121.67v79.927H1.779z"    />
    <path  d="M257.787 49.028h121.67v79.927h-121.67z"/>
<svg xmlns="http://www.w3.org/2000/svg" width="125.228" height="83.485">
  <path fill="#00b3ff" stroke="#00b4ff" stroke-width="3.558" />
</svg-->

<template>
  <div class="star-parent">
    <div class="star left" :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)">
      <div class="inside-star">
        <img v-bind="{'src':imageBaseUrl + '/items/' + items[0].imagePath}">
      </div>
      <p class="title">{{items[0].name}}</p>
    </div>
    <div class="star center" :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)">
      <div class="inside-star">
        <img v-bind="{'src':imageBaseUrl + '/items/' + items[1].imagePath}">
      </div>
      <p class="title">{{items[1].name}}</p>
    </div>
    <div class="star right" :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)">
      <div class="inside-star">
        <img v-bind="{'src':imageBaseUrl + '/items/' + items[2].imagePath}">
      </div>
      <p class="title">{{items[2].name}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'StarsSVG',
  props: ['items', 'turnNumber'],
  methods: {
    ...mapActions(['postPick']),
    selectItem(position){
      if(!this.allowSubmit){
        return false;
      }
      const positionToPick = {
        A: 'BC',
        B: 'AC',
        C: 'AB'
      };
      const pick = positionToPick[position];

      this.postPick({turnNumber: this.turnNumber, pick});
    }
  },
  data(){
    return {
      imageBaseUrl: process.env.VUE_APP_API
    };
  },
  computed: {
    allowSubmit: {
      get(){
        return this.$store.state.gameStatus !== 'postingPick';
      },
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

div.star img {
  height: 100%;
  cursor: pointer;
}

div.star {
  display: flex;
  justify-content: center;
  width: 45%;
  height:45%;
  clip-path: polygon(0% 16%, 100% 16%, 100% 84%, 0 84%, 0 100%);
  position: absolute;
  background-color: #00acc1;
  transition: transform 0.2s;
}


div.inside-star {
  display: flex;
  justify-content: center;
  width: 90%;
  top: 5%;
  clip-path: polygon(0% 16%, 100% 16%, 100% 84%, 0 84%, 0 100%);
  left: 5%;
  height: 90%;
  position: absolute;
}

div.star p.title {
  align-self: flex-end;
  margin-top: -18%;
  border: 2px solid black;
  background-color: white;
  position: absolute;
  z-index: 200;
  padding: 3px;
}

div.star.left {
  left: 4%;
  bottom: 5%;
}
div.star.left:hover {
  transform: translateX(-10px) scale(1.1);
}

div.star.center {
  top: 7%;
  left: 20%;
  margin: 0 auto;
}
div.star.center:hover {
  transform: translateY(-10px) scale(1.1);
}

div.star.right {
  right: 4%;
  bottom: 16%;
}
div.star.right:hover {
  transform: translateX(10px) scale(1.1);
}

div.star:hover{
  z-index: 50;
}

div.star-parent {
  width: 90vw;
  height: 90vw;
  max-height: 90vh;
  max-width: 90vh;
  margin: auto;
  position: absolute;
  top:0;bottom:0;
  left:0;right:0;
  overflow: hidden;
}

</style>
