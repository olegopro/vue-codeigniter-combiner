<template>
	<div class="container">
		<div class="row mb-5 align-items-center">
			<div class="col-6">
				<h1>Задачи</h1>
			</div>

			<div class="col-6">
				<button type="button" class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#WebWalkerCreateTask">
					Создать задачу
				</button>
			</div>
		</div>

		<Table :request="allTasks"/>

		<teleport to="body">
			<CreateTask />
		</teleport>
	</div>
</template>

<script>
	import CreateTask from '../components/WebWalker/CreateTask.vue'
	import { mapActions, mapGetters } from 'vuex'
	import Table from '../components/WebWalker/Table.vue'

	export default {
		components: { Table, CreateTask },

		computed: {
			...mapGetters('webWalker', ['allTasks'])
		},

		created() {
			this.getAllTasks()
		},

		methods: {
			...mapActions('webWalker', ['getAllTasks'])
		}
	}
</script>

<style scoped lang="scss">

</style>
