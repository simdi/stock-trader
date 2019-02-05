<template>
	<div>
		<h1>{{ title }}</h1>
		<ul>
			<li></li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Stock } from '@/models/index';

@Component
export default class StocksComponent extends Vue {
	private stocks: Stock[] = [];
	private title: String = '';

	constructor() {
		super();
		this.title = 'This is a title for ts';
		this.stocks = [
			{ id: 1, name: 'BMW', price: 300 },
			{ id: 2, name: 'Google', price: 1000 },
			{ id: 3, name: 'Microsoft', price: 500 },
			{ id: 4, name: 'Twitter', price: 200 }
		];
	}
	created() {
		console.log('this is awesome');
	}
}
</script>

<style scoped lang="scss">
</style>
