import { Stock } from '../../models';
import { SET_STOCKS, RND_STOCKS, BUY_STOCKS, GET_STOCKS } from '../types';
import stocks from '@/data/stocks';

const state: any = {
	stocks: []
};

const mutations = {
	[SET_STOCKS](state: any, stocks: Stock): void {
		state.stocks = stocks;
	},
	[RND_STOCKS](state: any): void {

	}
};

const getters = {
	[GET_STOCKS](state: any): Stock {
		return state.stocks;
	}
};

const actions = {
	[BUY_STOCKS]({commit}: any, stock: Stock): void {
		commit(BUY_STOCKS, stock);
	},
	[SET_STOCKS]({ commit }: any): any {
		commit(SET_STOCKS, stocks);
	},
	randomizeStocks({commit}: any): void {
		commit(RND_STOCKS);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
