<template>
    <div class="nav_roter"  v-infinite-scroll="loadMore" infinite-scroll-distance="100">
        <ul class="list_wrap">
            <li v-for="data in datas">
                <a :href="data.url" target="_blank">
                    <img  v-lazy="data.images?data.images[0]+'?imageView2/0/w/200':staicImg"/>
                    <div class="introduce">
                        <p>{{data.desc}}</p>
                        <p><span class="who">{{data.who }}</span><span class="time">{{data.createdAt.slice(0,10)}}</span></p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

import axios from "axios";
export default{
    data(){
        return{
            type:this.$route. params.id,
            datas: [],
            page: 1,
            staicImg:'/static/img/t01011efe90e544739a.jpg',//是否有图片
            off: false,
            num:10,
            off1:false
        }  
    },
    created:function(){
        this.$store.commit('title_change',this.type);
      this.ajax(this.num,this.page);
    },
    methods:{
        ajax:function(num,page){
             this.$store.commit('change');
             this.off1=false;
             axios.get('http://gank.io/api/data/'+this.type+'/'+num+'/'+page)
             .then(data=>{
                 this.datas=this.datas.concat(data.data.results);
                  this.off1 = true;
                  this.$nextTick((a)=>{//重新渲染后把vuex的state还原回去
                        this.$store.commit('change_off');
                    }) 
             })
             .catch(a=>{
                 
             })
        },
        loadMore(){ 
            if(this.off1){
                this.page+=1;
                this.ajax(this.num,this.page);
            }  
        } 
    },
    watch: {
        '$route'(to,from){//重置下
           this.type = to.params.id;
           this.num=10;
           this.datas=[];
           this.page=1;
            this.ajax(this.num,this.page);
        },
        'type'(to){
             this.$store.commit('title_change',to);
        }
    },
    computed : {
       
    }
}

</script>

<style scoped>
    .list_wrap{
        padding:0 1rem;
    }
    .list_wrap li{
        width:100%;
        height: 18rem;
       margin: 1rem 0;
      overflow: hidden;
      position: relative;
      border-radius:5px;
    }
    .list_wrap li img{
        width:100%;

    }
    .list_wrap .introduce{
        width: 100%;
        color: #fff;
        position:absolute;
        bottom: 0;
        height: 5.5rem;
        background-color: rgba(0,0,0,.5);
       padding: 1rem ;
       font-size: 1.2rem;
    }
    .list_wrap .introduce p:first-child{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-bottom: 0.5rem;
    }
     .list_wrap .introduce .time{
         float: right;
     }

     /*懒加载插件*/
    img[lazy=loading] {
        background-image: url(../../static/img/load.gif);
        background-repeat: no-repeat;
        background-position: center;
    }        
 
</style>