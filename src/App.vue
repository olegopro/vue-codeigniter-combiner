<template>

	<main>

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

</template>
<script>
	import TheNavbar from './components/Global/Navbar.vue'
	import MainLayout from './layouts/MainLayout'
	import DashboardLayout from './layouts/DashboardLayout'
	import TheSidebarPopup from './components/Global/SidebarPopup.vue'
	import TheSidebar from './components/Global/Sidebar.vue'
	import FrontpageLayout from './layouts/FrontpageLayout'
	import MailRegisterLayout from './layouts/MailRegisterLayout'
	import WebWalkerLayout from './layouts/WebWalkerLayout.vue'

	export default {
		components: {
			DashboardLayout,
			FrontpageLayout,
			MailRegisterLayout,
			MainLayout,
			TheNavbar,
			TheSidebar,
			TheSidebarPopup,
			WebWalkerLayout
		},

		computed: {
			layout() {
				return this.$route.meta.layout
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
