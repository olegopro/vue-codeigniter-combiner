<template>
	<div class="container">
		<div class="row mb-5 align-items-center justify-content-between">
			<div class="col-6">
				<h1>Аккаунты</h1>
			</div>

			<div class="col-6 d-flex justify-content-end">

				<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#VkontakteTaskModal">
					Добавить аккаунт
				</button>
			</div>


		</div>

		<VkontakteBotAccountsTable :request="getAccounts" />

		<teleport to="body">
			<VkontakteBotAccountModal />
		</teleport>

	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import VkontakteBotAccountsTable from '../components/VkontakteBot/VkontakteBotAccountsTable'
	import VkontakteBotAccountModal from '../components/VkontakteBot/VkontakteBotAccountModal'

	export default {
		components: { VkontakteBotAccountModal, VkontakteBotAccountsTable },

		mounted() {
			this.accounts()
		},

		computed: {
			...mapGetters('vkontakteBot', ['getAccounts'])
		},

		methods: {
			...mapActions('vkontakteBot', ['accounts'])
		}
	}
</script>

<style scoped lang="sass">

</style>
