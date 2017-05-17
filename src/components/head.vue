<template>
	<div id="head" >
		<header>
			<div class="head">
				<i class="fa fa-bars" @click="hua"></i>
				  <span>{{page1}}</span><i></i>
				<i class="fa fa-search"></i>
			</div>
		</header>
		<div class="bar_ce_wrap"  v-bind:class="{ active: off }"  v-show="off">
				<div class="bar_ce">
						111
				</div>
				<div class="ze_z"  @click="hua">
						111
				</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'head',
		data () {
			return {
				page1:'福利',
				off:false
			}
		},
		created:function(){
			
		},
		methods:{
			hua:function(){
				this.off=!this.off;
			}
		}
	}
</script>
<style scoped>
header {
  background: #03a9f4; }

header {
  color: #FFFFFF;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%; }

header i:first-child {
  float: left; }

header i:last-child {
  float: right; }

header div {
  padding: 1rem;
  line-height: 1.6rem;
  height: 1.6rem;
}
.bar_ce_wrap{
	transition: 1s;
}
	
.bar_ce{
		width: 50%;
		height: 100%;
		position: fixed;
		background-color: #22262a;
		z-index: 10;
		transition: 1s;
		transform: translateX(-100%);
		color: #FFFFFF;
	}
	.bar_ce_wrap.active .bar_ce{
		transform: translateX(0);
		transition: 1s;
	}
	.ze_z{
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	right: 0;
	width: 50%;
	height: 100%;
	transition: 1s;
	color: #FFFFFF;
}
</style>