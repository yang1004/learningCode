<template>
  <div id="app">
    <!-- 网站顶部导航 -->
    <Header />

    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- 网站底部 -->
    <Bottom />
  </div>
</template>

<script>
    import Header from './components/Header'
    import Bottom from './components/Bottom'
    export default {
        name: 'App',
        data () {
            return {
              
            }
        },
        components: {
            Header,
            Bottom
        },
        mounted () {

        },
        methods: {

        }
    }
</script>

<style lang='scss'>
    @import url("./assets/css/reset.css");

</style>