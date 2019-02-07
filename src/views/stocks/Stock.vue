<template>
	<div class="col-sm-6 col-md-4 mb-4">
		<div class="card">
			<div class="card-header bg-success text-white text-left">
				{{ stock.name }}
				<small>(Price: {{ stock.price }})</small>
			</div>
			<div class="card-body">
				<div class="row no-margin">
					<div class="col-8">
						<input class="form-control" type="number" v-model="quantity"
						:class="{ danger: insufficientFund }"
						placeholder="Quantity">
					</div>
					<div class="col-4">
						<button class="btn btn-success" @click="buyStock();" :disabled="validateInput(quantity)">{{ insufficientFund ? 'Insufficient Funds': 'Buy'}}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { Stock } from '@/models';
import { BUY_STOCKS, GET_FUNDS } from '@/store/types';
import { mapActions, mapGetters } from 'vuex';

@Component({
	computed: {
		...mapGetters('PortfolioModule', {
			funds: GET_FUNDS
		}),
		...mapActions('PortfolioModule', {
			actionBuyStock: BUY_STOCKS
		}),
	},
	props: {
		stock: {
			type: Object as () => Stock,
			required: false
		}
	}
})
export default class StockComponent extends Vue {
	@Prop() public stock!: Stock;
	private quantity: number = 0;

	private buyStock(): void {
		const stock: Stock = <Stock> {
			id: this.stock.id,
			name: this.stock.name,
			price: this.stock.price,
			quantity: this.quantity
		};
		console.log('Payload', stock);
		// this.actionBuyStock(stock);
		this.$store.dispatch(`StocksModule/${BUY_STOCKS}`, stock);
	}
	// Computed methods
	private validateInput(quantity: number): Boolean {
		// return (this.insufficientFund || quantity <= 0 || !Number.isInteger(quantity)) ? true : false;
		return false;
	}

	get insufficientFund(): Boolean {
		return this.quantity * this.stock.price > this.funds;
	}
}
</script>

<style scoped lang="scss">
	.danger {
		border: 1px solid red;
	}
</style>
