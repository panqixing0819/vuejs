<template>
  <div>
   <Top></Top>
    <div id="app1"> 
        <router-view>  </router-view>
    </div>
    <footTer></footTer>
  </div>
</template>

<script>
import Top from './components/head.vue'
import footTer from './components/footer.vue'

export default {
  name: 'app',
  data(){
    return{
      off:false
    }
  },
  components:{Top,footTer}
}

</script>

<style scoped>
  #app1{
    padding-top: 3.6rem;
  }
  a{
    color: #fff;
    text-decoration:none;
  }   
</style>
