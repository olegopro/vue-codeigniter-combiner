import axios from 'axios'
import store from '../store'

const user = axios.create({
	baseURL: 'http://localhost:8888/user',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'X-Requested-With': 'XMLHttpRequest'
	}
})


user.interceptors.response.use(
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
	baseURL: 'http://localhost:8888/mailregister',
	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	}
})

const vkBot = axios.create({
	baseURL: 'http://localhost:8888/vkontaktebot',
	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	}
})

export { user, tasks, vkBot }
