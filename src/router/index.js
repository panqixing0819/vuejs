import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

//路由配置
import Frist from '../components/first.vue'
import second from '../components/second.vue'
import arrimg from '../components/imgDetali.vue'
import mainimg from '../components/mainImg.vue'
import everyDay from '../components/menu/everyDay.vue';//日期
import list from "../components/list.vue";//列表


//侧边栏
import fuli from '../components/menu/fuli.vue';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      redirect:'/mainimg',//重定向
    },
    {
      path: '/second/:id',
      name:"second",
      component: second,
    },
     {
      path: '/mainimg',
      component:mainimg,
    },
    {
      path: '/first',
      name:"first",
      component:Frist
    },
   {
     path: '/mainimg1',
    component:arrimg,
   },
   {
     path: '/fuli',
     name : "fuli",
     component:fuli,
   },{
     path: '/everyDay',
    component:everyDay
   },{
     path: '/list/:id',
     name: "list", 
     component:list
   }
  ],
 
})
