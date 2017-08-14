<template>
  <div>
   <Top></Top>
   <Load v-show="data_off"></Load>
    <div id="app1" v-show="data_right" > 
        <router-view>  </router-view>
    </div>
    <!--<footTer></footTer>-->
  </div>
</template>

<script>
import Top from './components/head.vue'
import footTer from './components/footer.vue'
import Load from './components/loading/loading.vue'//加载动画

export default { 
  name: 'app',
  data(){
    return{
      off: '',
      off1:'',
    }
  },
  components:{Top,footTer,Load},
  created:function(){
    
  },
  computed: {
    data_off (){
      return this.$store.state.this_off;
    },
    data_right (){
       return this.$store.state.this_right;
    }
  }

}

</script>

<style scoped>
  #app1{
    padding: 3.6rem 0 ;
  }
  a{
    color: #fff;
    text-decoration:none;
  }   
</style>
