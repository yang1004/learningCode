<template>
  <div calss="home">
    <div class="banner">
        <p>高价回收 极速销卡 安全稳定 无须提现 自动到账</p>
        <span>我有卡券</span>
    </div>
    <div class="buzhou">
        <p class="buzhou-title">便捷安全<span>5步</span>完成转让</p>
        <div class="buzhou-img">
            <div class="item">
                <img src="../assets/img/buzhou1.jpg" alt="">
                <p class="title">注册账号</p>
                <p class="con">30秒快速注册</p>
            </div>
            <div class="item-icon">
                <img src="../assets/img/right.png" alt="">
            </div>
            <div class="item">
                <img src="../assets/img/buzhou2.jpg" alt="">
                <p class="title">注册账号</p>
                <p class="con">30秒快速注册</p>
            </div>
            <div class="item-icon">
                <img src="../assets/img/right.png" alt="">
            </div>
            <div class="item">
                <img src="../assets/img/buzhou3.jpg" alt="">
                <p class="title">注册账号</p>
                <p class="con">30秒快速注册</p>
            </div>
            <div class="item-icon">
                <img src="../assets/img/right.png" alt="">
            </div>
            <div class="item">
                <img src="../assets/img/buzhou4.jpg" alt="">
                <p class="title">注册账号</p>
                <p class="con">30秒快速注册</p>
            </div>
            <div class="item-icon">
                <img src="../assets/img/right.png" alt="">
            </div>
            <div class="item">
                <img src="../assets/img/buzhou5.jpg" alt="">
                <p class="title">注册账号</p>
                <p class="con">30秒快速注册</p>
            </div>
        </div>
        <div class="experience">
            <span>立即体验</span>
        </div>
    </div>
    <div class="banner2">
        <div class="item">
            <img src="../assets/img/banner2-1.png" alt="">
            <p class="p1">极速销卡</p>
            <p class="p2">API 销卡接口，自主接入一秒急速销卡</p>
            <p class="p2">批量后台提交，快速销卡通道无缝对接</p>
            <p class="p2">多卡通道选择，快速安全稳定销卡平台</p>
        </div>
        <div class="item">
            <img src="../assets/img/banner2-2.png" alt="">
            <p class="p1">资金回笼</p>
            <p class="p2">最大限度让利，打造双方互利互赢平台</p>
            <p class="p2">资金快速回笼，即充即结，资金零风险</p>
            <p class="p2">收益急速代发，资金一秒到账安全稳定</p>
        </div>
        <div class="item">
            <img src="../assets/img/banner2-3.png" alt="">
            <p class="p1">安全稳定</p>
            <p class="p2">全程急速销卡，资金快速回笼安全无忧</p>
            <p class="p2">系统安全稳定，7X24小时客服维护支持</p>
            <p class="p2">资金安全保证，全程资金安全监管保证</p>
        </div>
    </div>
    <div class="cardType">
        <p class="title">携手共进，同享共赢</p>
        <div class="cardType-box clearfloat">
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/1.png" alt="">
                    <p>京东</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/2.png" alt="">
                    <p>苏宁易购</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/3.png" alt="">
                    <p>天猫</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/4.png" alt="">
                    <p>Q币寄售</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/1.png" alt="">
                    <p>京东</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/2.png" alt="">
                    <p>苏宁易购</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/3.png" alt="">
                    <p>天猫</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/4.png" alt="">
                    <p>Q币寄售</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/1.png" alt="">
                    <p>京东</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/2.png" alt="">
                    <p>苏宁易购</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/3.png" alt="">
                    <p>天猫</p>
                </div>
            </div>
            <div class="cardType-item">
                <div class="item-box">
                    <img src="../assets/img/4.png" alt="">
                    <p>Q币寄售</p>
                </div>
            </div>
        </div>
        <div class="experience">
            <span>立即体验</span>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
              
            }
        },
        components: {
            
        },
        mounted () {

        },
        methods: {

        }
    }
