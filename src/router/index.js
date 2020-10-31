import Vue from 'vue'
import Router from 'vue-router'

import vr from "./modules/vant"
import er from "./modules/element"

Vue.use(Router)

const originalPush = Router.prototype.push
	Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default new Router({
	mode:"history",
	routes: [
		{
			path: '/',
			name: 'Index',
			component: resolve => require(['@/components/index'], resolve),
			children:[ ...vr, ...er ]
		}
	]
})
