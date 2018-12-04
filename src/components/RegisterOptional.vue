<template>
  <v-form id="register-opt" ref="registerFormOpt" v-model="valid" @submit.prevent="handleSubmit">
    <h1>More info</h1>
    <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs6 sm6 d-flex>
        <v-select
          :items="years"
          v-model="birthYear"
          label="Birth year"
        ></v-select>
      </v-flex>
      <v-flex xs6 sm6 d-flex>
        <v-select
          :items="['Female', 'Male', 'Other']"
          label="Gender"
          v-model="gender"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm12 d-flex>
        <v-text-field
          :rules="[rules.email]"
          name="Email"
          label="Email"
          v-model="email"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm12 d-flex>
        <v-select
          :items="levels"
          label="English comprehension"
          v-model="topicKnowledge"
        ></v-select>
      </v-flex>
      <v-flex xs6 sm6 d-flex>
        <v-btn block class="white--text" color="cyan darken-1" ripple>Clear</v-btn>
      </v-flex>
      <v-flex xs6 sm6 d-flex>
        <v-btn block class="white--text" color="cyan darken-1" type="submit" ripple>Submit</v-btn>
      </v-flex>
    </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'RegisterOptional',
  data(){
    return {
      date: null,
      menu: false,
      loading: false,
      valid: true,
      levels: [
        {text: '0 - No proficiency',                   value: '0'} ,
        {text: '1 - Elementary proficiency',           value: '1'} ,
        {text: '2 - Limited working proficiency',      value: '2'} ,
        {text: '3 - Professional working proficiency', value: '3'} ,
        {text: '4 - Full professional proficiency',    value: '4'} ,
        {text: '5 - Native or bilingual proficiency',  value: '5'} ,
      ],
      years: Array(110).fill().map((v, i) => -i+new Date().getFullYear()),
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || value === '' || 'Invalid e-mail.';
        }
      }
    };
  },
  computed: {
    ...mapState(['token']),
    topicKnowledge: {
      get(){
        return this.$store.state.registerFormOpt.topicKnowledge;
      },
      set(value){
        this.$store.commit('updateRegisterFormOptTopicKnowledge', value);
      }
    },
    birthYear: {
      get(){
        return this.$store.state.registerFormOpt.birthYear;
      },
      set(value){
        this.$store.commit('updateRegisterFormOptBirthYear', value);
      }
    },
    gender: {
      get(){
        return this.$store.state.registerFormOpt.gender;
      },
      set(value){
        this.$store.commit('updateRegisterFormOptGender', value);
      }
    },
    email: {
      get(){
        return this.$store.state.registerFormOpt.email;
      },
      set(value){
        this.$store.commit('updateRegisterFormOptEmail', value);
      }
    },
  },
  methods: {
    async handleSubmit(){
      if(this.$refs.registerFormOpt.validate()){
        this.loading = true;
        try {
          await this.$store.dispatch('registerOpt', {
            fields: {
              gender    : this.gender,
              birthYear : this.birthYear,
              email     : this.email,
              topicKnowledge: this.topicKnowledge
            }
          });
          this.clearForm();
          this.loading = false;
          this.$router.push({name: 'game'});
        } catch(e){
          this.loading = false;
          // TODO error handling
          console.log('XXXXXXXXXXXXXXXXXXX err 2', e);
        }
      }
    },
    clearForm(){
      this.$refs.registerFormOpt.reset();
    }
  }
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

h1 { color: #636363; }

h3 { color: #4a89dc; }

.group {
  position: relative;
  margin-bottom: 45px;
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  -webkit-appearance: none;
  display: block;
  background: #fafafa;
  color: #636363;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #757575;
}

input:focus { outline: none; }


/* Label */

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all 0.2s ease;
}


/* active */

input:focus ~ label, input.used ~ label {
  top: -20px;
  transform: scale(.75); left: -2px;
  /* font-size: 14px; */
  color: #4a89dc;
}

/* Button */

.button {
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  margin: .3em 0 1em 0;
  width: 100%;
  vertical-align: middle;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  letter-spacing: 1px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #3160B6;
  cursor: pointer;
  transition: all 0.15s ease;
}
.button:focus { outline: 0; }


/* Button modifiers */

.buttonBlue {
  background: #4a89dc;
  text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);
}

.buttonBlue:hover { background: #357bd8; }

#register-form, #register-opt {
  width: 100%;
}

</style>
