import { tasks } from '../../plugins/axios'
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
		},

		addRequest(state, request) {
			state.requests.push(request)
		}
	},

	actions: {
		async create({ commit }, payload) {
			const { data } = await tasks.post('/create', payload)
			commit('addRequest', data)
		},

		async createMulti({ commit }, payload) {
			const { data } = await axios.post('http://localhost:8888/mail-register/create-multi-task', payload)
			commit('addRequest', data)
		},

		async load({ commit }) {
			const { data } = await axios.get('http://localhost:8888/mail-register/all-tasks')
			const requests = Object.keys(data).map(id => ({ ...data[id], id }))
			commit('setRequests', requests)
		},

		async loadById(_, id) {
			try {
				const { data } = await axios.get(`http://localhost:8888/mail-register/show-by-id/${id}`)
				return data
			} catch (error) {
				console.log(error)
			}
		},

		async loadTaskLog(_, id) {
			try {
				const { data } = await tasks.post(`/showTaskLog/${id}`)
				return data
			} catch (error) {
				console.log(error)
			}
		},

		async update(_, request) {
			try {
				await axios.post(`http://localhost:8888/mail-register/update-task/${request.id}`, request, {
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
				const { data } = await axios.post(`http://localhost:8888/mail-register/delete-task/${id}`, {}, {
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
		request(state) {
			return state.requests
		}
	}
}
