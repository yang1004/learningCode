import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from 'vuex'
// import { ADD } from './mutations-types'
// import {
//   request
// } from '@/network/request'
// 1安装插件
Vue.use(Vuex)
const Store = new Vuex.Store({
  // 公共仓库，储存数据
  state: {
    sousuoCon1: [], // 保存搜索商品内容
    lang: '', // 保存所有语言
    loading: true,
    loading1: true,
    mid: '', // 二级菜单页面的显示隐藏
    con: [], // 头部title第一次点击内容
    fid: '', // 一级菜单id
    sid: '', // 二级菜单id
    pagesize: '', // 分页个数
    currentPage: '', // 分页页数

    collect: [], // 判断商品是否收藏 标识
    activeIndex: '', // 头部底部索引
    success: false, // 判断是否登录成功
    emailSuccess: '', // 登录成功邮箱信息
    // email: sessionStorage.getItem('email')

    classifyDescribe:''

  },
  // 处理异步函数和业务逻辑，里面的参数都是函数
  actions: {
    // 首页轮播图
  },
  // 主要用来修改state中的数据
  mutations: {
    getClassifyDescribe(state, params){//保存二级分类场景介绍
      state.classifyDescribe = params
    },
    sousuoCon (state, params) { // 保存搜索的商品
      state.sousuoCon1 = params
    },
    language (state, params) { // 选择语言
      state.lang = JSON.parse(params)
      console.log('state.lang',state.lang)
      // let l = sessionStorage.getItem('lang')
      // if (l) {
      //   state.lang = JSON.parse(params)
      // } else {
      //   state.lang = JSON.parse(params)
      //   console.log(state.lang)
      // }
    },

    loading (state, param) { // 隐藏显示loading
      state.loading = param
    },
    loading1 (state, param) { // 隐藏显示loading
      state.loading1 = param
    },
    // 平常使用到的函数
    activeIndex (state, index) { // 头部索引
      state.activeIndex = index
    },
    con (state, con) { // 头部信息内容
      state.con = con
    },

    hidden (state) { // 二级菜单页面的隐藏
      state.mid = false
    },
    show (state) { // 二级菜单页面的显示
      state.mid = true
    },
    id (state, params) { // 一级分类和二级分类id
      state.fid = params.fid
      state.sid = params.sid
      state.tid = params.tid
    },
    page (state, params) { // 分页个数和页数
      state.pagesize = params.pagesize // 分页个数
      state.currentPage = params.currentPage // 分页页数
    },
    collect (state, params) { // 判断是否收藏
      state.collect = params
      // console.log(params)
    },
    // 修改code
    xiugaiCode (state, params) {
      // console.log(code)
      let id = params.id
      let code = params.code
      // console.log(id, code)
      let collec = state.collect
      // console.log(collec)
      // 遍历收藏商品的所有 状态
      for (let i = 0; i < collec.length; i++) {
        if (collec[i].id === id) {
          collec[i].code = code
        }
      }
      // console.log(collec, 'llllllllllllllllllllllllllllllllllllllllll')
    },
    // 新增加一个code
    addCollec (state, params) {
      let collec = state.collect
      collec.push(params)
      console.log(collec)
    },
    // 判断是否登录
    success (state, param) {
      state.success = param
      // console.log(true)
    },
    emailSuccess (state, params) {
      state.emailSuccess = params
      console.log(params)
    }

  },
  getters: {

    // getheaderId: function (state) {
    //   return state.headerId
    // }
  },
  modules: {}
})
export default Store