</script>

<style lang='scss' scoped>
    /**
     * 清除浮动样式
     */
    .clearfloat:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0;
    }
    .clearfloat{
        zoom:1;
    }
    .banner{
        width: 100%;
        height: 500px;
        padding-top: 180px;
        box-sizing: border-box;
        text-align: center;
        background: url(../assets/img/banner.png) center 0 no-repeat #ff5c38;
        p{
            font-size: 50px;
            text-align: center;
            color: #fff;
        }
        span{
            display: inline-block;
            margin-top: 30px;
            font-size: 23px;
            line-height: 34px;
            background-color: transparent;
            color: #fff;
            border: 1px solid #fff;
            padding: 10px 40px;
            border-radius: 30px;
            cursor: pointer;
        }
        span:hover{
            color: #ff5c38;
            background-color: #fff;
        }
    }
    .buzhou{
        width: 100%;
        height: 500px;
        background-color: #fff;
        padding: 100px 30px;
        box-sizing: border-box;
        .buzhou-title{
            text-align: center;
            font-size: 30px;
            color: #666;
            span{
                color: #ff5c38;
                font-size: 40px;
                margin-left: 10px;
                margin-right: 10px;
            }
        }
        .buzhou-img{
            width: 100%;
            height: 170px;
            display: flex;
            margin-top: 50px;
            justify-content: center;
            .item{
                width: 15%;
                height: 100%;
                text-align: center;
                display: inline-block;
                .title{
                    margin-top: 10px;
                    font-size: 17px;
                    line-height: 30px;
                }
                .con{
                    font-size: 14px;
                    color: #666;
                }
            }
            .item-icon{
                width: 30px;
                height: 100%;
                margin-left: 10px;
                padding-top: 30px;
                box-sizing: border-box;
                margin-right: 10px;
                display: inline-block;
                img{
                    width: 30px;
                }
            }
        }
        .experience{
            width: 100%;
            margin-top: 50px;
            text-align: center;
            span{
                display: inline-block;
                padding: 15px 40px;
                background-color: #ff5c38;
                border-radius: 30px;
                color: #fff;
                cursor: pointer;
            }
        }
    }
    .banner2{
        width: 100%;
        height: 500px;
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        background: url(../assets/img/banner2.png) center 0 no-repeat #ff5c38;
        .item{
            width: 33.33%;
            height: 100%;
            padding: 100px 40px;
            box-sizing: border-box;
            display: inline-block;
            text-align: center;
            transition: 0.3s;
            img{
                width: 100px;
                height: 100px;
                margin-bottom: 20px;
            }
            .p1{
                font-size: 24px;
                color: #fff;
                margin-bottom: 45px;
            }
            .p2{
                font-size: 15px;
                color: #fff;
                line-height: 35px;
            }
        }
        .item:hover {
            transform: scale(1.02);
        }
    }
    .cardType{
        width: 100%;
        padding-top: 70px;
        padding-bottom: 80px;
        box-sizing: border-box;
        background-color: #f5f6fa;
        .title{
            text-align: center;
            font-size: 30px;
        }
        .cardType-box{
            width: 100%;
            margin-top: 50px;
            .cardType-item{
                display: inline-block;
                width: 25%;
                height: 110px;
                padding: 10px 30px;
                float: left;
                box-sizing: border-box;
                .item-box{
                    width: 100%;
                    height: 100%;
                    padding-top: 15px;
                    box-sizing: border-box;
                    background-color: #fff;
                    text-align: center;
                    p{
                        margin-top: 5px;
                        font-size: 18px;
                    }
                }
            }
        }
        .experience{
            width: 100%;
            margin-top: 50px;
            text-align: center;
            span{
                display: inline-block;
                padding: 15px 40px;
                background-color: #ff5c38;
                border-radius: 30px;
                color: #fff;
                cursor: pointer;
            }
        }
    }
</style>
