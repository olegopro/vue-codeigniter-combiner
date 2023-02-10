<template>
	<div class="mt-3" @click="isOpen= !isOpen">
		<h3>{{ question.title }}</h3>
		<p v-if="isOpen">{{ question.text }}</p>
	</div>
</template>

<script>
	export default {
		props: ['question'],

		data() {
			return {
				isOpen: false
			}
		}
	}
</script>

<style scoped lang="sass">
	h3
		cursor: pointer

</style>
