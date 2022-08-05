<template>
	<div class="container">
		<h1>Задача</h1>
		<p><strong>Имя: </strong>{{ request.task_fio }}</p>
		<p><strong>Телефон: </strong>{{ request.task_telephone }}</p>
		<p><strong>Статус: </strong>{{ request.task_status }}</p>

		<select class="form-select mb-3" id="status" aria-label="Default select example" v-model="statusValue">
			<option selected>Open this select menu</option>
			<option value="1">One</option>
			<option value="2">Two</option>
			<option value="3">Three</option>
		</select>

		<button class="btn btn-secondary me-3" @click="updateById">Обновить</button>
		<button class="btn btn-danger" @click="deleteById">Удалить</button>
	</div>

</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				request: {},
				statusValue: ''
			}
		},

		async mounted() {
			this.request = await this.$store.dispatch('tasks/loadById', this.$route.params.id)
			this.statusValue = this.request?.task_status
		},

		methods: {
			updateById() {
				const data = {
					id: this.$route.params.id,
					status: this.statusValue
				}
				this.update(data)
				this.request.task_status = this.statusValue
			},

			deleteById() {
				this.delete(this.$route.params.id)
				this.$router.push('/tasks')
			},

			...mapActions('tasks', ['delete', 'update'])
		},

		computed: {
			getRequest() {
				return this.request
			}
		}
	}
</script>

<style scoped>

</style>
