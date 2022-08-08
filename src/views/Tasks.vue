<template>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<h1 class="mt-3">Заявки</h1>
			</div>
			<div class="col-6">
				<button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
					Создать задачу
				</button>
			</div>
		</div>

		<TasksTable />
	</div>
</template>

<script>
	import TasksTable from '../components/tasks/TasksTable'

	export default {
		components: { TasksTable }
	}
</script>

<style scoped>

</style>
