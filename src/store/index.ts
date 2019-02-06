import Vue from 'vue';
import Vuex from 'vuex';

import StocksModule from '@/store/modules/stocks';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {},
	modules: {
		StocksModule
	}
});

export default store;
