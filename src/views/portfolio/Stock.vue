<template>
	<div class="col-sm-6 col-md-4 mb-4">
		<div class="card">
			<div class="card-header bg-success text-white text-left">
				{{ stock.name }}
				<small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
			</div>
			<div class="card-body">
				<div class="row no-margin">
					<div class="col-8">
						<input class="form-control" type="number" v-model="stock.quantity" placeholder="Quantity">
					</div>
					<div class="col-4">
						<button class="btn btn-success" @click="sellStock();" :disabled="validateInput(stock.quantity)">Sell</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { Stock } from '@/models';
import { BUY_STOCKS, SELL_STOCKS } from '@/store/types';

@Component({
	computed: {
		...mapActions('PortfolioModule', {
			SELL_STOCKS,
		})
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

	private sellStock(): void {
		const stock: Stock = <Stock> {
			id: this.stock.id,
			name: this.stock.name,
			price: this.stock.price,
			quantity: this.stock.quantity
		};
		console.log('Payload', stock);
		// this.$store.dispatch('');
		this.$props.SELL_STOCK(stock);
	}
	// Computed methods
	validateInput(quantity: number): Boolean {
		return (quantity <= 0 || !Number.isInteger(quantity)) ? true : false;
	}
}
</script>

<style scoped lang="scss">
</style>
