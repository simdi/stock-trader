import Vue from 'vue';
import Vuex from 'vuex';

import stock from '@/store/modules/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  modules: {
	stock
  }
});
