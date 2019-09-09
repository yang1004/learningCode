/*
* @Author: mac
* @Date:   2019-09-03 10:20:46
* @Last Modified by:   mac
* @Last Modified time: 2019-09-04 10:22:13
*/
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
	store,
  	render: h => h(App),
}).$mount('#app')