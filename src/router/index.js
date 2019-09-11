// 路由器对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'
//引进四个路由
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用路由
Vue.use(VueRouter)

export default new VueRouter({
	//存放所有的路由
	routes:[
		{path:'/',redirect:'/msite'},
		{path:'/msite',component:Msite,meta:{
			showFooter:true
		}},
		{path:'/search',component:Search,meta:{
			showFooter:true
		}},
		{path:'/order',component:Order,meta:{
			showFooter:true
		}},
		{path:'/profile',component:Profile,meta:{
			showFooter:true
		}},
		{path:'/login',component:Login}
	]
})