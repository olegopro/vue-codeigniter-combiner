<template>
	<div class="modal fade" id="WebWalkerCreateTask" tabindex="-1" aria-labelledby="WebWalkerCreateTask" style="display: none;" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<form @submit.prevent="create" class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="WebWalkerCreateTask">Создание задачи</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p>Создать задачу гулять по сайт</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="close">Закрыть</button>
					<button type="submit" class="btn btn-primary">Создать</button>
				</div>
			</form>
		</div>
	</div>

</template>

<script>
	import { Modal } from 'bootstrap'
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				modal: null
			}
		},

		mounted() {
			this.modal = new Modal(document.getElementById('WebWalkerCreateTask'))
		},

		methods: {
			...mapActions('webWalker', ['createTask']),

			create() {
				this.createTask({
					entry_point: 'Vkontakte',
					internal_transitions: 0,
					status: 'active'
				})
			},

			close() {
				this.modal.hide()
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
