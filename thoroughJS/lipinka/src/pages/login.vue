<template>
  <div calss="login">
    <div class="loginBox">
        <div class="login-box">
            <div class="title">
                <span class="t1">请登录账号</span>
                <span class="t2">没有账号？<span>立即注册</span></span>
            </div>
            <div class="select-login">
                <span class="login1" :class="{'login-active':loginIndex == 1}" @click="changeLogin(1)">帐号密码登录</span>
                <span class="login2" :class="{'login-active':loginIndex == 2}" @click="changeLogin(2)">手机验证码登录</span>
            </div>
            <div class="input-box" v-if="loginIndex == 1">
                <div class="input-item">
                    <input type="text" placeholder="用户名/邮箱/手机号">
                    <img src="../assets/img/user.png" alt="">
                </div>
                <div class="input-item">
                    <input type="text" placeholder="登录密码">
                    <img src="../assets/img/password.png" alt="">
                </div>
            </div>
            <div class="input-box" v-else>
                <div class="input-item">
                    <input type="text" placeholder="手机号码">
                    <img src="../assets/img/phone.png" alt="">
                </div>
                <div class="input-item">
                    <input type="text" placeholder="手机验证码">
                    <img src="../assets/img/password.png" alt="">
                    <span>获取验证码</span>
                </div>
            </div>
            <div class="login-commit">
                <button>登录</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
              loginIndex:1,
            }
        },
        components: {
            
        },
        mounted () {

        },
        methods: {
            changeLogin(index){//切换登录
                this.loginIndex = index
            }
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
    
    .loginBox{
        width: 100%;
        margin-top: 70px;
        padding: 100px 25%;
        box-sizing: border-box;
        background-color: #f5f6fa;
        .login-box{
            width: 100%;
            border-radius: 10px;
            background-color: #fff;
            padding: 80px 15%;
            box-sizing: border-box;
            .title{
                width: 100%;
                display: flex;
                margin-bottom: 40px;
                justify-content: space-between;
                .t1{
                    font-size: 27px;
                    line-height: 40px;
                }
                .t2{
                    line-height: 40px;
                    color: #777;
                    span{
                        color: #007dfe;
                        cursor: pointer;
                    }
                    span:hover{
                        border-bottom: 1px solid #007dfe;
                    }
                }
            }
            .select-login{
                width: 100%;
                height: 50px;
                background-color: #f5f6fa;
                border-radius: 50px;
                span{
                    display: inline-block;
                    width: 49%;
                    line-height: 50px;
                    text-align: center;
                    cursor: pointer;
                }
                .login1{
                    border-top-left-radius: 50px;
                    border-bottom-left-radius: 50px;
                }
                .login2{
                    border-top-right-radius: 50px;
                    border-bottom-right-radius: 50px;
                }
                .login-active{
                    background-color: #3e8cf4;
                    color: #fff;
                }
            }
            .input-box{
                width: 100%;
                padding-top: 35px;
                padding-left: 5%;
                padding-right: 5%;
                box-sizing: border-box;
                .input-item{
                    position: relative;
                    width: 100%;
                    height: 50px;
                    margin-bottom: 20px;
                    input{
                        width: 100%;
                        height: 50px;
                        border-radius: 50px;
                        outline: none;
                        border: 1px solid #666;
                        color: #666;
                        padding-left: 40px;
                        font-size: 17px;
                        box-sizing: border-box;
                    }
                    img{
                        position: absolute;
                        left: 15px;
                        top: 15px;
                        width: 20px;
                        height: 20px;
                    }
                    span{
                        position: absolute;
                        right: 30px;
                        top: 0;
                        display: inline-block;
                        height: 50px;
                        line-height: 50px;
                        font-size: 14px;
                        color: #007dfe;
                    }
                }
            }
            .login-commit{
                width: 100%;
                height: 50px;
                margin-top: 40px;
                padding: 0 5%;
                button{
                    width: 100%;
                    height: 100%;
                    line-height: 50px;
                    border-radius: 50px;
                    background-color: #ff5c38;
                    color: #fff;
                    font-size: 20px;
                }
            }
        }
    }    
</style>
