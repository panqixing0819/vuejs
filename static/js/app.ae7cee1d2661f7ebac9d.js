webpackJsonp([0],[,,,,,,,,,,,,,function(t,e,a){a(64);var n=a(0)(a(45),a(94),"data-v-bf4b9c92",null);t.exports=n.exports},function(t,e,a){"use strict";(function(t){var n=a(6),i=a(5),s=a(71),r=(a.n(s),a(72)),o=a.n(r),c=a(81),u=a.n(c),f=a(13),l=a.n(f),d=a(77),p=a.n(d),h=a(78),m=a.n(h),v=a(75),_=a.n(v),g=a(79),w=a.n(g);n.a.use(i.a),e.a=new i.a({mode:"history",base:t,routes:[{path:"/",redirect:"/mainimg"},{path:"/second/:id",name:"second",component:u.a},{path:"/mainimg",component:p.a},{path:"/first",name:"first",component:o.a},{path:"/mainimg1",component:l.a},{path:"/fuli",name:"fuli",component:w.a},{path:"/everyDay",component:m.a},{path:"/list/:id",name:"list",component:_.a}]})}).call(e,"/")},,,,function(t,e,a){a(58);var n=a(0)(a(40),a(86),"data-v-69697fcf",null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=a(12),a(54)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var a in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(a)&&t.options[a]&&(e=!0,t.defaultSwiperClasses[a]=t.options[a]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(i):i()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(74),i=a.n(n),s=a(73),r=a.n(s),o=a(76),c=a.n(o);e.default={name:"app",data:function(){return{off:"",off1:""}},components:{Top:i.a,footTer:r.a,Load:c.a},created:function(){},computed:{data_off:function(){return this.$store.state.this_off},data_right:function(){return this.$store.state.this_right}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"我是1"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{ios:"ios",android:"android",fuli:"福利"}},methods:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(80),i=a.n(n);e.default={name:"head",data:function(){return{page1:"",off:!1}},components:{meun:i.a},created:function(){},methods:{hua:function(){this.off=!this.off},show:function(){this.off=!1}},computed:{title:function(){return this.$store.state.title}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),i=a.n(n),s="";e.default={props:["dataimg","dataTime"],data:function(){return{src1:this.dataimg,time:this.dataTime,datas:""}},methods:{back:function(){this.$emit("change")},afterEnter:function(){this.$store.commit("change_off")},ajax_time:function(t){var e=this;i.a.get("https://gank.io/api/history/content/day/"+t).then(function(t){e.datas=t.data.results,s=t.data.results})}},mounted:function(){this.$watch("dataTime",function(t,e){var a=t.split("-").join("/");this.time=a,this.ajax_time(this.time)})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),i=a.n(n);e.default={data:function(){return{type:this.$route.params.id,datas:[],page:1,staicImg:"/static/img/t01011efe90e544739a.jpg",off:!1,num:10,off1:!1}},created:function(){this.$store.commit("title_change",this.type),this.ajax(this.num,this.page)},methods:{ajax:function(t,e){var a=this;this.$store.commit("change"),this.off1=!1,i.a.get("https://gank.io/api/data/"+this.type+"/"+t+"/"+e).then(function(t){a.datas=a.datas.concat(t.data.results),a.off1=!0,a.$nextTick(function(t){a.$store.commit("change_off")})}).catch(function(t){})},loadMore:function(){this.off1&&(this.page+=1,this.ajax(this.num,this.page))}},watch:{$route:function(t,e){this.type=t.params.id,this.num=10,this.datas=[],this.page=1,this.ajax(this.num,this.page)},type:function(t){this.$store.commit("title_change",t)}},computed:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["show"],data:function(){return{show_off:this.show}},created:function(){},computed:{count:function(){return this.$store.state.this_right}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(13),i=a.n(n),s=a(2),r=a.n(s);e.default={name:"main-img",data:function(){return{data1:[],data2:[],num:10,page1:1,data_Num:"",off:!0,imgOff:!1,shu:22,off1:!1,dataTime1:""}},components:{showImg:i.a},mounted:function(){this.$store.commit("title_change","福利"),this.ajax(this.num,this.page1)},methods:{ajax:function(t,e){var a=this;this.$store.commit("change"),this.off1=!1,r.a.get("https://gank.io/api/data/福利/"+t+"/"+e).then(function(t){for(var e=0;e<t.data.results.length;e++)e%2==0?a.data1.push(t.data.results[e]):a.data2.push(t.data.results[e]);a.off1=!0,a.$nextTick(function(){a.$store.commit("change_off")})}).catch(function(t){console.log(t)})},loadMore:function(){this.off1&&(this.page1+=1,this.ajax(this.num,this.page1))},alert:function(t){this.$store.commit("change"),this.data_Num=t.target.src,this.off=!this.off,this.imgOff=!this.imgOff,this.dataTime1=t.target.attributes.dataTime.value},change_off:function(){this.off=!this.off,this.imgOff=!this.imgOff}},computed:{show_1:function(){}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),i=a.n(n),s=["今天","昨天","前天","前四天","前五天"];e.default={mounted:function(){this.ajax()},created:function(){this.$store.commit("title_change","每日推荐")},data:function(){return{data:111,arr:[],off:!0,arr_title:["第一天","第二天","第三天","第四天","第五天"],i:!1,notNextTick:!0,swiperOption:{paginationClickable:!0,pagination:".main_title",paginationBulletRender:function(t,e,a){return'<li  class="swiper-pagination-bullet swiper-pagination-bullet-custom">'+s[e]+"</li>"}}}},methods:{ajax:function(){var t=this;this.$store.commit("change"),i.a.get("https://gank.io/api/history/content/5/1",{responseType:"json"}).then(function(e){for(var a=0;a<e.data.results.length;a++)t.arr.push(e.data.results[a]);t.$nextTick(function(){t.$store.commit("change_off")})})},add_class:function(t){this.off=!1,this.i=t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),i=(a.n(n),this);e.default={props:["fulimsg"],data:function(){return{data:"福利",data1:this.fulimsg}},created:function(){console.log(i.$route)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["fulioff"],data:function(){return{arr:["福利","每日推荐","iOS","Android","前端"],fuli_off:this.fulioff,data1:2,img:"/static/img/t01011efe90e544739a.jpg"}},created:function(){},methods:{click1:function(){alert(11)},click2:function(){this.$emit("show")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"second",data:function(){return{msg:"我是2",msg1:111}},created:function(){console.log(this.$route.params)},methods:{a1:function(){console.log(this.msg)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),i=a(18),s=a.n(i),r=(a(5),a(20)),o=a(19),c=a.n(o),u=a(17),f=a.n(u),l=a(16),d=a.n(l),p=a(14),h=a(15),m=a.n(h),v=a(4),_=(a.n(v),a(2));a.n(_);n.a.use(r.a),n.a.use(m.a),n.a.use(d.a),n.a.use(c.a),n.a.use(f.a,{preLoad:1,try:1});var g=new r.a.Store({state:{this_off:!1,this_right:!1,title:"福利"},mutations:{change:function(t){t.this_off=!0},change_off:function(t){t.this_off=!1,t.this_right=!0},title_change:function(t,e){t.title=e}}});n.a.config.productionTip=!1;new n.a({router:p.a,render:function(t){return t(s.a)},store:g}).$mount("#pp")},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){var n=a(0)(a(38),a(89),null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(39),a(87),null,null);t.exports=n.exports},function(t,e,a){a(57);var n=a(0)(a(41),a(85),"data-v-4b8ecaca",null);t.exports=n.exports},function(t,e,a){a(56);var n=a(0)(a(42),a(84),null,null);t.exports=n.exports},function(t,e,a){a(63);var n=a(0)(a(43),a(93),null,null);t.exports=n.exports},function(t,e,a){a(55);var n=a(0)(a(44),a(82),null,null);t.exports=n.exports},function(t,e,a){a(65);var n=a(0)(a(46),a(95),"data-v-c94ca476",null);t.exports=n.exports},function(t,e,a){a(61);var n=a(0)(a(47),a(91),null,null);t.exports=n.exports},function(t,e,a){a(66);var n=a(0)(a(48),a(96),null,null);t.exports=n.exports},function(t,e,a){a(60);var n=a(0)(a(49),a(90),null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(50),a(83),null,null);t.exports=n.exports},function(t,e,a){a(62);var n=a(0)(a(51),a(92),"data-v-a9868210",null);t.exports=n.exports},function(t,e,a){a(59);var n=a(0)(a(52),a(88),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"head"}},[a("header",[a("div",{staticClass:"head"},[a("i",{staticClass:"fa fa-bars",on:{click:t.hua}}),t._v(" "),a("span",[t._v(t._s(t.title))]),t._v(" "),a("i",{staticClass:"fa fa-search"})])]),t._v(" "),a("div",{staticClass:"bar_ce_wrap"},[a("transition",{attrs:{name:"ani"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.off,expression:"off"}],staticClass:"bar_ce"},[a("keep-alive",[a("meun",{attrs:{fulioff:t.off},on:{show:t.show}})],1)],1)]),t._v(" "),a("transition",{attrs:{name:"z_tri"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.off,expression:"off"}],staticClass:"ze_z",on:{click:t.hua}})])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    我是"+t._s(t.data)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"nav_roter"},[t._v("\n    "+t._s(t.msg)+"\n\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Top"),t._v(" "),a("Load",{directives:[{name:"show",rawName:"v-show",value:t.data_off,expression:"data_off"}]}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.data_right,expression:"data_right"}],attrs:{id:"app1"}},[a("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),a("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav_roter",on:{click:t.a1}},[t._v("\n    "+t._s(t.msg)+"\n    "),a("div",{staticClass:"second"},[t._v(t._s(t.msg1))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"main_title"}),t._v(" "),a("ul",{staticClass:"wrap_content"},[a("swiper",{attrs:{options:t.swiperOption}},t._l(t.arr,function(e,n){return a("swiper-slide",{key:n},[a("h3",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),a("div",{domProps:{innerHTML:t._s(e.content)}})])}))],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"load_wrap"},[a("div",{staticClass:"load"},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"meun_wrap"},[a("div",{staticClass:"menu_img"},[a("div",[a("img",{attrs:{src:t.img}})]),t._v(" "),a("p",[t._v("请先登录")])]),t._v(" "),a("ul",{staticClass:"meun_list"},[a("router-link",{attrs:{tag:"li",to:"/mainimg"},nativeOn:{click:function(e){t.click2(e)}}},[a("i",{staticClass:"fa fa-meh-o"}),t._v(" "+t._s(t.arr[0])+"\n        ")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/everyDay"},nativeOn:{click:function(e){t.click2(e)}}},[a("i",{staticClass:"fa fa-meh-o"}),t._v(" "+t._s(t.arr[1])+"\n        ")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:{name:"list",params:{id:t.arr[2]}}},nativeOn:{click:function(e){t.click2(e)}}},[a("i",{staticClass:"fa fa-meh-o"}),t._v(" "+t._s(t.arr[2])+"\n        ")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:{name:"list",params:{id:t.arr[3]}}},nativeOn:{click:function(e){t.click2(e)}}},[a("i",{staticClass:"fa fa-meh-o"}),t._v(" "+t._s(t.arr[3])+"\n        ")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:{name:"list",params:{id:t.arr[4]}}},nativeOn:{click:function(e){t.click2(e)}}},[a("i",{staticClass:"fa fa-meh-o"}),t._v(" "+t._s(t.arr[4])+"\n         ")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer"}},[a("ul",[a("li",[a("router-link",{attrs:{to:"/mainimg"}},[t._v(t._s(t.fuli)+" ")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"second",params:{id:t.fuli}}}},[t._v(t._s(t.android))])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"first"}}},[t._v(t._s(t.ios))])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"},on:{"after-enter":t.afterEnter}},[a("div",{staticClass:"details"},[a("header",[a("div",{staticClass:"head"},[a("i",{staticClass:"fa fa-angle-left",on:{click:function(e){t.back()}}}),t._v(" "),a("span",[t._v(t._s(t.dataTime))]),t._v(" "),a("i",{staticClass:"fa fa-search"})])]),t._v(" "),a("div",{staticClass:"img_wrap"},[a("p",[t._v(t._s(t.datas?t.datas.title:"11"))]),t._v(" "),a("img",{attrs:{src:t.dataimg}}),t._v(" "),a("div",[t._v(t._s(t.time))])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"nav_roter",attrs:{"infinite-scroll-distance":"100"}},[a("ul",{staticClass:"list_wrap"},t._l(t.datas,function(e){return a("li",[a("a",{attrs:{href:e.url,target:"_blank"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images?e.images[0]+"?imageView2/0/w/200":t.staicImg,expression:"data.images?data.images[0]+'?imageView2/0/w/200':staicImg"}]}),t._v(" "),a("div",{staticClass:"introduce"},[a("p",[t._v(t._s(e.desc))]),t._v(" "),a("p",[a("span",{staticClass:"who"},[t._v(t._s(e.who))]),a("span",{staticClass:"time"},[t._v(t._s(e.createdAt.slice(0,10)))])])])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"main-img",attrs:{"infinite-scroll-distance":"500"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.off,expression:"off"}]},[a("ul",t._l(t.data1,function(e,n){return a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.url,expression:"data.url"}],attrs:{dataTime:e.createdAt.slice(0,10),id:e},on:{click:t.alert}})])})),t._v(" "),a("ul",t._l(t.data2,function(e){return a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.url,expression:"data.url"}],attrs:{dataTime:e.createdAt.slice(0,10),data:e},on:{click:t.alert}})])}))]),t._v(" "),a("show-img",{directives:[{name:"show",rawName:"v-show",value:t.imgOff,expression:"imgOff"}],attrs:{dataimg:t.data_Num,dataTime:t.dataTime1},on:{change:t.change_off}})],1)},staticRenderFns:[]}},,,function(t,e){}],[53]);
//# sourceMappingURL=app.ae7cee1d2661f7ebac9d.js.map