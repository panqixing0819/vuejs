<template>
	
	<div class="main-img" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
		<show-img v-show="imgOff" :dataimg='data_Num'></show-img>
		<div v-show="off">
			<ul>
				<li v-for="(data,index) in data1">
					<!--<router-link to='/mainimg1'><img   v-lazy='data' :data='data'/></router-link>-->
					<img v-on:click="alert"  v-lazy='data'  :id="data" />
				</li>
			</ul>
			<ul>
				<li v-for="data in data2">
					<!--<router-link to='/mainimg1'><img v-lazy='data'  :data='data' /></router-link>-->
					<img v-on:click="alert"  v-lazy='data'  :data='data' />
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
//var ;
//var ;
import imgDetali from './imgDetali.vue'
export default{
	name:"main-img",
	data(){
		return{
			data1:[],
			data2:[],
			num:10,
			page1:1,
			data_Num:'',
			off:true,
			imgOff:false,
			shu:22
		}
	},
	components:{
		showImg:imgDetali
	},
	created:function(){
		this.ajax(this.num,this.page1);
	},
	methods:{
		ajax:function(num,a){
			this.$http.get("https://gank.io/api/data/福利/"+num+"/"+a+"")
				.then(function(data){
					for(var i=0;i<data.body.results.length;i++){
						if(i%2==0){
							this.data1.push(data.data.results[i].url);	
						}else{
							this.data2.push(data.data.results[i].url);
						}
					}
					
				},function(){
					alert('错误')
				})
		},
		loadMore:function(){
			this.busy = true;
			this.page1+=1;
	        this.ajax(this.num,this.page1);
		},
		alert:function(ev){
			this.data_Num=ev.target.src
			this.off=!this.off
			this.imgOff=!this.imgOff
		}
	},
	computed:{
		show_1:function(){
		}
	}
}
</script>
<style>
.main-img {
  content: '';
  display: block;
  overflow: hidden;
  clear: both;
 }
  .main-img ul {
    width: 50%;
    float: left; }
    .main-img ul li {
      border: solid 1px #cccccc;
      box-shadow: 0 0 5px #CCCCCC;
      border-radius: 5px;
      padding: 5%;
      box-sizing: border-box;
      margin: 1rem 0; }
      .main-img ul li img {
        width: 100%; }
/*懒加载插件*/
img[lazy=loading] {
  background-image: url(../../static/img/load.gif);
  background-repeat: no-repeat;
  background-position: center;
  }        
 
        
</style>
