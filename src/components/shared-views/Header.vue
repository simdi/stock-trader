<template>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/" class="navbar-brand"><a>Stock Trader</a></router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<router-link class="nav-item active" activeClass="active" to="/portfolio" tag="li"><a class="nav-link">Portfolios</a></router-link>
				<router-link class="nav-item active" activeClass="active" to="/stocks" tag="li"><a class="nav-link">Stocks</a></router-link>
			</ul>
			<strong class="navbar-text navbar-right text-right">Funds: {{ funds | currency }}</strong>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#" @click="endDay();">End Day</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Save & Load
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<a class="dropdown-item" href="#" @click="saveData();">Save Data</a>
					<a class="dropdown-item" href="#">Another action</a>
					<a class="dropdown-item" href="#">Something else here</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>

</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import { GET_FUNDS, RND_STOCKS, GET_STOCKS } from '@/store/types';
import { mapGetters, mapActions } from 'vuex';

	@Component({
		computed: {
			...mapGetters('PortfolioModule', {
				funds: GET_FUNDS,
				stockPortfolio: 'stockPortfolio'
			}),
			...mapGetters('StocksModule', {
				stocks: GET_STOCKS
			})
		}
	})
	export default class HeaderComponent extends Vue {
		mounted() {
			console.log('Header Component');
		}

		private endDay(): void {
            // this.randomizeStocks();
			this.$store.dispatch(`StocksModule/${RND_STOCKS}`);
		}

		private saveData(): void {
            const data: any = {
                funds: this.funds,
				stockPortfolio: this.stockPortfolio,
				stocks: this.stocks
			};
console.log('payload', data);
			this.$http.put('data.json', data).then(res => res.json()).then(res => {
				console.log('Res', res);
			}).catch(err => {
				console.log('ERr', err);
			});
			localStorage.setItem('data', JSON.stringify(data));
		}
	}
</script>

<style scoped lang="scss">

</style>
