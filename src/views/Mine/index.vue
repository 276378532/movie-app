<template>
    <div id='main'>
        <movieHeader title="我的喵喵"></movieHeader>
        <div id="content">
            <Login></Login>
        </div>
        <movie-tab-bar></movie-tab-bar> 

    </div>
</template>

<script>
import movieHeader from '@/components/Header'
import movieTabBar from '@/components/TabBar'
import Login from '@/components/Login'
export default {
    name: 'Mine',
     components:{
        movieHeader,
        movieTabBar,
        Login
    }
}
</script>

<style>

</style>
