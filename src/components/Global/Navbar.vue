<template>
	<nav class="container-fluid p-0 sticky-top">
		<header class="p-3 text-bg-dark">
			<div class="container w-100">
				<div class="d-flex align-items-center justify-content-between" >
					<div class="d-flex">
						<code class="fs-5 text-white">layout: {{ layout }}</code>
						<code class="fs-5 ms-5 text-white">section: {{ getSectionName.toLowerCase() }}</code>
					</div>

					<div class="text-end">
						<button type="button" class="btn btn-outline-light me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
							Уведомления
						</button>
					</div>
				</div>
			</div>
		</header>
	</nav>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {

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
