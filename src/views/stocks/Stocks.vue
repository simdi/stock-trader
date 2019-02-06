<template>
	<div class="row">
		<stock-component v-for="stock in stocks" :key="stock.id" :stock="stock"></stock-component>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import StockComponent from './Stock.vue';
import { Stock } from '@/models';
import StockModule from '@/store/modules/stocks';
import { GET_STOCKS } from '@/store/types';

@Component({
	components: {
		StockComponent
	},
	computed: {
		...mapGetters('StocksModule', {
			stocks: GET_STOCKS
		})
	}
})
export default class StocksComponent extends Vue {

}
</script>

<style scoped lang="scss">
</style>
