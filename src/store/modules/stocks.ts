import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';

import store from '@/store';
import { Stock } from '@/models';
import { SET_STOCKS } from '../types';

@Module({
	namespaced: true,
	name: 'stocks',
	store
})
class StockModule extends VuexModule {
	public stock: Stock = <Stock>{};
	public stocks: Stock[] = [];

	@Mutation
	[SET_STOCKS] (state: any, stock: Stock): void {
		state.stocks = stock;
	}

	@Action
	buyStock({commit}: any, stock: Stock): void {
		commit();
	}
	@Action
	setStock({commit}: any) {
		commit(SET_STOCKS);
	}
}

export default getModule(StockModule);
