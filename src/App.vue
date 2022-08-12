<template>

	<main v-if="loggedIn">

		<TheSidebar />

		<div class="main-app-container with-sidebar">

			<TheNavbar :layout="layout" />

			<perfect-scrollbar v-if="layout" ref="scroll">
				<Component
					class="main-container py-5"
					:is="layout + '-layout'"
				/>
			</perfect-scrollbar>

			<RouterView v-else />

			<teleport to="body">
				<TheSidebarPopup />
			</teleport>

		</div>

	</main>

	<div v-else>
		<TheNavbar :layout="layout" />
		<Component
			:is="layout + '-layout'"
			v-if="layout"
		/>
	</div>

</template>
<script>
	import TheNavbar from './components/TheNavbar'
	import AuthLayout from './layout/AuthLayout'
	import MainLayout from './layout/MainLayout'
	import TasksLayout from './layout/TasksLayout'
	import DashboardLayout from './layout/DashboardLayout'
	import TheSidebarPopup from './components/TheSidebarPopup'
	import TheSidebar from './components/TheSidebar'
	import FrontpageLayout from './layout/FrontpageLayout'

	export default {
		components: {
			TheSidebar,
			TheSidebarPopup,
			AuthLayout,
			MainLayout,
			TheNavbar,
			TasksLayout,
			DashboardLayout,
			FrontpageLayout
		},

		computed: {
			layout() {
				return this.$route.meta.layout
			},

			loggedIn() {
				return this.$store.getters['auth/isAuthenticated']
			}

		},

		watch: {
			$route() {
				if (this.$refs.scroll) {
					this.$refs.scroll.$el.scrollTop = 0
				}
			}
		}
	}
</script>

<style scoped lang="sass">

	.main-app-container
		display: flex
		flex-wrap: wrap
		box-shadow: inset 5px 0 30px 10px rgba(0, 0, 0, .10)

		&.with-sidebar
			margin-left: 280px

		.ps
			height: calc(100vh - 70px)
			width: 100%
</style>
