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
		},

		async loadById(_, id) {
			try {
				const { data } = await axios.get(`http://localhost:8888/web-walker/show-by-id/${id}`)
				return data
			} catch (error) {
				console.log(error)
			}
		},

		async update(_, request) {
			try {
				await axios.post(`http://localhost:8888/web-walker/update-task/${request.id}`, request, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
			} catch (error) {
				console.log(error)
			}
		},

		async delete(_, id) {
			try {
				const { data } = await axios.post(`http://localhost:8888/web-walker/delete-task/${id}`, {}, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})

				return data
			} catch (error) {
				console.log(error)
			}
		}
	},

	getters: {
		allTasks(state) {
			return state.requests
		}
	}
}
