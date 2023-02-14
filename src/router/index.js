import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Help from '../views/Help'
import Dashboard from '../views/Dashboard'
import Frontpage from '../views/Frontpage'
import MailRegisterSingle from '../components/MailRegister/Single.vue'
import MailRegisterLog from '../components/MailRegister/Log.vue'
import MailRegister from '../views/MailRegister'

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
			path: '/help',
			name: 'Help',
			component: Help,
			meta: {
				auth: true,
				layout: 'main',
				pageName: 'Помощь'
			}
		}
	],

	linkActiveClass: 'active',
	linkExactActiveClass: 'active-exact'
})

router.beforeEach((to, from, next) => {
	next()

	const pageName = to.meta.pageName

	if (pageName) {
		store.dispatch('sectionName', pageName)
	} else {
		store.dispatch('sectionName', 'Без названия')
	}
})

export default router
