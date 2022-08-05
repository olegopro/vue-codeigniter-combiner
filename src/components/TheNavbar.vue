<template>
	<nav class="container-fluid">
		<header class="d-flex flex-wrap justify-content-center py-3  mb-4 text-dark">
			<router-link
				class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
				:to="loggedIn ? '/dashboard' : '/'"
			>
				<span class="fs-4">Combiner</span>
			</router-link>

			<ul class="nav nav-pills" v-if="!loggedIn">
				<AppMenuLink
					path="/register"
					text="Регистрация"
				/>
				<AppMenuLink
					path="/login"
					text="Вход"
				/>
			</ul>
			<ul v-else class="nav nav-pills">
				<AppMenuLink
					path="/tasks"
					text="Заявки"
				/>
				<AppMenuLink
					path="/help"
					text="Помощь"
				/>
				<li class="nav-item">
					<button class="nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
						Сайдбар
					</button>
				</li>
				<li class="nav-item">
					<button class="nav-link" @click="logout">
						Выход
					</button>
				</li>
			</ul>
		</header>
	</nav>
</template>

<script>
	import AppMenuLink from './ui/AppMenuLink'

	export default {
		components: { AppMenuLink },

		computed: {
			loggedIn() {
				return this.$store.getters['auth/isAuthenticated']
			}
		},

		methods: {
			logout() {
				this.$store.commit('auth/logout')
			}
		}
	}
</script>

<style lang="sass" scoped>
	.container-fluid
		background-color: whitesmoke
</style>
