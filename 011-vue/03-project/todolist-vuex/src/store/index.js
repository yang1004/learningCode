/*
* @Author: mac
* @Date:   2019-09-03 19:29:08
* @Last Modified by:   mac
* @Last Modified time: 2019-09-03 19:30:28
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