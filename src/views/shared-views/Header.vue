<template>
	<div>
		<h1>Header Component</h1>
	</div>
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
