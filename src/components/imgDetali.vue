<template>
    <transition name="fade"    v-on:after-enter="afterEnter">
        <div class="details">
             <header>
                <div class="head">
                    <i class="fa fa-angle-left" @click="back()"></i>
                    <span>{{dataTime}}</span>
                    <i class="fa fa-search"></i>
                </div>
            </header>
            <div class="img_wrap">
                <p>{{datas?datas.title:'11'}}</p>
                <img :src="dataimg"/>
                <div>{{time}}</div>
            </div>
            
        </div>
    </transition>
</template>

<script>
    import axios from "axios";
    let arr = '';
    export default{
       props:['dataimg','dataTime'], 
        data(){
            return{
              src1 : this.dataimg,
              time : this.dataTime,
              datas : ''
            }
        },
        methods:{
            back(){
                this.$emit('change');
            },
           afterEnter(){
                this.$store.commit('change_off');
           },
           ajax_time(time){
                axios.get("https://gank.io/api/history/content/day/"+time)
                .then((data)=>{
                    this.datas = data.data.results;
                    arr = data.data.results;
                })
           }
        },
       mounted:function(){
            this.$watch('dataTime', function(newVal, oldVal){
                let formDate = newVal.split('-').join('/');
                 this.time=formDate;
                // console.log(newVal);//这里再感受下值拿到了没
                
                this.ajax_time(this.time);
            });
        },
    }

</script>

<style scoped>
    /*#detali img{
        width:90%;
        display: block;
        margin:2rem auto;
    }*/
.details{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:110;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
   overflow: scroll;

}
.details .img_wrap{
    padding: 4.6rem 1rem 1rem 1rem ;
}
 .fade-enter-active, .fade-leave-active {
    transition: all 0.2s linear;
    transform: translate3d(0, 0, 0);
  }
   .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
</style>