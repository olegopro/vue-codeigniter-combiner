<template>

	<div class="row">
		<div class="col-12">
			<table class="table table-striped table-hover">
				<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Вход</th>
					<th scope="col">Переходы</th>
					<th scope="col">Статус</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="task in request" :key="task.id">
					<th scope="row">{{ task.id }}</th>
					<td>{{ task.entry_point }}</td>
					<td>{{ task.internal_transitions }}</td>
					<td>
						<AppStatus :type="task.status" />
					</td>
					<td>
						<router-link v-slot="{navigate}" custom to="/">
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
	import AppStatus from '../Global/Status.vue'


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
