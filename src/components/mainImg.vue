<template>
	<div class="main-img" v-infinite-scroll="loadMore"    infinite-scroll-distance="500">
		<div v-show="off">
			<ul>
				<li v-for="(data,index) in data1">
					<img v-on:click="alert" :dataTime="data.createdAt.slice(0,10)"  v-lazy='data.url'   :id="data"  />
				</li>
			</ul>
			<ul>
				<li v-for="data in data2">
					<img v-on:click="alert"  :dataTime="data.createdAt.slice(0,10)"  v-lazy='data.url'  :data='data' />
				</li>
			</ul>
		</div>
		<show-img v-show="imgOff" :dataimg='data_Num' :dataTime="dataTime1" v-on:change="change_off"></show-img>
	</div>
</template>
<script>
import imgDetali from './imgDetali.vue';
import axios from "axios";
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
			shu:22,
			off1:false,
			dataTime1:''
		}
	},
	components:{
		showImg:imgDetali
	},
	mounted:function(){
		this.$store.commit('title_change','福利')
		this.ajax(this.num,this.page1);
	},
	methods:{
		ajax:function(num,a){
			this.$store.commit('change');
			this.off1=false;
			axios.get("https://gank.io/api/data/福利/"+num+"/"+a+"")
					.then((data)=>{
						for(var i=0;i<data.data.results.length;i++){
							if(i%2==0){
								this.data1.push(data.data.results[i]);	
							}else{
								this.data2.push(data.data.results[i]);
							}
						}
						this.off1=true;
						this.$nextTick(()=>{
							this.$store.commit('change_off');
						})
					}).catch((error)=>{
						console.log(error);
					})
				
		},
		loadMore:function(){
			if(this.off1){
				this.page1+=1;
				this.ajax(this.num,this.page1);
			}
		},
		alert:function(ev){
			this.$store.commit('change');
			this.data_Num=ev.target.src;
			this.off=!this.off
			this.imgOff=!this.imgOff;
			// console.log(ev);
			// console.log(ev.target.attributes['datatime'].value);
			// console.log(ev.target)
			// this.dataTime=ev.target.dataTime;
			this.dataTime1=ev.target.attributes['dataTime'].value;	
		},
		change_off(){
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
     
</style>
