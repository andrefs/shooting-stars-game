<template>
  <div class="picture-parent">
    <div class="picture left" :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)">
      <div class="inside-picture">
        <img v-bind="{'src':imageBaseUrl + '/items/' + items[0].imagePath}">
      </div>
      <p class="title">{{items[0].name}}</p>
    </div>
    <div class="picture center" :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)">
      <div class="inside-picture">
        <img v-bind="{'src':imageBaseUrl + '/items/' + items[1].imagePath}">
      </div>
      <p class="title">{{items[1].name}}</p>
    </div>
    <div class="picture right" :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)">
      <div class="inside-picture">
        <img v-bind="{'src':imageBaseUrl + '/items/' + items[2].imagePath}">
      </div>
      <p class="title">{{items[2].name}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'Pictures',
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

div.picture img {
  height: 100%;
  cursor: pointer;
}

div.picture {
  display: flex;
  justify-content: center;
  width: 45%;
  height:45%;
  clip-path: polygon(0% 16%, 100% 16%, 100% 84%, 0 84%, 0 100%);
  position: absolute;
  background-color: #00acc1;
  transition: transform 0.2s;
}


div.inside-picture {
  display: flex;
  justify-content: center;
  width: 90%;
  top: 5%;
  clip-path: polygon(0% 16%, 100% 16%, 100% 84%, 0 84%, 0 100%);
  left: 5%;
  height: 90%;
  position: absolute;
}

div.picture p.title {
  align-self: flex-end;
  margin-top: -18%;
  border: 2px solid black;
  background-color: white;
  position: absolute;
  z-index: 200;
  padding: 3px;
}

div.picture.left {
  left: 4%;
  bottom: 5%;
}
div.picture.left:hover {
  transform: translateX(-5px) scale(1.1);
}

div.picture.center {
  top: 7%;
  left: 20%;
  margin: 0 auto;
}
div.picture.center:hover {
  transform: translateY(-5px) scale(1.1);
}

div.picture.right {
  right: 4%;
  bottom: 16%;
}
div.picture.right:hover {
  transform: translateX(5px) scale(1.1);
}

div.picture:hover{
  z-index: 50;
}

div.picture-parent {
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
