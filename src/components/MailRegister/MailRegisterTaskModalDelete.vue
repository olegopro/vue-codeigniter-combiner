<template>
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" style="display: none;" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalCenterTitle">Удаление задачи</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p>Вы уверены, что хотите удалить задачу?</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
					<button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteById">Удалить
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {

		methods: {
			deleteById() {
				this.delete(this.$route.params.id)
				this.$router.push('/mail-register')
			},

			...mapActions('tasks', ['delete'])
		}
	}
</script>

<style scoped lang="sass">
	.modal
		&.fade
			padding-left: 280px
</style>
