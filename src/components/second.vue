<template>
    <div class="nav_roter" @click='a1'>
        {{ msg }}
        <div class="second">{{ msg1 }}</div>
    </div>
</template>

<script>
export default{
    name:"second",
    data(){
        return{
            msg:'我是2',
            msg1:111
        }
    },
    created:function(){
      
    },
    methods:{
        a1:function(){
            console.log(this.msg)
        }
    }
}


</script>

<style>

</style>