import Vue from 'vue';
import Vuex from 'vuex';
import createLoadingPlugin from 'utils/vuex-loading';
import test from './module/test';
import test1 from './module/test1';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createLoadingPlugin()],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    test,
    test1
  },
});
