<template>
  <div class="star-parent">
    <div class="no-image left" :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)">
      <p class="title">{{items[0].name}}</p>
      <p class="description">{{items[0].description}}</p>
    </div>
    <div class="no-image center" :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)">
      <p class="title">{{items[1].name}}</p>
      <p class="description">{{items[1].description}}</p>
    </div>
    <div class="no-image right" :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)">
      <p class="title">{{items[2].name}}</p>
      <p class="description">{{items[2].description}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'ItemsNoImage',
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


div.no-image {
  display: flex;
  justify-content: center;
  width: 45%;
  height:45%;
  position: absolute;
  transition: transform 0.2s;
  border: 1vmin solid #00acc1;
  padding-left: 1vmin;
  padding-right: 1vmin;
}


div.no-image p.title {
  align-self: flex-start;
  margin-top: 3%;
  border: 2px solid black;
  background-color: white;
  position: absolute;
  z-index: 200;
  padding: 3px;
  font-size: 5vmin !important;
}
div.no-image p.description {
  font-size: 2.5vmin;
  font-family: Arial;
  font-style: italic;
  margin-top: 25%;
}

div.no-image.left {
  left: 4%;
  bottom: 5%;
}
div.no-image.left:hover {
  transform: translateX(-10px) scale(1.1);
}

div.no-image.center {
  top: 4%;
  left: 0;
  margin: 0 auto;
  right: 0;
}
div.no-image.center:hover {
  transform: translateY(-10px) scale(1.1);
}

div.no-image.right {
  right: 4%;
  bottom: 5%;
}
div.no-image.right:hover {
  transform: translateX(10px) scale(1.1);
}

div.no-image:hover{
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
