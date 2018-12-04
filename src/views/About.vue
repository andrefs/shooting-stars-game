<template>
  <v-container fluid>
    <v-layout align-center>
    <LogoCorner />
    <v-flex xs12 sm8 offset-sm2 >
      <div class="box">
        <h1>About</h1>
        <p>Who is the intruder? Can you guess which musical artist is the least related with the other two? If your opinion matches at least one of the other two payers, you score. So, it's not really about your opinion but whether <b>you can guess other people's opinions</b>!</p>
        <p>You will win this game if you match the opinion of most people. And you may ask: what is in for you, the developers of Shooting Stars? Fair question, since you are not paying for it and it has no advertising. Believe it or not, we are genuinely interested in you opinion :-)</p>
        <p>Shooting Stars was developed to collect opinions on <a href="https://en.wikipedia.org/wiki/Named_entity" target=”_blank”>named entities</a> relationships using gamification. We are recording statistics of the responses and we will produce a dataset that will be used as a benchmark to analyse and tune semantic measures. Sounds weird? Don't worry, just enjoy Shooting Stars and share it with your friends. The more more data we collect the more accurate our benchmark will be. But if you want to know more fell free to drop us a line.</p>
        <p>We hope you find this game fun!</p>
        <p class="text-xs-center"> And don't forget to share it with your friends ;-)</p>

        <div class="text-xs-center">
          <p>André Santos <a href="mailto:afs@inesctec.pt">afs@inesctec.pt</a></p>
          <p> José Paulo Leal <a href="mailto:zp@dcc.fc.up.pt"> zp@dcc.fc.up.pt </a></p>
          <p> Teresa Costa </p>
        </div>
      </div>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LogoCorner from '../components/LogoCorner.vue';

export default {
  components: {LogoCorner},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* { box-sizing:border-box; }

body {
  font-family: Helvetica;
  background: #eee;
  -webkit-font-smoothing: antialiased;
}

hgroup {
  text-align:center;
  margin-top: 4em;
}

h1, h3 { font-weight: 300; }

h1 {
  color: #636363;
  margin-bottom: 0.5em;
}

h3 { color: #4a89dc; }

.box {
    margin: 0 auto;
    padding: 2em 1em 1em 1em;
    background: #fafafa;
    border: 1px solid #ebebeb;
    box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px, rgba(0,0,0,0.09804) 0px 1px 2px 0px;
}
</style>
