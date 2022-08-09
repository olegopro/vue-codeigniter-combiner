import { createStore } from 'vuex'
import auth from './modules/auth'
import tasks from './modules/tasks'
import user from './modules/user'

export default createStore({
	modules: { auth, tasks, user }
})
