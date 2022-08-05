import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Dashboard from '../views/Dashboard'
import MainLayout from '../layout/MainLayout'
import store from '../store'
import Tasks from '../views/Tasks'
import TaskSingle from '../components/tasks/TaskSingle'
import Help from '../views/Help'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'MainLayout',
			component: MainLayout,
			meta: {
				auth: false
			}
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard,
			meta: {
				auth: true
			}
		},
		{
			path: '/tasks',
			name: 'Tasks',
			component: Tasks,
			meta: {
				auth: true
			}
		},
		{
			path: '/tasks/:id',
			name: 'TaskSingle',
			component: TaskSingle,
			meta: {
				auth: true
			}
		},
		{
			path: '/help',
			name: 'Help',
			component: Help,
			meta: {
				auth: true
			}
		},
		{
			path: '/login',
			component: Signin
		},
		{
			path: '/register',
			component: Signup
		}
	],

	linkActiveClass: 'active'
	// linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
	const requireAuth = to.meta.auth

	if (requireAuth && store.getters['auth/isAuthenticated']) {
		next()
	} else if (requireAuth && !store.getters['auth/isAuthenticated']) {
		next('/login?message=auth')
	} else {
		next()
	}
})

export default router
