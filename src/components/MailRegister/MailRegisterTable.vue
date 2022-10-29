<template>

	<div class="row">
		<div class="col-12">
			<table class="table table-striped table-hover">
				<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Имя</th>
					<th scope="col">Фамилия</th>
					<th scope="col">Почта</th>
					<th scope="col">Статус</th>
					<th scope="col"></th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="task in request" :key="task.task_id">
					<th scope="row">{{ task.task_id }}</th>
					<td>{{ task.task_firstname }}</td>
					<td>{{ task.task_lastname }}</td>
					<td>{{ task.task_email }}</td>
					<td>
						<AppStatus :type="task.task_status" />
					</td>
					<td>
						<router-link v-slot="{navigate}" custom :to="{name: 'MailRegisterSingle', params: {id: task.task_id}}">
							<button class="btn btn-secondary" @click="navigate">Открыть</button>
						</router-link>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>


</template>

<script>
	import AppStatus from '../ui/AppStatus'


	export default {
		components: { AppStatus },
		props: ['request']
	}
</script>

<style scoped lang="sass">

	table
		box-shadow: 0 2px 10px 10px hsl(0, 0%, 90%)
		border-radius: 15px
		margin-bottom: -1px
		vertical-align: middle

		thead
			height: 64px
			vertical-align: middle

			tr
				th
					&:first-child
						padding-left: 40px

		tbody
			tr
				&:last-child
					th
						border-bottom-left-radius: 15px

					td
						&:last-child
							border-bottom-right-radius: 15px

				td
					&:last-child
						text-align: center

				th
					padding-left: 40px

		.btn-secondary
			width: 150px
</style>
