const elementRouter = [
	{
		path:"ebutton",
		name:"ebutton",
		component: resolve => require(['@/components/Element/button'], resolve),
	},
	{
		path:"etag",
		name:"etag",
		component: resolve => require(['@/components/Element/tag'], resolve),
	},
]

export default elementRouter
