<template>
  <div calss="bottom">
    <div class="bottomBox">
        <div class="bottom-top">
            <div class="bottom-top_l">
                <p class="title">卡卡转让服务</p>
                <ul>
                    <li>• 关于我们</li>
                    <li>• 帮助中心</li>
                    <li>• 服务协议</li>
                    <li>• 商家合作</li>
                    <li>• 隐私政策</li>
                    <li>• 转让协议</li>
                </ul>
            </div>
            <div class="bottom-top_r">
                <p class="title">卡卡转让客服</p>
                <p><span class="tel">400-926-5676</span><span>（免费客服电话）</span></p>
                <p class="time">周一至周日 08:00-次日01:00</p>
            </div>
        </div>
        <div class="bottom-middle">
            <a target="_blank" href="http://beian.miit.gov.cn">
                <img style="width: 130px;" src="../assets/img/备案.png" alt="">
            </a>
            <a target="_blank" href="http://www.cyberpolice.cn/wfjb/">
                <img style="width: 130px;" src="../assets/img/网络违法犯罪举报中心.png" alt="">
            </a>
            <a target="_blank" href="http://www.12377.cn/">
                <img style="width: 130px;" src="../assets/img/举报(2).png" alt="">
            </a>
            <a target="_blank" href="http://amr.sz.gov.cn/">
                <img style="width: 130px;" src="../assets/img/国徽.png" alt="">
            </a>
            <a target="_blank" href="https://www.360.cn/">
                <img style="width: 130px;" src="../assets/img/360安全卫士.png" alt="">
            </a>
        </div>
        <div class="bottom-footer">
            <p>Copyright © 2018 maikaquan.com 宁宁波邦邦电子科技有限公司 版权所有</p>
            <p><span>浙公网安备 33020902000257号</span><span style="margin-left: 15px;" class="beian">工信部备案号: 浙ICP备18057570号-1</span></p>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'bottom',
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
    .bottomBox{
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        background-color: #fff;
        .bottom-top{
            width: 100%;
            height: 200px;
            padding: 20px 5%;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #f4f4f4;
            .bottom-top_l{
                display: inline-block;
                padding-top: 20px;
                .title{
                    color: #666;
                    font-size: 20px;
                    line-height: 30px;
                    margin-bottom: 10px;
                }
                li{
                    display: inline-block;
                    float: left;
                    margin-right: 15px;
                    cursor: pointer;
                }
                li:hover{
                    color: #ff5c38;
                }
            }
            .bottom-top_r{
                display: inline-block;
                padding-top: 20px;
                margin-right: 200px;
                .title{
                    color: #666;
                    font-size: 20px;
                    line-height: 30px;
                    margin-bottom: 10px;
                }
                span{
                    font-size: 14px;
                    color: #999;
                }
                .tel{
                    font-size: 27px;
                    color: #ff5c38;
                    font-weight: 500;
                }
                .time{
                    margin-top: 15px;
                    color: #999;
                }
            }
        }
        .bottom-middle{
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .bottom-footer{
            width: 100%;
            text-align: center;
            margin-top: 20px;
            p{
                line-height: 27px;
                color: #666;
            }
            .beian:hover{
                color: #ff5c38;
                cursor: pointer;
            }
        }
    }
</style>
