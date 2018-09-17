<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <LogoCorner />
        <v-form id="login-form" ref="loginForm" v-model="valid" @submit.prevent="handleSubmit">
          <h1>Login</h1>
          <v-text-field
            :rules="[rules.required, rules.min]"
            name="Username"
            label="Username"
            v-model="username"
            required
          ></v-text-field>
          <v-text-field
            :append-icon="showPwd ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="showPwd ? 'text' : 'password'"
            v-model="password"
            name="password"
            label="Password"
            hint="At least 8 characters"
            @click:append="showPwd = !showPwd"
          ></v-text-field>
          <button type="submit" class="button buttonBlue">Login
            <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
          </button>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex';
import LogoCorner from '../components/LogoCorner.vue';

export default {
  data(){
    return {
      loading: false,
      valid: true,
      showPwd: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    };
  },
  components: {LogoCorner},

  computed: {
    username: {
      get(){
        return this.$store.state.loginForm.username;
      },
      set(value){
        this.$store.commit('updateLoginFormUsername', value);
      }
    },
    password: {
      get(){
        return this.$store.state.loginForm.password;
      },
      set(value){
        this.$store.commit('updateLoginFormPassword', value);
      }
    },
  },

  methods: {
    ...mapActions(['postLogin']),
    async handleSubmit(){
      if(this.$refs.loginForm.validate()){
        this.loading = true;
        try {
          await this.$store.dispatch('login', {
            fields: {
              username: this.username,
              password: this.password
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
      this.$refs.loginForm.reset();
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

form {
  width: 380px;
  margin: 4em auto;
  padding: 3em 2em 2em 2em;
  background: #fafafa;
  border: 1px solid #ebebeb;
  box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;
}

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

#login-form {
  width: 100%;
}
</style>
