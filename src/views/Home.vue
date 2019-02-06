<template>
    <div class="home">
        <h1>Trade or View your portfolio</h1>
		<h6>You may Save & Load your data</h6>
		<h6>Click on 'End Day' to begin a New Day!</h6>
		<hr>
		<p>Your Funds: {{ funds }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { GET_FUNDS } from '@/store/types';

@Component({
	components: {
	},
	computed: {
		...mapGetters('PortfolioModule', {
			funds: GET_FUNDS
		})
	}
})
export default class Home extends Vue {

}
</script>
