import { Stock } from "@/models";
import { BUY_STOCKS, SELL_STOCKS } from '@/store/types';

const state = {
	funds: 10000,
	stocks: []
};

const mutations: any = {
	[BUY_STOCKS](state: any, { id, quantity, price }: Stock) {
		const record = state.stocks.find((x: Stock) => x.id === id);
		if (record) {
			record.quantity += quantity;
		} else {
			state.stocks.push({ id, quantity });
		}
		state.funds -= price * quantity;
	},
	[SELL_STOCKS](state: any, { id, quantity, price }: Stock) {
		const record = state.stocks.find((x: Stock) => x.id === id);
		if (record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			state.stocks.splice(state.stocks.indexOf(record), 1);
		}
		state.funds += price * quantity;
	}
};

const actions: any = {
	[SELL_STOCKS]({ commit }: any, stock: Stock) {
		commit(SELL_STOCKS, stock)
	}
};

const getters: any = {
	stockPortfolio (state: any, getters: any): Stock {
		return state.stocks.map((stock: Stock) => {
			const record = getters.stocks.find((x: Stock) => x.id === stock.id);
			return {
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price
			};
		});
	},
	funds(): any {
		return state.funds;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
