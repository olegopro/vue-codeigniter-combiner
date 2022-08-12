<template>
	<div class="container">
		<div class="row mb-5 align-items-center">
			<div class="col-6">
				<h1>Задачи</h1>
			</div>
			<div class="col-6">
				<button type="button" class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
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
