<template>

	<div class="row">
		<div class="col-12">
			<table class="table table-striped table-hover">
				<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Аккаунт</th>
					<th scope="col">Дата добавления</th>
					<th scope="col">Статус</th>
					<th scope="col"></th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="data in request" :key="data.id">
					<th scope="row">{{ data.id }}</th>
					<td>{{ data.account_name }}</td>
					<td>{{ data.created_at }}</td>
					<td>-</td>
					<td>
						<router-link to="">
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

	export default {
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
