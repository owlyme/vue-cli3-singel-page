import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import { mutations } from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	    groups: [1]
	},
	getters: {
		getGroups (state) {
			return state.groups
		}
  	},
  	actions,
  	mutations,
	modules,
	strict: process.env.NODE_ENV !== 'production'
})