<template>
  <div class="share-bar">
    <vue-goodshare-facebook      has_icon  />
    <vue-goodshare-reddit        has_icon  />
    <vue-goodshare-twitter       has_icon  />
    <vue-goodshare-google-plus   has_icon  />
    <vue-goodshare-email         has_icon  />
  </div>
</template>

<script>
// Import vue-goodshare single elements
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue';
import VueGoodshareReddit from 'vue-goodshare/src/providers/Reddit.vue';
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue';
import VueGoodshareGooglePlus from 'vue-goodshare/src/providers/GooglePlus.vue';
import VueGoodshareEmail from 'vue-goodshare/src/providers/Email.vue';
// import mutliple
import VueGoodshare from 'vue-goodshare';

export default {
  name: 'HelloSocial',
  components:{
    VueGoodshareFacebook,
    VueGoodshareReddit,
    VueGoodshareTwitter,
    VueGoodshareGooglePlus,
    VueGoodshareEmail,
    VueGoodshare
  }
};
</script>

<style>
.share-bar {
  position:fixed;
  z-index: 10;
  left: 0;

    font-size: 0.7em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
