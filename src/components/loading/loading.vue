<template>
    <div class="load_wrap" >
       <div class="load">
            <span></span>
            <span></span>
            <span></span>
       </div>
    </div>
</template>

<script>
export default{
    props:['show'],
    data(){
        return {
            show_off: this.show
        }
    },
    created :function(){
       
    },
    computed : {
        count(){
            return this.$store.state.this_right;
        }
    }
}

</script>

<style>
    .load_wrap{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index:150;
        width: 100%;
        height: 100%;
        background-color: rgba(250,250,250, 0.6);
          
    }
    .load{
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 70px;
        height: 18px;
         z-index: 151
    }
    .load span{
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #03a9f4;
       
    }
    .load span:nth-of-type(1){
        animation: scale 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) 0s infinite;
    }
    .load span:nth-of-type(2){
        animation: scale 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) 0.15s infinite;
    }
    .load span:nth-of-type(3){
        animation: scale 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) 0.3s infinite;
    }
    @-webkit-keyframes scale {
        0% {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1; }
        45% {
        -webkit-transform: scale(0.1);
                transform: scale(0.1);
        opacity: 0.2; }
        100% {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1; } }
    @keyframes scale {
        0% {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1; }
        45% {
        -webkit-transform: scale(0.1);
                transform: scale(0.1);
        opacity: 0.2; }
        100% {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1; } } 
</style>