<template>
	<div id="head" >
		<header>
			<div class="head">
				<i class="fa fa-bars" @click="hua"></i>
				  <span>{{title}}</span>
				<i class="fa fa-search"></i>
			</div>
		</header>
	
		<div class="bar_ce_wrap"  >
				<transition name="ani">
					<div class="bar_ce"  v-show="off">
							<keep-alive><meun :fulioff="off" v-on:show="show"></meun></keep-alive>
					</div>
				</transition>
				<transition name="z_tri">
					<div class="ze_z"  @click="hua" v-show="off">
					</div>
				</transition>
		</div>
		
	</div>
</template>
<script>
import meun from "./menu/menu";
	export default{
		name:'head',
		data () {
			return {
				page1:'',
				off:false
			}
		},
		components:{
			meun : meun
		},
		created:function(){
			
		},
		methods:{
			hua:function(){
				this.off=!this.off;
			},
			show : function(){
				this.off = false;
			}
		},
		computed:{
			title(){
				 return this.$store.state.title;
			}
		}
	
	}
</script>
<style>
header {
  background: #03a9f4; }

header {
  color: #FFFFFF;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%; 
  z-index:100;
  }

header i:first-child {
  float: left; }

header i:last-child {
  float: right; }

header div {
  padding: 1rem;
  line-height: 1.6rem;

}
.bar_ce_wrap{
	transition: 5s;
}
.head i{
	font-size: 1.6rem;
}	
.bar_ce{
		width: 50%;
		height: 100%;
		position: fixed;
		background-color: #22262a;
		z-index: 110;
		color: #FFFFFF;	
	}
.ze_z{
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	right: 0;
	width: 100%;
	height: 100%;
	color: #FFFFFF;
	z-index: 109;
	
}


.ani-enter-active, .ani-leave-active{
  	transform: translateX(0);
		transition:all 0.3s ease;
	
}

.ani-enter, .ani-leave-active  {
  	transform: translateX(-100%);
		transition:all 0.3s;
	
}
.z_tri-enter-active, .z_tri-leave-active{
		transition:all 0.3s ease;
		opacity: 1;
}

.z_tri-enter, .z_tri-leave-active  {
		transition:all 0.3s ease;
		opacity:0;
}


</style>