<template>
	<nav class="container-fluid p-0 sticky-top">
		<header class="p-3 text-bg-dark">
			<div class="container w-100">
				<div class="d-flex align-items-center justify-content-between" v-if="loggedIn">

					<span class="fs-5">Combiner - layout - {{ layout }}</span>

					<form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ms-auto" role="search">
						<input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Поиск..." aria-label="Search">
					</form>

					<div class="text-end">
						<!--	<button type="button" class="btn btn-outline-light me-2">Login</button>-->
						<button type="button" class="btn btn-outline-light me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
							Уведомления
						</button>
						<button type="button" class="btn btn-warning" @click="logout">Выход</button>
					</div>
				</div>

				<div class="d-flex align-items-center justify-content-between" v-else>

					<span class="fs-5">Combiner - layout - {{ layout }}</span>

					<form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ms-auto" role="search">
						<input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Поиск..." aria-label="Search">
					</form>

					<div class="text-end">
						<router-link to="/register" class="me-2">
							<button type="button" class="btn btn-secondary">Регистрация</button>
						</router-link>

						<router-link to="/login">
							<button type="button" class="btn btn-warning">Вход</button>
						</router-link>
					</div>
				</div>
			</div>
		</header>

		<!--<header class="d-flex flex-wrap justify-content-center py-3 text-dark">
			<router-link
				class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
				:to="loggedIn ? '/dashboard' : '/'"
			>
				<span class="fs-4">Combiner - layout - {{ layout }}</span>
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
		</header>-->
	</nav>
</template>

<script>
	import AppMenuLink from './ui/AppMenuLink'

	export default {
		components: { AppMenuLink },

		props: ['layout'],

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
