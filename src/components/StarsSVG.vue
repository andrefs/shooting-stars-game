<template>
  <div class="star-parent">
    <svg width="0" height="0" >
      <defs>
        <clipPath id="clipping" clipPathUnits="objectBoundingBox" transform="scale(0.0097 0.0097)">
          <path d="M52.5 4.84 c4.58 0 14.92 24.17 18.63 26.86 3.7 2.7 29.88 5.06 31.3 9.4 1.4 4.37-18.38 21.68-19.8 26.03-1.4 4.35 4.43 30 .73 32.68-3.7 2.7-26.28-10.76-30.86-10.76-4.58 0-27.15 13.47-30.86 10.78-3.7-2.68 2.14-28.32.72-32.67-1.4-4.35-21.2-21.66-19.8-26.02 1.43-4.34 27.6-6.7 31.3-9.4 C37.6 29 47.93 4.83 52.5 4.83 z"/>
        </clipPath>
      </defs>
    </svg>
    <div class="star left" :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)">
      <div class="inside-star">
        <img v-bind="{'src':imageBaseUrl + '/items/' + items[0].imagePath}">
      </div>
      <p class="text-xs-center title">{{items[0].name}}</p>
    </div>
    <div class="star center" :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)">
      <div class="inside-star">
        <img v-bind="{'src':imageBaseUrl + '/items/' + items[1].imagePath}">
      </div>
      <p class="text-xs-center title">{{items[1].name}}</p>
    </div>
    <div class="star right" :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)">
      <div class="inside-star">
        <img v-bind="{'src':imageBaseUrl + '/items/' + items[2].imagePath}">
      </div>
      <p class="text-xs-center title">{{items[2].name}}</p>
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
  width: 55%;
  height:55%;
  clip-path: url(#clipping);
  position: absolute;
  background-color: #00acc1;
  transition: transform 0.2s;
}


div.inside-star {
  display: flex;
  justify-content: center;
  width: 90%;
  top: 5%;
  clip-path: url(#clipping);
  left: 5%;
  height: 90%;
  position: absolute;
}

div.star p.title {
  width: 45%;
  align-self: flex-end;
  bottom: 8vmin;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  position: absolute;
  z-index: 200;
  padding: 3px;
  margin-bottom: 0;
  font-size: 3vmin !important;
}

div.star.left {
  left: 4%;
  bottom: 2%;
}
div.star.left:hover {
  transform: translateX(-10px) scale(1.1);
}

div.star.center {
  top: 3%;
  left: 2%;
  margin: 0 auto;
}
div.star.center:hover {
  transform: translateY(-10px) scale(1.1);
}

div.star.right {
  right: 5%;
  bottom: 17%;
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
