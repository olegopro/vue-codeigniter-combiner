import router from '../../router'

const TOKEN_KEY = 'token'

export default {
	namespaced: true,

	state() {
		return {
			token: localStorage.getItem(TOKEN_KEY)
		}
	},

	mutations: {
		setToken(state, token) {
			state.token = token
			localStorage.setItem(TOKEN_KEY, token)
		},

		logout(state) {
			state.token = null
			localStorage.removeItem(TOKEN_KEY)
			localStorage.removeItem('username')
			router.push('/')
		}
	},

	actions: {
		async login({ commit }, { token }) {
			commit('setToken', token)
			router.push('/dashboard')
		}
	},

	getters: {
		token(state) {
			return state.token
		},

		isAuthenticated(_, getters) {
			return !!getters.token
		}
	}
}
