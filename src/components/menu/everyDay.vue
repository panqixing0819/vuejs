<template>
    <div>
         <ul class="main_title" >
            <!--<li   v-for="(data,$index) in arr_title" :class="{active:i==$index}" @click="add_class($index)">{{data}}</li>-->
        </ul>
        <ul class="wrap_content">
            <swiper :options="swiperOption" >
                    <swiper-slide v-for="(data, index) in arr" :key='index'>
                        <h3 v-html="data.title"></h3>
                        <div v-html="data.content"></div>
                    </swiper-slide>
                        <!--<div class="swiper-pagination" ></div>-->
            </swiper> 
        </ul>
    </div>
</template>
<script>
import axios from "axios";
const Name = ['今天','昨天','前天','前四天','前五天'];
export default{
        mounted:function(){ 
             this.ajax();
        },
        created:function(){
           this.$store.commit('title_change','每日推荐')
        },
        data(){
            return {
                data : 111,
                arr:[],
                off: true,
                arr_title:['第一天','第二天','第三天','第四天','第五天'],
                i:false,
                notNextTick: true,
                swiperOption: {
                    paginationClickable :true,
                    pagination : '.main_title',
                    paginationBulletRender(swiper, index, className) {
                        return '<li  class="swiper-pagination-bullet swiper-pagination-bullet-custom">'+Name[index]+'</li>';
                    }

                }
            }
        },
        methods:{
            ajax(){
                var _=this;
                 this.$store.commit('change');
                axios.get('https://gank.io/api/history/content/5/1',{
                    responseType:'json'
                }).then((a)=>{
                    
                       for(var i=0;i<a.data.results.length;i++){
                            this.arr.push(a.data.results[i]);
                       }
                       this.$nextTick(()=>{//重新渲染后把vuex的state还原回去
                            this.$store.commit('change_off');
                        })
                })
            },
            add_class($index){//点击之后切添加高亮
                this.off = false;
               this.i = $index;
            }
            
        }
    }
   
</script>
<style>
    .wrap_content{
       padding-bottom:1rem;
    }
    .wrap_content  a{
        font-size:12px;
        color: #999999;
    }
    .wrap_content ul li{
        padding: 0 1rem;
    
    }
    .wrap_content h3{
        padding: 1rem ;
        font-weight: bold;
    }
    .display_none{
        display: none;
    }
    .main_title{
        overflow: hidden;
        display: flex;
        text-align: center;
       height: 3.6rem;
       line-height: 3.6rem;
       width:100%;
    }
    .main_title li{
        flex: 1;
        transition: all 0.3s ease;
    }
    .main_title li.active{
        color: #03a9f4;
        font-size: 16px;
        font-weight: bold;
    }
    .swiper-pagination-bullet-custom{
         width: 100% !important;
        height: 100% !important;
        margin:0 !important;
        text-align: center;
        line-height: 50px;
        color: #999999;
        border-radius: 0 !important;
        background: #fff !important;
        opacity: 1 !important;
    }
    .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
        color: #03a9f4;
        font-size: 16px;
        font-weight: bold;
    }

</style>