import { tasks } from '../../plugins/axios'

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

		async load({ commit }) {
			const { data } = await tasks.get('/show')
			const requests = Object.keys(data).map(id => ({ ...data[id], id }))
			commit('setRequests', requests)
		},

		async loadById(_, id) {
			try {
				const { data } = await tasks.post(`/showById/${id}`)
				return data
			} catch (error) {
				console.log(error)
			}
		},

		async update(_, request) {
			try {
				await tasks.post(`/update/${request.id}`, request)
			} catch (error) {
				console.log(error)
			}
		},

		async delete(_, id) {
			try {
				const { data } = await tasks.post(`/delete/${id}`)
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
