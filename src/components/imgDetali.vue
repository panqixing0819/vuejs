<template>
   
    <div id="detali">
         <img :src="dataimg"/>
      
    </div>
</template>

<script>
    export default{
       props:["dataimg"],
        data(){
            return{
              
            }
        }
        
    }

</script>

<style>
    #detali img{
        width:90%;
        display: block;
        margin:2rem auto;
    }
</style>