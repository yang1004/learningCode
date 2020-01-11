/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
// const BASE_URL = 'http://api.klgj.top'//线上接口
// const BASE_URL = 'http://47.89.250.139:8888'//线上接口
const BASE_URL = 'http://47.105.185.81:8899'//线上接口
// const BASE_URL = 'http://192.168.0.111:8082'//本地接口
// const BASE_URL = '/api'
// axios.defaults.baseURL ="http://127.0.0.1:8899";

// 1.头部
export const headerSearch = (search, classId,element) => ajax(BASE_URL + '/fontGoods/listGoods', {
  search,
  classId,
  element
}) // 请求头部搜索
export const header = (element) => ajax(BASE_URL + '/fontClassify/firstClassify',{
  element
}) // 请求头部所有数据
export const headerClick = (id) => ajax(BASE_URL + '/fontClassify/queryImgByClassify', { // 请求一级分类下边轮播图
  id,
})
export const language = () => ajax(BASE_URL + '/fontShop/getAllLanguage') // 请求头部所有数据
// 2.// 获取首页轮播
export const homeSwiper = () => ajax(BASE_URL + '/fontBanner/allBanner')
// 3. 首页第一个内容
export const homeCon1 = (category, email,element) => ajax(BASE_URL + '/fontGoods/getCaizhuangList', {
  category,
  email,
  element
})
// 4.首页第二个内容
export const homeCon2 = (email) => ajax(BASE_URL + '/newGoods/findNewGood', {
  email
})
// 5.首页第三个内容
export const homeCon3 = (category,element) => ajax(BASE_URL + '/fontGoods/getCaizhuangList', {
  category,
  element
})

// 7. 一级分类下边六个图标
export const skillCon1 = (element) => ajax(BASE_URL + '/fontClassify/firstClassify',{
  element
})
// 8.二级分类下边内容
export const skillCon2 = (fid, sid, page, size, email,element) => ajax(BASE_URL + '/fontGoods/queryGoodByChildClassify', {
  fid,
  sid,
  page,
  size,
  email,
  element
})

// 9. 一级分类下边的轮播
export const skillSwiper = (id) => ajax(BASE_URL + '/fontClassify/queryImgByClassify', {
  id
})
// 10.//侧边栏
export const slide = (element) => ajax(BASE_URL + '/fontClassify/allClassify',{
  element
})
// 11.规格 也就是商品详情
export const guige = (id, email,element) => ajax(BASE_URL + '/fontGoods/queryGoodDetailById', {
  id,
  email,
  element
})
// 12.推荐
export const recommend = (element) => ajax(BASE_URL + '/fontGoods/listRecommendedGoods',{
  element
})

// 13,购物车商品内容
export const carCon = (email) => ajax(BASE_URL + '/fontShop/queryShop', {
  email
})
// 14.收藏商品像购物车一样页面的内容
export const collectCon = (email) => ajax(BASE_URL + '/fontGoods/listCollection', {
  email
})
// 15.详情页发送邮件 问一个问题
export const email1 = (email, name, useremail, phone, question, addUs, ip,company) => ajax(BASE_URL + '/sendMail/askaquestion', {
  email,
  name,
  useremail,
  phone,
  question,
  addUs,
  ip,
  company
}, 'POST')
// 16.购买商品发送邮件
export const email111 = (question,email,name,ip,useremail,phone,addUs,orderMoney,price,address,yunfei,goodList,type) => ajax(BASE_URL + '/sendMail/sendMail', {
  question,
  email,
  name,
  ip,
  useremail,
  phone,
  addUs,
  orderMoney,
  price,
  address,
  yunfei,
  goodList,
  type
}, 'POST')
// 1、根据经纬度获取位置详情
// export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// // 2、获取食品分类列表
// export const reqCategorys = () => ajax(BASE_URL + '/index_category')
// // 3、根据经纬度获取商铺列表
// export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {longitude, latitude})
// // 4、根据经纬度和关键字搜索商铺列表
// export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
// // 6、用户名密码登陆
// export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// // 7、发送短信验证码
// export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// // 8、手机号验证码登陆
// export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
