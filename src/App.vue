<template>
	<div>
		<TheNavbar />
		<RouterView />

		<teleport to="body">
			<TheSidebar />
		</teleport>
	</div>
</template>
<script>
	import TheNavbar from './components/TheNavbar'
	import TheSidebar from './components/ui/TheSidebar'

	export default {
		components: { TheSidebar, TheNavbar }
	}
</script>
