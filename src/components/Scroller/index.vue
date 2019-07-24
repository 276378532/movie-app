<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import  BSscroll  from "better-scroll";

export default {
    name: 'Scroll',
    props:{
        handleToScroll:{
            type: Function,
            default: function(){}
        },
        handleToTouchEnd:{
            type: Function,
            default: function(){}
        }
    },
    mounted(){
        var scroll = new BSscroll(this.$refs.wrapper,{
            tap:true,
            probeType:1 
        })
        this.scroll = scroll;
        scroll.on('scroll',(pos)=>{
            this.handleToScroll(pos);
            
        })
        scroll.on('touchEnd',(pos)=>{
            // console.log(this.handleToScroll)
            this.handleToTouchEnd(pos);
            // console.log(this.pullDownMsg)
            
        })
    },
    methods:{
        toScrollTop(y){
            this.scroll.scrollTo(0,y);
        }
    }
}
</script>

<style scoped>
    .wrapper{
        height: 100%;
    }
</style>
