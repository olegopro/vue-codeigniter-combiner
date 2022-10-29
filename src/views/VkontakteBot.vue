<template>
	<div class="container">
		<div class="row mb-5 align-items-center">
			<div class="col-6">
				<h1>Задачи</h1>
			</div>

			<div class="col-6">
				<button type="button" class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#VkontakteTaskModal">
					Создать задачу
				</button>
			</div>
		</div>

		<VkontakteBotTable />

		<teleport to="body">
			<VkontakteBotTaskModal />
		</teleport>
	</div>
</template>

<script>
	import VkontakteBotTable from '../components/VkontakteBot/VkontakteBotTable'
	import VkontakteBotTaskModal from '../components/VkontakteBot/VkontakteBotTaskModal'

	export default {
		components: { VkontakteBotTable, VkontakteBotTaskModal }
	}
</script>

<style scoped lang="sass">

</style>
