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

				<Form class="modal-content" @submit="onSubmit" :validation-schema="schema">
					<div class="modal-body">
						<div class="row">
							<div class="mb-3 col-12">

								<label for="count" class="form-label">Количество</label>
								<div class="input-group mb-3">
									<Field class="form-control" name="count" type="number" />

								</div>
								<ErrorMessage class="d-block" name="count" />


								<label for="action" class="form-label">Действие</label>
								<div class="input-group mb-3">
									<Field class="form-select" name="action" as="select">
										<option value="like">like</option>
										<option value="follow">follow</option>
										<option value="unfollow">unfollow</option>
									</Field>
								</div>


								<label for="account" class="form-label">Аккаунт</label>
								<div class="input-group mb-3">
									<Field class="form-select" name="account" as="select">
										<option v-for="account in request" :key="account.account_name" :value="account.account_name">
											{{ account.account_name }}
										</option>
									</Field>
								</div>

								<label for="status" class="form-label">Статус задачи</label>
								<div class="input-group mb-3">
									<Field class="form-select" name="status" as="select">
										<option value="active">active</option>
										<option value="cancelled">cancelled</option>
										<option value="done">done</option>
										<option value="done">pending</option>
									</Field>
								</div>

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
		components: { Form, Field, ErrorMessage },

		props: ['request'],


		computed: {
			schema() {
				return yup.object({
					count: yup.number().min(5).required(),
					status: yup.string().required()
				})
			}
		},

		methods: {
			onSubmit(values) {
				this.createTask(values)
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
