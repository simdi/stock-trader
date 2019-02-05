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

	@Component({
		components: {
			HeaderComponent
		}
	})
	export default class AppComponent extends Vue {

	}
</script>


<style lang="scss">
	.container {
		padding: 20px !important;
	}
</style>
