<template>
	<div class="container">
		<h1>Вход</h1>

		<form @submit.prevent="signin">
			<div class="mb-3">
				<label for="email" class="form-label">Почта</label>
				<input type="email" class="form-control" id="email" aria-describedby="email" v-model="email">

			</div>
			<div class="mb-3">
				<label for="password" class="form-label">Пароль</label>
				<input type="password" class="form-control" id="password" v-model="password">
			</div>

			<AppAlert
				v-if="message"
				:message="message"
				:active-class="activeClass"
			/>

			<button type="submit" class="btn btn-primary w-100">Войти</button>
		</form>
	</div>

</template>

<script>
	import AppAlert from '../components/ui/AppAlert'
	import { api } from '../plugins/axios'

	export default {
		data() {
			return {
				email: '',
				password: '',
				message: null,
				activeClass: null,

				token: null,
				expires_in: null
			}
		},

		methods: {
			signin() {
				const form = new FormData()
				const auth = {
					username: process.env.VUE_APP_CLIENT_ID,
					password: process.env.VUE_APP_CLIENT_SECRET
				}

				form.append('username', this.email)
				form.append('password', this.password)
				form.append('grant_type', 'password')

				api.post('/login', form, { auth })
					.then((response) => {
						this.message = 'Вы успешно вошли в систему'
						this.activeClass = 'success'

						this.$store.dispatch('user/username', { username: this.email })

						this.email = ''
						this.password = ''

						this.token = response.data.access_token

						this.$store.dispatch('auth/login', { token: this.token })
					})
					.catch(error => {
						this.message = Object.values(error.response.data.messages)
						this.activeClass = 'danger'
					})
			}
		},

		components: { AppAlert }

	}
</script>

<style lang="sass" scoped>
	.container
		position: absolute
		top: 46%
		left: 50%
		transform: translate(-50%, -50%)
		width: 500px
		padding: 30px
		border-radius: 15px
		box-shadow: 0 2px 10px 10px hsl(0, 0%, 90%)
</style>
