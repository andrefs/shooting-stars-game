<template>
  <svg :class="['stars']" viewBox="-28 -28 500 500">
    <defs>

      <pattern id="image-1" x="0" y="0" width="1" height="1">
        <image v-bind="{'xlink:href':imageBaseUrl +'/'+items[0].imageUrl}" height="220" />
      </pattern>
      <pattern id="image-2" width="1" height="1">
        <image v-bind="{'xlink:href':imageBaseUrl +'/'+items[1].imageUrl}" height="200" />
      </pattern>
      <pattern id="image-3" width="1" height="1">
        <image v-bind="{'xlink:href':imageBaseUrl +'/'+items[2].imageUrl}" height="220" />
      </pattern>
    </defs>

    <path :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)" :class="['starLeft']" d="M81.481 230.91c8.86-3.17 45.6 36.42 54.63 39.06 9.02 2.64 61.32-10.9 67.07-3.45 5.75 7.4-20.55 54.6-20.27 64 .28 9.4 29.3 54.9 24 62.7-5.3 7.7-58.3-2.7-67.14.5-8.86 3.1-43.2 44.8-52.23 42.2-9.03-2.7-15.5-56.3-21.24-63.7-5.8-7.5-56.1-27.3-56.3-36.7-.3-9.4 48.7-32.1 54-39.88 5.3-7.77 8.6-61.7 17.4-64.86z"/>
    <path :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)" :class="['starRight']" d="M360.107 230.91c-8.86-3.17-45.6 36.42-54.63 39.06-9.02 2.64-61.32-10.9-67.07-3.45-5.75 7.4 20.55 54.6 20.27 64-.28 9.4-29.3 54.9-24 62.7 5.3 7.7 58.3-2.7 67.14.5 8.86 3.1 43.2 44.8 52.23 42.2 9.03-2.7 15.5-56.3 21.24-63.7 5.8-7.5 56.1-27.3 56.3-36.7.3-9.4-48.7-32.1-54-39.88-5.3-7.77-8.6-61.7-17.4-64.86z"/>
    <path :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)" :class="['starCenter']" d="M224.744 10c9.4 0 30.66 49.66 38.27 55.2 7.6 5.5 61.4 10.4 64.3 19.33 2.92 8.94-37.74 44.5-40.65 53.45-2.9 8.94 9.1 61.62 1.48 67.14-7.6 5.53-54-22.15-63.4-22.15-9.4 0-55.8 27.68-63.4 22.15-7.6-5.52 4.38-58.2 1.48-67.14-2.9-8.94-43.57-44.5-40.66-53.45 2.9-8.94 56.7-13.82 64.3-19.34 7.63-5.59 28.88-55.19 38.28-55.19z"/>
  </svg>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'StarsSVGCluster',
  props: ['items'],
  methods: {
    ...mapActions(['postPick']),
    selectItem(position){
      const positionToPick = {
        A: 'BC',
        B: 'AC',
        C: 'AB'
      };
      const pick = positionToPick[position];

      this.postPick(pick);
    }
  },
  data(){
    return {
      imageBaseUrl: 'https://andrefs.github.io/shooting-stars-images'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* TODO scss scoped */
svg.stars {
  width: 100%;
}

svg.stars path {
  backface-visibility: hidden;
  perspective: 1000;

  transition: transform 0.2s;
  stroke: #facfa3;
  stroke-width: .15em;
  filter:url(#dropshadow);
  cursor: pointer;
}

svg.stars path:hover {
  stroke: orange;
  stroke-width: .25em;
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
</style>
