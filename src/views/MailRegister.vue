<template>
	<div class="container">
		<div class="row mb-5 align-items-center">
			<div class="col-3">
				<h1>Задачи</h1>
			</div>

			<div class="col-6">
				<MailRegisterTasksFilter v-model="filter" />
			</div>

			<div class="col-3">
				<button type="button" class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#MailRegisterTaskModal">
					Создать задачу
				</button>
			</div>
		</div>

		<MailRegisterTable :request="requests" />

		<teleport to="body">
			<MailRegisterTaskModal />
		</teleport>

	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import MailRegisterTable from '../components/MailRegister/Table.vue'
	import MailRegisterTasksFilter from '../components/MailRegister/TasksFilter.vue'
	import MailRegisterTaskModal from '../components/MailRegister/TaskModal.vue'

	export default {
		components: { MailRegisterTasksFilter, MailRegisterTable, MailRegisterTaskModal },

		data() {
			return {
				filter: {}
			}
		},

		mounted() {
			this.load()
		},

		computed: {
			...mapGetters('mailRegister', ['request']),

			requests() {
				return this.request
					.filter(request => {
						if (this.filter.status && this.filter.status !== 'Выберите статус') {
							return request.task_status.includes(this.filter.status)
						}

						return request
					})
					.filter(request => {
						if (this.filter.email) {
							return request.task_email.includes(this.filter.email)
						}

						return request
					})
			}
		},

		methods: {
			...mapActions('mailRegister', ['load'])
		}

	}
</script>

<style scoped lang="sass">
	.container
		button
			width: 150px
</style>
