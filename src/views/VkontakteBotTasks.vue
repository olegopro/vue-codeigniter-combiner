<template>
	<div class="container">
		<div class="row mb-5 align-items-center justify-content-between">
			<div class="col-6">
				<h1>Задачи</h1>
			</div>

			<div class="col-6 d-flex justify-content-end">

				<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#VkontakteTaskModal">
					Создать задачу
				</button>
			</div>


		</div>

		<VkontakteBotTasksTable :request="getTasks" />

		<teleport to="body">
			<VkontakteBotTaskModal :request="getAccounts" />
		</teleport>

	</div>
</template>

<script>
	import VkontakteBotTasksTable from '../components/VkontakteBot/VkontakteBotTasksTable'
	import VkontakteBotTaskModal from '../components/VkontakteBot/VkontakteBotTaskModal'
	import { mapActions, mapGetters } from 'vuex'

	export default {
		components: { VkontakteBotTasksTable, VkontakteBotTaskModal },

		mounted() {
			this.accounts()
			this.tasks()
		},

		computed: {
			...mapGetters('vkontakteBot', ['getTasks', 'getAccounts'])
		},

		methods: {
			...mapActions('vkontakteBot', ['accounts', 'tasks'])
		}
	}
</script>

<style scoped lang="sass">

</style>
