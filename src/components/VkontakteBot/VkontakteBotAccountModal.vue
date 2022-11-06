<template>
	<div class="modal fade" id="VkontakteTaskModal" tabindex="-1" aria-labelledby="VkontakteTaskModal" style="display: none" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="VkontakteTaskModal">
						Добавить аккаунт
					</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>

				<Form class="modal-content" @submit="onSubmit" :validation-schema="schema">
					<div class="modal-body">
						<div class="row">
							<div class="mb-3 col-12">

								<label for="count" class="form-label">Логин</label>
								<div class="input-group mb-3">
									<Field class="form-control" name="login" type="text" />
								</div>
								<ErrorMessage class="d-block" name="login" />


								<label for="count" class="form-label">Пароль</label>
								<div class="input-group mb-3">
									<Field class="form-control" name="password" type="password" />
								</div>
								<ErrorMessage class="d-block" name="password" />

								<label for="count" class="form-label">Прокси</label>
								<div class="input-group mb-3">
									<Field class="form-control" name="proxy" type="text" />
								</div>
								<ErrorMessage class="d-block" name="proxy" />
								
								<div class="modal-footer">
									<button class="btn btn-success">Submit</button>
								</div>

							</div>
						</div>
					</div>
				</Form>

			</div>
		</div>
	</div>
</template>

<script>
	import { Form, Field, ErrorMessage } from 'vee-validate'
	import * as yup from 'yup'
	import { mapActions } from 'vuex'

	export default {
		components: {
			Form,
			Field,
			ErrorMessage
		},

		props: ['request'],


		computed: {
			schema() {
				return yup.object({
					login: yup.string().required(),
					password: yup.string().required(),
					proxy: yup.string().required()
				})
			}
		},

		methods: {
			onSubmit(values) {
				this.create(values)
			},

			...mapActions('vkontakteBot', ['createTask'])
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
