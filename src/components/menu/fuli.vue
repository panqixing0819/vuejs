<template>
    <div>
        我是{{data}}
    </div>
</template>

<script>
    import axios from "axios";
    export default{ 
        props : ['fulimsg'],
        data (){
            return{
                data : "福利",
                data1 : this.fulimsg
            }
        },
        created : () => {
            console.log(this.$route);
        }
    }
</script>