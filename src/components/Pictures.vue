<template>
  <svg :class="['stars']" viewBox="0 0 381.235 200.734">
    <defs>
      <pattern id="image-1" width="1" height="1">
        <image v-bind="{'href':imageBaseUrl + '/items/' + items[0].imagePath}" height="85" width="120" />
      </pattern>
      <pattern id="image-2" width="1" height="1">
        <image v-bind="{'href':imageBaseUrl + '/items/' + items[1].imagePath}" height="85" width="120" />
      </pattern>
      <pattern id="image-3" width="1" height="1">
        <image v-bind="{'href':imageBaseUrl + '/items/' + items[2].imagePath}" height="85" width="120" />
      </pattern>
    </defs>
    <path :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)" :class="['starCenter']"   d="M129.783 1.78h121.67v79.927h-121.67z"/>
    <path :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)" :class="['starLeft']"  d="M1.779 49.028h121.67v79.927H1.779z"/>
    <path :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)" :class="['starRight']" d="M257.787 49.028h121.67v79.927h-121.67z"/>


    <foreignObject class="label left"   width="550" height="150">
      <p>{{items[0].name}}</p>
    </foreignObject>
    <foreignObject class="label center" width="550" height="150">
      <p>{{items[1].name}}</p>
    </foreignObject>
    <foreignObject class="label right"  width="550" height="150">
      <p>{{items[2].name}}</p>
    </foreignObject>

  </svg>
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
/* TODO scss scoped */
svg.stars {
  width: 100%;
  height: 100%;
}

svg.stars path {
  backface-visibility: hidden;
  perspective: 1000;

  transition: transform 0.2s;
  stroke: #facfa3;
  stroke-width: 1.25%;
  cursor: pointer;
}

svg.stars path:hover {
  stroke: orange;
  stroke-width: 2%;
}

svg.stars path.starCenter {
  fill: url(#image-2);
  transform-origin: 50% 50%;
}
svg.stars path.starCenter:hover{
  transform: translateY(-10px) scale(1.1);
}
svg.stars path.starLeft {
  fill: url(#image-1);
  transform-origin: 50% 50%;
}
svg.stars path.starLeft:hover{
  transform: translateX(-10px) scale(1.1);
}
svg.stars path.starRight {
  fill: url(#image-3);
  transform-origin: 50% 50%;
}
svg.stars path.starRight:hover{
  transform: translateX(10px) scale(1.1);
}


.label {
  font-family: 'Love Ya Like A Sister', cursive !important;
  text-align: center;
  width: 100%;
  font-size: 26px;
  margin: 0;
}

.label p {
  width: 31.5%;
}


.label.left {
  transform: translate(7%,69%);
}
.label.center {
  transform: translate(31.5%, 40%);
}
.label.right {
  transform: translate(54%,69%);
}


</style>
