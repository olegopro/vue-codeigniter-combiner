<template>
	<div class="modal fade" id="VkontakteTaskModal" tabindex="-1" aria-labelledby="VkontakteTaskModal" style="display: none" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="VkontakteTaskModal">
						Создать задачу
					</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>

				<form class="modal-content" @submit.prevent="onSubmitMulti">
					<div class="modal-body">
						<div class="mb-3">
							<label for="count" class="form-label">Количество</label>
							<input type="number" class="form-control" id="count" placeholder="" v-model="count" />
						</div>

						<label for="task-type" class="form-label">Тип задания</label>
						<select
							class="form-select mb-3"
							id="task-type"
						
						>
							<option selected>Выберите тип задания</option>
							<option value="like">Лайк</option>
							<option value="follow">Подписка</option>
							<option value="unfollow">Отписка</option>
							<option value="view-stories">Просмотр сторис</option>
						</select>

						<div class="mb-3">
							<label for="proxyList" class="form-label">Прокси</label>
							<input type="text" class="form-control" id="proxyList" placeholder="" v-model="proxyList" rows="1">
						</div>


						<label for="status" class="form-label">Статус</label>
						<select
							class="form-select mb-3"
							disabled
							id="status"
							aria-label="Default select example"
							v-model="status"
						>
							<option selected>Выберите статус</option>
							<option value="active">Активировать</option>
							<option value="cancelled">cancelled</option>
							<option value="done">done</option>
							<option value="pending">pending</option>
						</select>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
							Закрыть
						</button>
						<button type="submit" class="btn btn-success">
							Создать
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'


	export default {
		data() {
			return {
				firstname: '',
				lastname: '',
				day: 'День',
				month: 'Месяц',
				year: 'Год',
				email: '',
				password: '',
				proxy: '',
				status: 'active',
				count: '',
				proxyList: ''
			}
		},


		methods: {
			onSubmitSingle() {
				const form = new FormData()

				form.append('firstname', this.firstname)
				form.append('lastname', this.lastname)
				form.append('day', this.day)
				form.append('month', this.month)
				form.append('year', this.year)
				form.append('email', this.email)
				form.append('password', this.password)
				form.append('proxy', this.proxy)
				form.append('status', this.status)

				this.create(form)
			},

			onSubmitMulti() {
				console.log(this.proxy)

				const form = new FormData()
				form.append('count', this.count)
				form.append('proxyList', this.proxyList)
				form.append('status', this.status)

				this.createMulti(form)
			},

			...mapActions('tasks', ['create', 'createMulti'])
		}
	}


</script>

<style scoped lang="sass">
	.modal
		padding-left: 280px

		.modal-dialog
			.modal-content
				ul.nav-pills
					li button
						&.nav-link
							color: #5c636a

							&.nav-link.active
								color: white
								background-color: #5c636a

					.tab-content .tab-pane
						form
							border-top-left-radius: 0
							border-top-right-radius: 0

							.modal-footer
								button
									width: 120px
</style>
