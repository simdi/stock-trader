import Vue from 'vue';
import Vuex from 'vuex';

import StocksModule from '@/store/modules/stocks';
import PortfolioModule from '@/store/modules/portfolio';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {},
	modules: {
		StocksModule,
		PortfolioModule
	}
});

export default store;
