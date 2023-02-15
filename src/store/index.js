import { createStore } from 'vuex'
import mailRegister from './modules/mailRegister'
import webWalker from './modules/webWalker'

export default createStore({
	state() {
		return {
			sectionName: 'Default name'
		}
	},

	mutations: {
		setSectionName(state, sectionName) {
			state.sectionName = sectionName
		}
	},

	actions: {
		sectionName({ commit }, sectionName) {
			commit('setSectionName', sectionName)
		}
	},

	getters: {
		getSectionName(state) {
			return state.sectionName
		}
	},

	modules: { mailRegister, webWalker }
})
