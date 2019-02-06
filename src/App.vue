<template>
	<div id="app">
		<HeaderComponent></HeaderComponent>
		<div class="container">
			<router-view/>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import HeaderComponent from './components/shared-views/Header.vue';
	import { SET_STOCKS } from '@/store/types';
import { mapActions } from 'vuex';

	@Component({
		components: {
			HeaderComponent
		},
		...mapActions('StockModule', {
			SET_STOCKS
		})
	})
	export default class AppComponent extends Vue {
		created() {
			this.$store.dispatch(`StocksModule/${SET_STOCKS}`);
		}
	}
</script>


<style lang="scss">
	.container {
		padding: 20px !important;
	}
</style>
