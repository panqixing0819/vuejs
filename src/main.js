// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import vueLazyload from 'vue-lazyload';
import infinityScroll from 'vue-infinite-scroll';
import  routers from './router/index';
import swiper from 'vue-awesome-swiper';//引入滑块插件
import $ from 'jquery';



//滑块
Vue.use(swiper);

//无限加载
Vue.use(infinityScroll);

//注册ajax
Vue.use(vueResource);

//懒加载
Vue.use(vueLazyload,{
	 preLoad:1,
//	error: 'dist/error.png',
//	loading: 'static/img/load.gif',
  try: 1 // default 1
})


Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

 new Vue({
  router: routers,
  render: h => h(App)
}).$mount('#pp')
