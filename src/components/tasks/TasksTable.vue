<template>
	<table class="table table-striped table-hover">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">ФИО</th>
				<th scope="col">Телефон</th>
				<th scope="col">Статус</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="task in request" :key="task.task_id">
				<th scope="row">{{ task.task_id }}</th>
				<td>{{ task.task_fio }}</td>
				<td>{{ task.task_telephone }}</td>
				<td>{{ task.task_status }}</td>
				<td>
					<router-link v-slot="{navigate}" custom :to="{name: 'TaskSingle', params: {id: task.task_id}}">
						<button class="btn btn-primary" @click="navigate">Открыть</button>
					</router-link>
				</td>

			</tr>

		</tbody>

	</table>

	<teleport to="body">
		<AppModal />
	</teleport>

</template>

<script>
	import AppModal from '../ui/AppModal'
	import { mapActions, mapGetters } from 'vuex'

	export default {
		components: { AppModal },

		mounted() {
			this.load()
		},

		computed: {
			...mapGetters('tasks', ['request'])
		},

		methods: {
			...mapActions('tasks', ['load'])
		}
	}
</script>

<style scoped>

</style>
