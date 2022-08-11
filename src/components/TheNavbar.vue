<template>
	<nav class="container-fluid p-0 sticky-top">
		<header class="p-3" :class="loggedIn ? 'text-bg-dark' :'text-white'">
			<div class="container w-100">
				<div class="d-flex align-items-center justify-content-between" v-if="loggedIn">

					<span class="fs-5">Layout - {{ layout }}</span>
					<span class="fs-5 ms-5">Section name - {{ getSectionName }}</span>

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

					<h3 class="float-md-start mb-0">
						<router-link to="/" class="nav-link ">The Combiner</router-link>
					</h3>
					<!--<span class="fs-5">Combiner - layout - {{ layout }}</span>-->

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
	</nav>
</template>

<script>
	import AppMenuLink from './ui/AppMenuLink'
	import { mapGetters } from 'vuex'

	export default {
		components: { AppMenuLink },

		props: ['layout'],

		computed: {
			...mapGetters(['getSectionName']),
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
		background-color: transparent
</style>
