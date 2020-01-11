import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueSwiper from 'vue-awesome-swiper' // 引入轮播插件
import 'swiper/dist/css/swiper.css'
import './utils/rem' // 引入适配
import store from './../store/index'
import * as VueSpinnersCss from 'vue-spinners-css'
import $ from 'jquery'
import MetaInfo from 'vue-meta-info'
Vue.use(VueSpinnersCss)
Vue.use(vueSwiper)
Vue.use(ElementUI)
Vue.use(MetaInfo)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // 创建中央事件总线
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
