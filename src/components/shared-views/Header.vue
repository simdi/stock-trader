<template>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/portfolio" class="navbar-brand">Stock Trader</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<router-link class="nav-item active" activeClass="active" to="/portfolio" tag="li"><a class="nav-link">Portfolios</a></router-link>
				<router-link class="nav-item active" activeClass="active" to="/portfolio" tag="li"><a class="nav-link">Stocks</a></router-link>
			</ul>
			<div class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</div>
		</div>
	</nav>

</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class HeaderComponent extends Vue {
		mounted() {
			console.log('Header Component');
		}
	}
</script>

<style scoped lang="scss">

</style>
