import Vue from 'vue';
import Vuex from 'vuex';
import state from './initialStore';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
export default store;
