<template>
	<div :class="'alert alert-' + activeClass" role="alert" v-html="message"></div>
</template>

<script>
	export default {
		props: ['message', 'activeClass']
	}
</script>
