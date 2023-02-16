<template>
	<div class="container">

		<div class="row mb-5 align-items-center">
			<div class="col-6">
				<h1>Задача #{{ id }}</h1>
			</div>
			<div class="col-6">
				<router-link to="/web-walker" custom v-slot="{navigate}">
					<button type="button" class="btn btn-secondary float-end" @click="navigate">
						Назад
					</button>
				</router-link>
			</div>
		</div>

		<div class="row">
			<div class="col-12 mb-5">
				<div class="task">
					<p><strong>Вход: </strong>{{ request.entry_point }}</p>
					<p><strong>Переходы: </strong>{{ request.internal_transitions }}</p>

					<p>
						<Status :type="request.status" />
					</p>

					<select class="form-select mb-3" id="status" aria-label="Default select example" v-model="statusValue">
						<option value="active">Активировать</option>
						<option value="cancelled">Отменить</option>
						<option value="done">Завершить</option>
						<option value="pending">Запустить</option>
					</select>

					<div>
						<button class="btn btn-secondary me-3" @click="updateById" :disabled="!hasChanges">
							Обновить
						</button>

						<button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#taskDeleteModal">
							Удалить
						</button>

						<!--<teleport to="body">
							<MailRegisterTaskModalDelete />
						</teleport>

						<router-link custom v-if="this.$route.name !== 'MailRegisterTaskLog'" :to="this.$route.fullPath + '/log'" v-slot="{navigate}">
							<button class="btn btn-danger float-end" @click="navigate">
								Показать лог
							</button>
						</router-link>

						<router-link custom v-else :to="{name: 'MailRegisterSingle', params: { id: this.$route.params.id }}" v-slot="{navigate}">
							<button class="btn btn-secondary float-end" @click="navigate">
								Скрыть лог
							</button>
						</router-link>-->

					</div>
				</div>
			</div>

			<div class="col-12">
				<RouterView />
			</div>
		</div>

		<teleport to="body">
			<TaskDelete />
		</teleport>

	</div>
</template>

<script>
	import Status from '../Global/Status.vue'
	import { mapActions } from 'vuex'
	import TaskDelete from './Modals/TaskDelete.vue'

	export default {
		components: { TaskDelete, Status },
		props: ['id'],

		data() {
			return {
				request: {},
				statusValue: ''
			}
		},

		computed: {
			hasChanges() {
				return this.request.status !== this.statusValue
			}
		},

		async mounted() {
			this.request = await this.$store.dispatch('webWalker/loadById', this.$route.params.id)
			this.statusValue = this.request?.status
		},

		methods: {
			updateById() {
				const data = {
					id: this.$route.params.id,
					status: this.statusValue
				}
				this.update(data)
				this.request.status = this.statusValue
			},

			...mapActions('webWalker', ['update'])
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

		button.btn
			width: 150px
</style>
