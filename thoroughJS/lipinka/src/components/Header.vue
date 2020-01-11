<template>
  <div calss="header">
    <div class="top">
        <div class="left-logo">
            <img src="../assets/img/logo.png" alt="">
        </div>
        <div class="middle-btn">
            <span :class="{'top-active':$route.path=='/home'}" @click="goHome">首页</span>
            <span>卡券出售</span>
            <span>订单中心</span>
            <div 
                style="display: inline-block;position: relative;" 
                @mouseenter="orderhover"
                @mouseleave="orderout"
            >
                <span>账户设置</span>
                <ul class="orderUl">
                    <li>我的账户</li>
                    <li>资料管理</li>
                    <li>转账记录</li>
                </ul>
            </div>
            <div style="display: inline-block;">
                <span>平台公告</span>
            </div>
        </div>
        <div class="right">
            <span class="login" @click="goLogin" :class="{'top-active':$route.path=='/login'}">登录</span>
            <span class="register">注册</span>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                orderShow:false,
            }
        },
        components: {

        },
        mounted () {

        },
        methods: {
            orderhover(){
                $('.orderUl').css('display','block')
            },
            orderout(){
                setTimeout(function(){
                    $('.orderUl').css('display','none')
                },200)
            },
            goLogin(){
                this.$router.push({
                    path: '/login'
                })
            },
            goHome(){
                this.$router.push({
                    path: '/home'
                })
            },
        }
    }
</script>

<style lang='scss' scoped>
    .orderUl{
        position: absolute;
        top: 100%;
        left: 0;
        width: 110px;
        background-color: #fff;
        border-radius: 5px;
        display: none;
        li{
            width: 100%;
            text-align: center;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
        }
        li:hover{
            background-color: #f5f6fa;
        }
    }
    .top{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 70px;
        background-color: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        .left-logo{
            display: inline-block;
            width: 180px;
            height: 100%;
            padding: 10px 0;
            float: left;
            box-sizing: border-box;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .middle-btn{
            margin-left: 25px;
            display: inline-block;
            float: left;
            height: 100%;
            padding: 15px 0;
            box-sizing: border-box;
            span{
                display: inline-block;
                float: left;
                margin-right: 15px;
                padding: 10px 25px;
                box-sizing: border-box;
                border-radius: 30px;
                cursor: pointer;
            }
            span:hover{
                color: #fff;
                background-color: #ff5c38;
            }
        }
        .right{
            display: inline-block;
            height: 100%;
            padding: 15px 0;
            box-sizing: border-box;
            float: right;
            span{
                display: inline-block;
                float: left;
                margin-right: 15px;
                padding: 10px 25px;
                box-sizing: border-box;
                border-radius: 30px;
                cursor: pointer;
            }
            span:hover{
                color: #fff;
                background-color: #ff5c38;
            }
        }
        .top-active{
            color: #fff;
            background-color: #ff5c38;
        }
    }
</style>
