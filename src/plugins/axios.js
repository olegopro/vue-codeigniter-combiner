import axios from 'axios'

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

export { tasks, vkBot }
