<template>
	<div class="row">
		<stock-component v-for="stock in stocks" :key="stock.id" :stock="stock"></stock-component>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import StockComponent from './Stock.vue';

import { Stock } from '@/models';
import StockModule from '@/store/modules/stocks';

@Component({
	components: {
		StockComponent
	}
})
export default class StocksComponent extends Vue {
	get stocks() {
		return this.$store.getters.getStocks;
	}
}
</script>

<style scoped lang="scss">
</style>
