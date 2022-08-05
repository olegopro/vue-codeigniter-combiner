import axios from 'axios'
import store from '../store'

const guest = axios.create({
	baseURL: 'http://localhost:8888/user',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'X-Requested-With': 'XMLHttpRequest'
	}
})

const api = axios.create({
	baseURL: 'http://localhost:8888/user',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'X-Requested-With': 'XMLHttpRequest'
	}
})

api.interceptors.response.use(
	function (response) {
		return response
	},
	function (error) {
		if (error.response.status === 401) {
			store.commit('auth/logout')
		} else {
			return Promise.reject(error)
		}
	}
)

const tasks = axios.create({
	baseURL: 'http://localhost:8888/tasks',
	headers: {
		// 'Content-Type': 'application/x-www-form-urlencoded',
		'X-Requested-With': 'XMLHttpRequest'
	}
})

export { guest, api, tasks }
