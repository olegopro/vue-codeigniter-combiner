import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import store from '../store'
import Help from '../views/Help'
import Dashboard from '../views/Dashboard'
import UserSettings from '../views/UserSettings'
import SystemSettings from '../views/SystemSettings'
import Frontpage from '../views/Frontpage'
import MailRegisterSingle from '../components/MailRegister/MailRegisterSingle'
import MailRegisterLog from '../components/MailRegister/MailRegisterLog'
import MailRegister from '../views/MailRegister'
import VkontakteBotTasks from '../views/VkontakteBotTasks'
import VkontakteBotAccounts from '../views/VkontakteBotAccounts'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Frontpage',
			component: Frontpage,

			meta: {
				auth: false,
				layout: 'frontpage'
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
			path: '/mail-register',
			name: 'MailRegister',
			component: MailRegister,
			meta: {
				auth: true,
				layout: 'mail-register',
				pageName: 'Панель задач'
			}
		},
		{
			path: '/mail-register/:id',
			name: 'MailRegisterSingle',
			component: MailRegisterSingle,
			props: true,
			children: [
				{
					path: 'log',
					name: 'MailRegisterTaskLog',
					component: MailRegisterLog
				}
			],
			meta: {
				auth: true,
				layout: 'mailRegister',
				pageName: 'Редактирование задачи'
			}
		},
		{
			path: '/vkontakte-bot/accounts',
			name: 'VkontakteBotAccounts',
			component: VkontakteBotAccounts,
			meta: {
				auth: true,
				layout: 'main',
				pageName: 'Бот Vkontakte (аккаунты)'
			}
		},
		{
			path: '/vkontakte-bot/tasks',
			name: 'VkontakteBotTasks',
			component: VkontakteBotTasks,
			meta: {
				auth: true,
				layout: 'main',
				pageName: 'Бот Vkontakte (аккаунты)'
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
			name: 'login',
			component: Signin,
			meta: {
				layout: 'auth'
			}
		},
		{
			path: '/register',
			name: 'register',
			component: Signup,
			meta: {
				layout: 'auth'
			}
		}
	],

	linkActiveClass: 'active',
	linkExactActiveClass: 'active-exact'
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
