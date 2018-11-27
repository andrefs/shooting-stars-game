import Vue from 'vue';

import {
  VApp,
  VBtn,
  VCard,
  VChip,
  VDataTable,
  VDialog,
  VFooter,
  VForm,
  VGrid,
  VIcon,
  VJumbotron,
  VList,
  VMenu,
  VProgressCircular,
  VTextField,
  VToolbar,
  VTooltip,
  VSnackbar,
  Vuetify,
  transitions
} from 'vuetify';
import {Resize} from 'vuetify/es5/directives';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VChip,
    VDataTable,
    VDialog,
    VFooter,
    VForm,
    VGrid,
    VIcon,
    VJumbotron,
    VList,
    VMenu,
    VProgressCircular,
    VTextField,
    VSnackbar,
    VToolbar,
    VTooltip,
    transitions
  },
  theme: {
    primary   : '#ee44aa',
    secondary : '#424242',
    accent    : '#82B1FF',
    error     : '#FF5252',
    info      : '#2196F3',
    success   : '#4CAF50',
    warning   : '#FFC107'
  },
  directives: {
    Resize
  }
});

