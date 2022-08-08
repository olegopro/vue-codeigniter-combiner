<template>
	<TheSidebar />

	<div class="main-app-container" :class="loggedIn ? 'with-sidebar' : ''">
		<TheNavbar :layout="layout" />

		<Component
			class="main-container"
			:is="layout + '-layout'"
			v-if="layout"
		/>

		<RouterView v-else />

		<teleport to="body">
			<TheSidebarPopup />
		</teleport>

	</div>
</template>
<script>
	import TheNavbar from './components/TheNavbar'
	import AuthLayout from './layout/AuthLayout'
	import MainLayout from './layout/MainLayout'
	import TasksLayout from './layout/TasksLayout'
	import DashboardLayout from './layout/DashboardLayout'
	import TheSidebarPopup from './components/ui/TheSidebarPopup'
	import TheSidebar from './components/TheSidebar'

	export default {
		components: {
			TheSidebar,
			TheSidebarPopup,
			AuthLayout,
			MainLayout,
			TheNavbar,
			TasksLayout,
			DashboardLayout
		},

		computed: {
			layout() {
				return this.$route.meta.layout
			},

			loggedIn() {
				return this.$store.getters['auth/isAuthenticated']
			}

		}
	}
</script>

<style scoped lang="sass">
	.main-app-container
		display: flex
		flex-wrap: wrap

	.main-container
		padding-top: 64px
		padding-bottom: 64px

	.with-sidebar
		margin-left: 280px
</style>
