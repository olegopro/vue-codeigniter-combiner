import axios from 'axios'

export default {
	namespaced: true,

	state() {
		return {
			requests: []
		}
	},

	mutations: {
		setRequests(state, requests) {
			state.requests = requests
		}
	},

	actions: {
		async createTask(_, payload) {
			await axios.post('http://localhost:8888/web-walker/create-task', payload, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
		},

		async getAllTasks({ commit }) {
			const { data } = await axios.post('http://localhost:8888/web-walker/tasks')
			commit('setRequests', data)
		}
	},

	getters: {
		allTasks(state) {
			return state.requests
		}
	}
}
