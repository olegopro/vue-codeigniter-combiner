<template>
	<div class="modal fade" id="MailRegisterTaskModal" tabindex="-1" aria-labelledby="MailRegisterTaskModal" style="display: none" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="MailRegisterTaskModal">
						Создать задачу
					</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>

				<ul class="nav nav-pills m-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true">
							Массовая задача
						</button>
					</li>

					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="false" tabindex="-1">
							Одиночная задача
						</button>
					</li>


				</ul>

				<div class="tab-content" id="pills-tabContent">
					<div class="tab-pane show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
						<form class="modal-content" @submit.prevent="onSubmitMulti">
							<div class="modal-body">
								<div class="mb-3">
									<label for="count" class="form-label">Количество</label>
									<input type="number" class="form-control" id="count" placeholder="" v-model="count" />
								</div>

								<div class="mb-3">
									<label for="proxyList" class="form-label">Прокси</label>
									<textarea type="text" class="form-control" id="proxyList" placeholder="" v-model="proxyList" rows="1"></textarea>
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
					<div class="tab-pane" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
						<form class="modal-content" @submit.prevent="onSubmitSingle">
							<div class="modal-body">
								<div class="row">
									<div class="mb-3 col-6">
										<label for="firstname" class="form-label">Имя</label>
										<input type="text" class="form-control" id="firstname" placeholder="" v-model="firstname" />
									</div>

									<div class="mb-3 col-6">
										<label for="lastname" class="form-label">Фамилия</label>
										<input
											type="text"
											class="form-control"
											id="lastname"
											placeholder=""
											v-model="lastname"
										/>
									</div>
								</div>

								<div class="row">
									<div class="col-4">
										<select
											class="form-select mb-3"
											id="day"
											aria-label="Default select example"
											v-model="day"
										>
											<option selected>День</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
										</select>
									</div>

									<div class="col-4">
										<select
											class="form-select mb-3"
											id="month"
											aria-label="Default select example"
											v-model="month"
										>
											<option selected>Месяц</option>
											<option value="Январь">
												Январь
											</option>
											<option value="Февраль">
												Февраль
											</option>
											<option value="Март">Март</option>
											<option value="Апрель">
												Апрель
											</option>
										</select>
									</div>

									<div class="col-4">
										<select
											class="form-select mb-3"
											id="year"
											aria-label="Default select example"
											v-model="year"
										>
											<option selected>Год</option>
											<option value="1992">1992</option>
											<option value="1993">1993</option>
											<option value="1994">1994</option>
											<option value="1995">1995</option>
										</select>
									</div>
								</div>

								<div class="input-group mb-3">
									<input
										type="text"
										class="form-control"
										id="email"
										placeholder=""
										v-model="email"
									/>
									<span
										class="input-group-text"
										id="basic-addon2"
									>@mail.ru</span
									>
								</div>

								<span class="mb-2 d-block w-100"
								>Прокси сервер</span
								>
								<div class="input-group mb-3">
									<input
										type="text"
										class="form-control"
										placeholder="http://username:password@192.168.1.1:8080"
										v-model="proxy"
									/>
								</div>

								<div class="mb-3">
									<label for="password" class="form-label">Пароль</label
									>
									<input
										type="text"
										class="form-control"
										id="password"
										placeholder=""
										v-model="password"
									/>
								</div>

								<label for="status" class="form-label">Статус</label>

								<select class="form-select mb-3" disabled id="status" aria-label="Default select example" v-model="status">
									<option selected>Выберите статус</option>
									<option value="active">Активировать</option>
									<option value="cancelled">cancelled</option>
									<option value="done">done</option>
									<option value="pending">pending</option>
								</select>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-outline-secondary"
									data-bs-dismiss="modal"
								>
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

			...mapActions('mailRegister', ['create', 'createMulti'])
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
