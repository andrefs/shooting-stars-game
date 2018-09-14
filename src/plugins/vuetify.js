import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VDataTable,
  VResponsive,
  VTooltip,
  VProgressCircular,
  VFooter,
  VChip,
  VForm,
  VCard,
  VBtn,
  VDialog,
  VJumbotron,
  VTextField,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify';
import {Resize} from 'vuetify/es5/directives';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VDataTable,
    VFooter,
    VChip,
    VDialog,
    VForm,
    VBtn,
    VCard,
    VProgressCircular,
    VIcon,
    VTooltip,
    VGrid,
    VTextField,
    VResponsive,
    VToolbar,
    VJumbotron,
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

