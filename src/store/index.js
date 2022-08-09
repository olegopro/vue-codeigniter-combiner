import { createStore } from 'vuex'
import auth from './modules/auth'
import tasks from './modules/tasks'
import user from './modules/user'

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

	modules: { auth, tasks, user }
})
