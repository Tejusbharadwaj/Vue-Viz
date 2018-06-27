import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import initialState from './initial-state';
import * as getters from './getters';

Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state: initialState(),
});
