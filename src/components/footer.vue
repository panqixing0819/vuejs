<template>
    <div id="footer">
        <ul> 
            <li><router-link  to='/mainimg'>{{ fuli }} </router-link></li>
            <li><router-link :to="{ name:'second', params: { id: fuli }}">{{ android }}</router-link></li>
            <li><router-link :to="{name:'first'}">{{ ios }}</router-link></li>
        </ul>
    </div>

</template>

<script>
export default{
    data () {
        return {
            ios:'ios',
            android:'android',
            fuli:'福利'
        }
    },
    methods:{ 
    }
}


</script>

<style>
#footer{
    background-color: #03a9f4;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index:100;
}
#footer ul{
    display: flex;
    display: -webkit-flex;
    line-height: 1.8rem;

    color: #fff;
    font-size: 1.4rem;
    padding: 1rem 0;
    /*justify-content: space-around;*/
}
#footer ul li{
    text-align: center;
    flex: 1;
    -webkit-flex:1;
    
}
.router-link-active{
    color: red
}
</style>