<template>
    <div class="meun_wrap">
        <div class="menu_img">
            <div><img src="https://avatars0.githubusercontent.com/u/22836152?v=4&s=460"/></div>
            <p>请先登录</p>
        </div>
        <ul class="meun_list" >
            <router-link tag='li' @click.native="click2"  to='/mainimg' >
                    <i class="fa fa-meh-o"></i> {{arr[0]}}
            </router-link>
            <router-link tag='li' @click.native="click2" to="/everyDay">
               <i class="fa fa-meh-o"></i> {{arr[1]}}
            </router-link>
            <router-link tag="li"  @click.native="click2" :to="{ name: 'list', params: { id: arr[2] }}">
               <i class="fa fa-meh-o"></i> {{arr[2]}}
            </router-link>
             <router-link tag="li"  @click.native="click2" :to="{name: 'list', params: { id: arr[3] }}">
               <i class="fa fa-meh-o"></i> {{arr[3]}}
            </router-link>
             <router-link tag="li"  @click.native="click2" :to="{ name: 'list', params: {id: arr[4] }}">
               <i class="fa fa-meh-o"></i> {{arr[4]}}
             </router-link> 
        </ul>
    </div>
</template>
<script>
    export default{
        props : ['fulioff'],
        data () {
            return {
                arr:["福利","每日推荐","iOS","Android","前端"],
                fuli_off : this.fulioff,
                data1 : 2,
                // img:'/static/img/t01011efe90e544739a.jpg'
            }
        },
        created:function(){
            // console.log(this.fulioff);
        },
        methods : {
            click1 :function(){
                alert(11);
            },
            click2 : function(){
                this.$emit("show");
            }
        }
 
    }
</script>
<style scoped>
.meun_wrap{
    text-align: center;
}
.menu_img{
     background-color: #262d30;
     padding: 2.0rem 0;
}
.menu_img>div{
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
   
}
.menu_img>p{
    margin: 2rem 0;
   margin-bottom: 0;
   font-size: 1.4rem;
}
.menu_img>div>img{
     border:solid 0.1rem #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.meun_list{
    padding: 2.0rem 0;
    text-align: left;
   
}
.meun_list i{
    font-size: 1.8rem;
    padding:0 1.0rem;
    color: #fff;
}
.meun_list li{
    padding: 0.8rem;
    /*font-size: 16px;*/
}
.meun_list li.active{
    color: #03a9f4;
}
.meun_list li::after{
     display: block;
    border-top: 1px solid #40474a;
    width: 100%;
    position: relative;
    top: 0.8rem;
    content: "";
}
.router-link-active{
    color: #03a9f4;
}
.router-link-active i{
    color: #03a9f4;
}
</style>