<template>
  <svg :class="['stars']" viewBox="-20 -10 600 389.77">
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
    <path :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)" :class="['starLeft']" d="M101.47 54.58c8.86-3.17 45.6 36.42 54.63 39.06 9.02 2.64 61.32-10.9 67.07-3.45 5.75 7.4-20.55 54.6-20.27 64 .28 9.4 29.3 54.9 24 62.7-5.3 7.7-58.3-2.7-67.14.5-8.86 3.1-43.2 44.8-52.23 42.2-9.03-2.7-15.5-56.3-21.24-63.7-5.8-7.5-56.1-27.3-56.3-36.7-.3-9.4 48.7-32.1 54-39.88 5.3-7.77 8.6-61.7 17.4-64.86z"/>
    <path :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)" :class="['starRight']" d="M458.53 54.58c-8.86-3.17-45.6 36.42-54.63 39.06-9.02 2.64-61.32-10.9-67.07-3.45-5.75 7.4 20.55 54.6 20.27 64-.28 9.4-29.3 54.9-24 62.7 5.3 7.7 58.3-2.7 67.14.5 8.86 3.1 43.2 44.8 52.23 42.2 9.03-2.7 15.5-56.3 21.24-63.7 5.8-7.5 56.1-27.3 56.3-36.7.3-9.4-48.7-32.1-54-39.88-5.3-7.77-8.6-61.7-17.4-64.86z"/>
    <path :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)" :class="['starCenter']" d="M280 30c9.4 0 30.66 49.66 38.27 55.2 7.6 5.5 61.4 10.4 64.3 19.33 2.92 8.94-37.74 44.5-40.65 53.45-2.9 8.94 9.1 61.62 1.48 67.14-7.6 5.53-54-22.15-63.4-22.15-9.4 0-55.8 27.68-63.4 22.15-7.6-5.52 4.38-58.2 1.48-67.14-2.9-8.94-43.57-44.5-40.66-53.45 2.9-8.94 56.7-13.82 64.3-19.34C249.35 79.6 270.6 30 280 30z"/>
    <!-- text x="157.9599" y="218.87691">
      <tspan
         x="279.41739"
         y="250.1487"
         font-size="23.21802139px"
         style="font-size:21.33333397px;line-height:24.78523636px;text-align:center;text-anchor:middle"
         id="tspan25">This is a</tspan>
      <tspan
         x="279.41739"
         y="274.93393"
         font-size="23.21802139px"
         style="font-size:21.33333397px;line-height:24.78523636px;text-align:center;text-anchor:middle"
         id="tspan27">star center</tspan>
    </text>
    <text id="text23" y="245.40207" x="43.991886">
      <tspan
         id="tspan19"
         style="font-size:21.33333333px;line-height:24.78523636px;text-align:center;text-anchor:middle;"
         font-size="23.21802139px"
         y="276.67386"
         x="165.44937">This is a</tspan>
      <tspan
         id="tspan21"
         style="font-size:21.33333333px;line-height:24.78523636px;text-align:center;text-anchor:middle;"
         font-size="23.21802139px"
         y="301.45911"
         x="165.44937">star left</tspan>
    </text>
    <text y="243.1517" x="276.91971">
      <tspan
         id="tspan31"
         style="font-size:21.33333333px;line-height:24.78523636px;text-align:center;text-anchor:middle;"
         font-size="23.21802139px"
         y="274.42349"
         x="398.3772">This is a</tspan>
      <tspan
         id="tspan33"
         style="font-size:21.33333333px;line-height:24.78523636px;text-align:center;text-anchor:middle;"
         font-size="23.21802139px"
         y="299.20871"
         x="398.3772">star right</tspan>
    </text -->


    <foreignObject class="label left"   >
      <p>{{items[0].name}}</p>
    </foreignObject>
    <foreignObject class="label center" >
      <p>{{items[1].name}}</p>
    </foreignObject>
    <foreignObject class="label right"  >
      <p>{{items[2].name}}</p>
    </foreignObject>

    <!-- text x="-3.51089" y="252.39908">
      <tspan v-for="word in items[1].name.split(' ')" text-anchor="middle">{{word}}</tspan>
    </text -->
    <!--text x="235.66579" y="250.1487" stroke-width=".43533787" font-family="sans-serif" font-size="11.60900879px" font-weight="400" letter-spacing="0" style="line-height:11.60900879px" transform="translate(-3.4461685)" word-spacing="0">
    <tspan x="235.66579" y="250.1487" font-size="23.21802139px" style="line-height:24.78523636px;text-align:center" text-anchor="middle">Star</tspan>
    <tspan x="235.66579" y="274.93393" font-size="23.21802139px" style="line-height:24.78523636px;text-align:center" text-anchor="middle">right</tspan>
    </text-->
  </svg>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'StarsSVGInline',
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
  height: 100%;
}

svg.stars path {
  backface-visibility: hidden;
  perspective: 1000;

  transition: transform 0.2s;
  stroke: #facfa3;
  stroke-width: 1.25%;
  filter:url(#dropshadow);
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
  transform: translate(31.5%, 58%);
}
.label.right {
  transform: translate(54%,69%);
}


</style>
