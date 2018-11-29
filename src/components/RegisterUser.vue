<template>
  <v-form id="register-form" ref="registerForm" v-model="valid" @submit.prevent="handleSubmit">
    <h1>Register</h1>
    <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 md6 d-flex>
        <v-text-field
          :rules="[rules.required, rules.min]"
          name="Username"
          label="Username"
          v-model="username"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 md6 d-flex>
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
      </v-flex>
    </v-layout>
    </v-container>
    <button type="submit" class="button buttonBlue">Register
      <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
    </button>
  </v-form>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'RegisterUser',
  data(){
    return {
      loading: false,
      valid: true,
      showPwd: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => (v||'').length >= 8 || 'Min 8 characters',
      }
    };
  },
  computed: {
    ...mapState(['token']),
    username: {
      get(){
        return this.$store.state.registerForm.username;
      },
      set(value){
        this.$store.commit('updateRegisterFormUsername', value);
      }
    },
    password: {
      get(){
        return this.$store.state.registerForm.password;
      },
      set(value){
        this.$store.commit('updateRegisterFormPassword', value);
      }
    },
  },
  methods: {
    async handleSubmit(){
      if(this.$refs.registerForm.validate()){
        this.loading = true;
        try {
          await this.$store.dispatch('register', {
            fields: {
              username : this.username,
              password : this.password,
              token    : this.token
            }
          });
          this.clearForm();
          this.loading = false;
          // this.$router.push({name: 'game'});
        } catch(e){
          this.loading = false;

          // TODO is this the best error code?
          if(e.response && e.response.status === 401){
            // Vue.$snackbar.show();
            this.$toast.open({text: 'Username already exists', type:'warning'});
          }
        }
      }
    },
    clearForm(){
      this.$refs.registerForm.reset();
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

#register-form {
  width: 100%;
}

</style>
