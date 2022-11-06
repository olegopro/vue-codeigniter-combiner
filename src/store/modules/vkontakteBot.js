import { vkBot } from '../../plugins/axios'

export default {
	namespaced: true,

	state() {
		return {
			accounts: [],
			tasks: []
		}
	},

	mutations: {

		setAccounts(state, accounts) {
			state.accounts = accounts
		},

		addAccount(state, account) {
			state.accounts.push(account)
		},

		setTasks(state, tasks) {
			state.tasks = tasks
		},

		addTask(state, task) {
			state.tasks.push(task)
		}

	},

	actions: {

		async accounts({ commit }) {
			const { data } = await vkBot.post('/getAllAccounts')
			commit('setAccounts', data)
		},

		async tasks({ commit }) {
			const { data } = await vkBot.post('/getAllTasks')
			commit('setTasks', data)
		},

		async createTask({ commit }, payload) {
			const { data } = await vkBot.post('/createTask', payload)
			commit('addTask', data)
		},

		async addAccount({ commit }, payload) {
			const { data } = await vkBot.post('/addAccount', payload)
			commit('addAccount', data)
		}

	},

	getters: {

		getAccounts(state) {
			return state.accounts
		},

		getTasks(state) {
			return state.tasks
		}

	}

}
