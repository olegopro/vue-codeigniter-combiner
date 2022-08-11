<template>
	<body class="d-flex vh-100 text-center text-bg-dark">
		<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			<main class="my-auto">
				<div style="margin-top: -70px">
					<h1>The Combiner</h1>
					<p class="lead">Удобный инструмент для автоматизации бразуера с помощью WebDriver Selenium и Phantom JS.</p>
					<p class="lead mb-0">В основе The Combiner лежит быстрый, удобный и легкий в понимании PHP Framework - CodeIgniter 4.</p>
					<p class="lead">Для Frontend используется одно из лучших решений для манипуляции виртуальным DOM деревом - Vue JS.</p>
				</div>
			</main>

			<footer class="text-white-50">
				<p>Следите за развитием проекта на Github в репозитория <a href="https://github.com/olegopro/vue-codeigniter-combiner" target="_blank" class="text-white">Vue Combiner</a> и <a href="https://github.com/olegopro/codeigniter-combiner" target="_blank" class="text-white">Codeigniter Combiner</a></p>
			</footer>
		</div>
	</body>
</template>

<script>
	export default {}
</script>

<style scoped>

	body {
		margin-top: -70px;
		text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
		box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
	}

	.cover-container {
		/*max-width: 42em;*/
	}

	.nav-masthead .nav-link {
		color: rgba(255, 255, 255, .5);
		border-bottom: .25rem solid transparent;
	}

	.nav-masthead .nav-link:hover,
	.nav-masthead .nav-link:focus {
		border-bottom-color: rgba(255, 255, 255, .25);
	}

	.nav-masthead .nav-link + .nav-link {
		margin-left: 1rem;
	}

	.nav-masthead .active {
		color: #fff;
		border-bottom-color: #fff;
	}

	.bd-placeholder-img {
		font-size: 1.125rem;
		text-anchor: middle;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
	}

	@media (min-width: 768px) {
		.bd-placeholder-img-lg {
			font-size: 3.5rem;
		}
	}

	.b-example-divider {
		height: 3rem;
		background-color: rgba(0, 0, 0, .1);
		border: solid rgba(0, 0, 0, .15);
		border-width: 1px 0;
		box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
	}

	.b-example-vr {
		flex-shrink: 0;
		width: 1.5rem;
		height: 100vh;
	}

	.bi {
		vertical-align: -.125em;
		fill: currentColor;
	}

	.nav-scroller {
		position: relative;
		z-index: 2;
		height: 2.75rem;
		overflow-y: hidden;
	}

	.nav-scroller .nav {
		display: flex;
		flex-wrap: nowrap;
		padding-bottom: 1rem;
		margin-top: -1px;
		overflow-x: auto;
		text-align: center;
		white-space: nowrap;
		-webkit-overflow-scrolling: touch;
	}
</style>
