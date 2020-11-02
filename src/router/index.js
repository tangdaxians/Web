import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
	Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const Routers = [];

const e = require.context('@/components/Element', false, /\.vue$/)
const v = require.context('@/components/Vant', false, /\.vue$/)

e.keys().map(e).forEach(i=>{
	var name = i.default.name;
	Routers.push({
		path: name, name, component: resolve => require(['@/components/Element/'+name.slice(1)], resolve),
	});
})
v.keys().map(v).forEach(i=>{
	var name = i.default.name;
	Routers.push({
		path: name, name, component: resolve => require(['@/components/Vant/'+name.slice(1)], resolve),
	});
})

export default new Router({
	mode:"history",
	routes: [
		{
			path: '/',
			name: 'Index',
			component: resolve => require(['@/components/index'], resolve),
			children:[...Routers]
		}
	]
})
