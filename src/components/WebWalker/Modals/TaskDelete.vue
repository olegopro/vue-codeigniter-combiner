<template>
	<div class="modal fade" id="taskDeleteModal" tabindex="-1" aria-labelledby="taskDeleteModalTitle" style="display: none;" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<form class="modal-content" @submit.prevent="deleteById">
				<div class="modal-header">
					<h5 class="modal-title" id="taskDeleteModalTitle">Удаление задачи</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p>Вы уверены, что хотите удалить задачу?</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="modalHide">Отмена</button>
					<button type="submit" class="btn btn-danger">Удалить</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import { Modal } from 'bootstrap'

	export default {
		data() {
			return {
				modal: null
			}
		},

		mounted() {
			this.modal = new Modal(document.getElementById('taskDeleteModal'))
		},

		methods: {
			...mapActions('webWalker', ['delete']),

			deleteById() {
				this.delete(this.$route.params.id)
					.then(() => {
						this.modalHide()
					})

				this.$router.push('/web-walker')
			},

			modalHide() {
				this.modal.hide()
			}

		}
	}
</script>

<style scoped lang="sass">
	.modal
		&.fade
			padding-left: 280px
</style>
