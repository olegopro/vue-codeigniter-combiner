<template>
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" style="display: none;" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<form class="modal-content" @submit.prevent="onSubmit">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalCenterTitle">Создать задачу</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="mb-3">
						<label for="fio" class="form-label">ФИО</label>
						<input type="text" class="form-control" id="fio" placeholder="" v-model="fio">
					</div>

					<div class="mb-3">
						<label for="telephone" class="form-label">Телефон</label>
						<input type="text" class="form-control" id="telephone" placeholder="" v-model="telephone">
					</div>

					<div class="mb-3">
						<label for="sum" class="form-label">Сумма</label>
						<input type="text" class="form-control" id="sum" placeholder="" v-model="sum">
					</div>

					<label for="status" class="form-label">Статус</label>
					<select class="form-select mb-3" id="status" aria-label="Default select example" v-model="status">
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
					<button type="submit" class="btn btn-primary">Создать</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	// import { tasks } from '../../plugins/axios'
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				fio: '',
				telephone: '',
				sum: '',
				status: ''
			}
		},

		methods: {
			onSubmit() {
				const form = new FormData()
				form.append('fio', this.fio)
				form.append('telephone', this.telephone)
				form.append('sum', this.sum)
				form.append('status', this.status)

				this.create(form)
			},

			...mapActions('tasks', ['create'])
		}
	}
</script>

<style scoped>

</style>
