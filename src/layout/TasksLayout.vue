<template>
	<div class="container">
		<RouterView />
	</div>
</template>

<script>
	export default {}
</script>

<style scoped lang="sass">
	.container:first-child
		box-shadow: 0 2px 10px 10px hsl(0, 0%, 90%)
		padding: 30px
		border-radius: 15px
</style>
