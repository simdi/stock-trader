<template>
	<div>
		<stock-component v-for="stock in stocks" :stock="stock" :key="stock.id"></stock-component>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import StockComponent from './Stock.vue';

@Component({
	computed: {
		...mapGetters('PortfolioModule', {
			stocks: 'stockPortfolio'
		}),
	},
	components: {
		StockComponent
	}
})
export default class PortfolioComponent extends Vue {
}
</script>

<style scoped lang="scss">
</style>
