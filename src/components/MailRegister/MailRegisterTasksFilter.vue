<template>
	<div class="input-group">
		<input type="text" class="form-control" placeholder="Начните писать почту" v-model="email">

		<select class="form-select" v-model="status">
			<option disabled selected>Выберите статус</option>
			<option value="cancelled">Отменён</option>
			<option value="done">Завершён</option>
		</select>

		<button class="btn btn-secondary" @click="reset">Сбросить</button>
	</div>


</template>

<script>
	export default {
		emits: ['update:modelValue'],
		props: ['modelValue'],

		data() {
			return {
				email: '',
				status: 'Выберите статус'
			}
		},

		computed: {
			changeData() {
				const { email, status } = this
				return { email, status }
			}
		},

		watch: {
			changeData: {
				handler: function (value) {
					return this.$emit('update:modelValue', {
						status: value.status,
						email: value.email

					})
				},
				deep: true
			}
		},

		methods: {
			reset() {
				this.email = ''
				this.status = 'Выберите статус'
			}
		}
	}
</script>

<style scoped>

</style>
