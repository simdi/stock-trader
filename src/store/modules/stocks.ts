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
        state.stocks.forEach((stock: Stock) => {
			stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
		});
	}
};

const getters = {
	[GET_STOCKS](state: any): Stock {
		return state.stocks;
	}
};

const actions = {
	[BUY_STOCKS]({commit, rootState}: any, stock: Stock): void {
		commit(`PortfolioModule/${BUY_STOCKS}`, stock, { root: true });
	},
	[SET_STOCKS]({ commit }: any): any {
		commit(SET_STOCKS, stocks);
	},
	[RND_STOCKS]({commit}: any): void {
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
