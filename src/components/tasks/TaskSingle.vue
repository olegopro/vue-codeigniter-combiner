<template>
	<div class="container">

		<div class="row mb-5 align-items-center">
			<div class="col-6">
				<h1>Задача #{{ id }}</h1>
			</div>
			<div class="col-6">
				<router-link to="/tasks" custom v-slot="{navigate}">
					<button type="button" class="btn btn-secondary float-end" @click="navigate">
						Назад
					</button>
				</router-link>

			</div>

		</div>

		<div class="row">
			<div class="col-12">
				<div class="task">
					<p><strong>Имя: </strong>{{ request.task_fio }}</p>
					<p><strong>Телефон: </strong>{{ request.task_telephone }}</p>
					<p><strong>Статус: </strong>{{ request.task_status }}</p>

					<select class="form-select mb-3" id="status" aria-label="Default select example" v-model="statusValue">
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>

					<div>
						<button class="btn btn-secondary me-3" @click="updateById">Обновить</button>
						<button class="btn btn-danger" @click="deleteById">Удалить</button>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	import { mapActions } from 'vuex'

	export default {

		props: ['id'],

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

<style scoped lang="sass">
	.container
		height: calc(100vh - 70px)

		.task
			padding: 30px
			border-radius: 15px
			box-shadow: 0 2px 10px 10px hsl(0, 0%, 90%)
</style>
