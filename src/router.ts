import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css'

Vue.use(Router);

const router = new Router({
	mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        { path: '/portfolio', name: 'portfolio', component: () => import('./views/portfolio/Portfolio.vue') },
        { path: '/stocks', name: 'stocks', component: () => import('./views/stocks/Stocks.vue') },
    ],
});
router.beforeResolve((to, from, next) => {
	// If this isn't an initial page load.
	if (to.name) {
		// Start the route progress bar.
		NProgress.start();
	}
	next();
});

router.afterEach((to, from) => {
	// Complete the animation of the route progress bar.
	NProgress.done();
});

export default router;
