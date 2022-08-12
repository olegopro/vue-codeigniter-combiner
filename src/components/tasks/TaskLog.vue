<template>
	<div class="col-12">
		<h2 class="mb-3">Лог действий</h2>
		<div class="log">
			<p><span>12:22 - </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, iste.</p>
			<p><span>14:11 - </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<p><span>16:12 - </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis libero molestias.</p>
		</div>

	</div>

</template>

<script>
	export default {
		mounted() {
			console.log(this.$route)
		}
	}
</script>

<style scoped lang="sass">
	.log
		padding: 30px
		border-radius: 15px
		box-shadow: 0 2px 10px 10px hsl(0, 0%, 90%)

		p
			&:last-child
				margin-bottom: 0
</style>
