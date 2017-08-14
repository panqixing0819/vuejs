// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import vueResource from 'vue-resource';
import vueLazyload from 'vue-lazyload';
import infinityScroll from 'vue-infinite-scroll';
import  routers from './router/index';
import swiper from 'vue-awesome-swiper';//引入滑块插件
import $ from 'jquery';
import axios from "axios"



//引入axios
// Vue.prototype.$http = axios;

//vuex组件管理
Vue.use(Vuex);

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

const store=new Vuex.Store({//vuex管理
  state : {
    this_off : false,
    this_right :false,
    title:"福利",
  },
   mutations : {
     change(state){
        state.this_off= true;
        // state.this_right = true;
     },
     change_off(state){
       state.this_off= false;
        state.this_right = true;
     },
     title_change(state,title){
       state.title=title;
     }
   }
})



Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

let vm=new Vue({
  router: routers,
  render: h => h(App),
  store :store
}).$mount('#pp')
