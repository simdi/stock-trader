<template>
	<div id="app">
		<HeaderComponent></HeaderComponent>
		<div class="container">
		<transition name="slide" mode="out-in">
			<router-view/>
		</transition>
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
	.slide-enter-active {
        animation: slide-in 100ms ease-out forwards;
	}
	.slide-enter-active {
        animation: slide-out 100ms ease-out forwards;
	}
	@keyframes slide-in {
        from {
			transform: translateY(-30px);
			opacity: 0;
		}
        to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-out {
        from {
			transform: translateY(0);
			opacity: 1;
		}
        to {
			transform: translateY(-30px);
			opacity: 0;
		}
	}
</style>
