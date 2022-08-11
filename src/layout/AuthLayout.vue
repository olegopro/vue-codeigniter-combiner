<template>
	<body class="d-flex vh-100 ">
		<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			<main class="my-auto">
				<div style="margin-top: -70px">

					<div class="container" :style="routeName === 'register' ? 'top: 50%' : 'top: 46%'">
						<RouterView />
					</div>
				</div>
			</main>

			<footer class="text-white-50 text-center">
				<p>Следите за развитием проекта на Github в репозитория <a href="https://github.com/olegopro/vue-codeigniter-combiner" target="_blank" class="text-white">Vue Combiner</a> и <a href="https://github.com/olegopro/codeigniter-combiner" target="_blank" class="text-white">Codeigniter Combiner</a></p>
			</footer>
		</div>
	</body>
</template>

<script>
	export default {
		computed: {
			routeName() {
				return this.$route.name
			}
		}
	}
</script>

<style scoped lang="sass">
	body
		margin-top: -70px
		box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5)
		background: rgb(33, 37, 41)

	.container
		position: absolute
		//top: 46%
		left: 50%
		transform: translate(-50%, -50%)
		width: 500px
		padding: 30px
		border-radius: 15px
		box-shadow: 0 2px 10px 10px hsl(0, 0%, 8.2%)
		background-color: white
</style>
