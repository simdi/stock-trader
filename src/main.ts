import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-a8bae.firebaseio.com/';

Vue.filter('currency', value => {
	return `$${value.toLocaleString()}`;
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
