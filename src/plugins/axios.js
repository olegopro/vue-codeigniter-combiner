import axios from 'axios'

const tasks = axios.create({
	baseURL: 'http://localhost:8888/mailregister',
	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	}
})
export { tasks }
