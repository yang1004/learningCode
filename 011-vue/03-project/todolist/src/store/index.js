/*
* @Author: mac
* @Date:   2019-09-04 10:21:33
* @Last Modified by:   mac
* @Last Modified time: 2019-09-04 10:25:42
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})