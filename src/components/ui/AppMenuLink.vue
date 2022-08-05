<template>
	<li class="nav-item">
		<RouterLink
			class="nav-link"
			:to="path"
			:text="text"
		/>
	</li>
</template>

<script>
	export default {
		props: ['text', 'path']
	}
</script>

<style scoped>

</style>
