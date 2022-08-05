<template>
	<div class="container">
		<h1 class="py-3">Регистрация</h1>

		<form @submit.prevent="register">

			<div class="mb-3">
				<label for="firstname" class="form-label">Имя</label>
				<input type="text" class="form-control" id="firstname" aria-describedby="firstname" v-model="firstname">
			</div>

			<div class="mb-3">
				<label for="lastname" class="form-label">Фамилия</label>
				<input type="text" class="form-control" id="lastname" aria-describedby="lastname" v-model="lastname">
			</div>

			<div class="mb-3">
				<label for="email" class="form-label">Почта</label>
				<input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
				<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
			</div>

			<div class="mb-3">
				<label for="password" class="form-label">Пароль</label>
				<input type="password" class="form-control" id="password" v-model="password">
			</div>

			<div class="mb-3">
				<label for="password_confirm" class="form-label">Повторите пароль</label>
				<input type="password" class="form-control" id="password_confirm" v-model="password_confirm">
			</div>

			<AppAlert
				v-if="message"
				:message="message"
				:active-class="activeClass"
			/>

			<button type="submit" class="btn btn-primary">Регистрация</button>

		</form>
	</div>
</template>

<script>
	import AppAlert from '../components/ui/AppAlert'
	import { guest } from '../plugins/axios'

	export default {
		components: { AppAlert },

		data() {
			return {
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				password_confirm: '',

				message: null,
				activeClass: null
			}
		},

		methods: {
			register() {
				const form = new FormData()
				form.append('first_name', this.firstname)
				form.append('last_name', this.lastname)
				form.append('username', this.email)
				form.append('email', this.email)
				form.append('password', this.password)
				form.append('password_confirm', this.password_confirm)

				guest.post('/register', form)
					.then(() => {
						this.message = 'Вы успешно зарегистрировались'
						this.activeClass = 'success'
						this.firstname = ''
						this.lastname = ''
						this.email = ''
						this.password = ''
						this.password_confirm = ''
					})
					.catch(error => {
						console.log(error.response.data)

						this.message = error.response.data.messages.error
						this.activeClass = 'danger'
					})
			}
		}
	}
</script>

<style scoped>

</style>
