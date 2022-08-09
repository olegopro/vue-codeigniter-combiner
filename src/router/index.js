import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import MainLayout from '../layout/MainLayout'
import store from '../store'
import Tasks from '../views/Tasks'
import TaskSingle from '../components/tasks/TaskSingle'
import Help from '../views/Help'
import Dashboard from '../views/Dashboard'
import UserSettings from '../views/UserSettings'
import SystemSettings from '../views/SystemSettings'

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
				auth: true,
				layout: 'dashboard',
				pageName: 'Статистика'
			}
		},
		{
			path: '/tasks',
			name: 'Tasks',
			component: Tasks,
			meta: {
				auth: true,
				layout: 'tasks',
				pageName: 'Панель задач'
			}
		},
		{
			path: '/tasks/:id',
			name: 'TaskSingle',
			component: TaskSingle,
			meta: {
				auth: true,
				layout: 'tasks',
				pageName: 'Редактирование задачи'
			}
		},
		{
			path: '/help',
			name: 'Help',
			component: Help,
			meta: {
				auth: true,
				layout: 'main',
				pageName: 'Помощь'
			}
		},
		{
			path: '/userconfig',
			name: 'UserConfig',
			component: UserSettings,
			meta: {
				auth: true,
				layout: 'main',
				pageName: 'Настройки пользователя'
			}
		},
		{
			path: '/systemconfig',
			name: 'SystemConfig',
			component: SystemSettings,
			meta: {
				auth: true,
				layout: 'main',
				pageName: 'Системные настройки'
			}
		},
		{
			path: '/login',
			component: Signin,
			meta: {
				layout: 'auth'
			}
		},
		{
			path: '/register',
			component: Signup,
			meta: {
				layout: 'auth'
			}
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

	const pageName = to.meta.pageName

	if (pageName) {
		store.dispatch('sectionName', pageName)
	} else {
		store.dispatch('sectionName', 'Без названия')
	}
})

export default router
