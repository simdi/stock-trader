<template>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/portfolio" class="navbar-brand"><a>Stock Trader</a></router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<router-link class="nav-item active" activeClass="active" to="/portfolio" tag="li"><a class="nav-link">Portfolios</a></router-link>
				<router-link class="nav-item active" activeClass="active" to="/stocks" tag="li"><a class="nav-link">Stocks</a></router-link>
			</ul>
			<div class="form-inline my-2 my-lg-0">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#">End Day</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Save & Load
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
					</ul>
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
