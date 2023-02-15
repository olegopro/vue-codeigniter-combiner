<template>
	<div class="col-12 mb-5">
		<h2 class="mb-3">Лог действий</h2>
		<div class="log">
			<p v-for="item in request" :key="item.task_key">
				{{ item.created_at }}: {{ item.log_data }}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				request: {}
			}
		},

		async mounted() {
			this.request = await this.$store.dispatch('tasks/loadTaskLog', this.$route.params.id)
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
			word-break: break-word

			&:last-child
				margin-bottom: 0
</style>
