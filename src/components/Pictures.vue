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
    <path :data-position="items[0].position" v-on:click="() => selectItem(items[0].position)" :class="['starLeft']"   d="M129.783 1.78h121.67v79.927h-121.67z"/>
    <path :data-position="items[1].position" v-on:click="() => selectItem(items[1].position)" :class="['starRight']"  d="M1.779 49.028h121.67v79.927H1.779z"/>
    <path :data-position="items[2].position" v-on:click="() => selectItem(items[2].position)" :class="['starCenter']" d="M257.787 49.028h121.67v79.927h-121.67z"/>

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


    <foreignObject class="label left"   width="550" height="150">
      <p>{{items[0].name}}</p>
    </foreignObject>
    <foreignObject class="label center" width="550" height="150">
      <p>{{items[1].name}}</p>
    </foreignObject>
    <foreignObject class="label right"  width="550" height="150">
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
