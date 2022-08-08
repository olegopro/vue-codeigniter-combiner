<template>
	<div class="container">
		<div class="row mb-5">
			<h1>Статистика</h1>
		</div>

		<div class="row mb-5">
			<h2>Новые пользователи</h2>
			<Bar
				:chart-options="chartOptions"
				:chart-data="chartData"
				:chart-id="chartId"
				:dataset-id-key="datasetIdKey"
				:plugins="plugins"
				:css-classes="cssClasses"
				:styles="myStyles"
				:width="width"
				:height="150"
				class="myBar"
			/>
		</div>

		<div class="row">
			<h2>Новые пользователи</h2>
			<Bar
				:chart-options="chartOptions"
				:chart-data="chartData"
				:chart-id="chartId"
				:dataset-id-key="datasetIdKey"
				:plugins="plugins"
				:css-classes="cssClasses"
				:styles="myStyles"
				:width="width"
				:height="150"
				class="myBar"
			/>
		</div>

	</div>
</template>

<script>
	import { Bar } from 'vue-chartjs'
	import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

	ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

	export default {
		name: 'BarChart',
		components: { Bar },
		props: {
			chartId: {
				type: String,
				default: 'bar-chart'
			},
			datasetIdKey: {
				type: String,
				default: 'label'
			},
			width: {
				type: Number,
				default: 400
			},
			height: {
				type: Number,
				default: 100
			},
			cssClasses: {
				default: '',
				type: String
			},
			styles: {
				type: Object,
				default: () => {}
			},
			plugins: {
				type: Array,
				default: () => []
			}
		},

		data() {
			return {
				chartData: {
					labels: ['Январь', 'Февраль', 'Март', 'Апрель'],
					datasets: [
						{
							label: 'Новые пользователи',
							data: [40, 20, 12, 62],
							backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
								'rgba(54, 162, 235, 0.2)',
								'rgba(255, 206, 86, 0.2)'

							]
						}
					]
				},
				chartOptions: {
					responsive: true,
					plugins: {
						legend: {
							display: false
						}
					}
				}
			}
		}
	}
</script>

<style scoped lang="sass">
	.myBar
		box-shadow: 0 2px 10px 10px hsl(0, 0%, 90%)
		padding: 30px
		border-radius: 15px
</style>
