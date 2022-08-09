export default {
	namespaced: true,

	state() {
		return {
			username: ''
		}
	},

	mutations: {
		setUsername(state, username) {
			state.username = username
			localStorage.setItem('username', username)
		}
	},

	actions: {
		username({ commit }, { username }) {
			commit('setUsername', username)
		}
	},

	getters: {
		getUsername(state) {
			return state.username
		}
	}
}
