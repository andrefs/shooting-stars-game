import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VDataTable,
  VFooter,
  VChip,
  VForm,
  VBtn,
  VJumbotron,
  VTextField,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VDataTable,
    VFooter,
    VChip,
    VForm,
    VBtn,
    VIcon,
    VGrid,
    VTextField,
    VToolbar,
    VJumbotron,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
});

