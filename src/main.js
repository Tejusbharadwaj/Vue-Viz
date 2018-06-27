import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Vuex from 'vuex';
import App from './App.vue';
import Store from './store';

Vue.use(VueI18n);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store: Store,
  el: '#app',
  render: h => h(App),
});
