<template>
  <svg :class="['stars']" viewBox="-20 -10 600 389.77">
  <!--
    <foreignObject class="text-item left"   width="550" height="150">
      <h2 :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)" >{{items[0].name}}</h2>
      <p>{{items[0].description}}</p>
    </foreignObject>
    <foreignObject class="text-item center" width="550" height="150">
      <h2 :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)">{{items[1].name}}</h2>
      <p>{{items[1].description}}</p>
    </foreignObject>
    <foreignObject class="text-item right"  width="550" height="150">
      <h2 :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)">{{items[2].name}}</h2>
      <p>{{items[2].description}}</p>
    </foreignObject>
    -->
    <foreignObject class="text-item left"   width="550" height="150">
      <h2 :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)" >{{items[0].name}}</h2>
      <p>{{items[0].description}}</p>
    </foreignObject>
      <foreignObject class="text-item center" width="550" height="150">
      <h2 :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)">{{items[1].name}}</h2>
    <p>{{items[1].description}}</p>
    </foreignObject>
      <foreignObject class="text-item right"  width="550" height="150">
      <h2 :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)">{{items[2].name}}</h2>
    <p>{{items[2].description}}</p>
    </foreignObject>
  </svg>
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
/* TODO scss scoped */
svg.stars {
  width: 100%;
  height: 100%;
}


.text-item {
  font-family: 'Love Ya Like A Sister', cursive !important;
  text-align: center;
  width: 11em;
  font-size: 26px;
  margin: 0;
  cursor: pointer;
}

.text-item h2 {
}
.text-item p {
  font-size: 12px;
  font-family: Arial;
  font-style: italic;
  width: 25vw;
  margin: auto;
  width: 15em;

}

.text-item.left {
  transform: translate(-13%, 40%);
}
.text-item.center {
  transform: translate(22.5%, 0);
}
.text-item.right {
  transform: translate(59%, 40%);
}

</style>
