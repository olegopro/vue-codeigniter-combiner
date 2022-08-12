<template>

	<div class="container">
		<div class="row mb-5">
			<div class="col-12">
				<h1>Системные настройки</h1>
			</div>
		</div>
		<div class="row gx-5 mb-5">
			<div class=" col-6">
				<div class="card card-body border-0">
					<h2 class="h5 mb-4">Системны константы</h2>
					<form>
						<div class="row">
							<div class="col-12 mb-3">
								<div>
									<label for="first_name">Адрес сервера</label>
									<input class="form-control" id="first_name" type="text">
								</div>
							</div>

						</div>
						<div class="row align-items-center">
							<div class="col-12 mb-3">
								<label for="gender">API для фронденда</label>
								<select class="form-select mb-0" id="gender" aria-label="Gender select example">
									<option selected="selected">Vue & React</option>
									<option value="1">Vue</option>
									<option value="2">React</option>
								</select>
							</div>
						</div>

						<div class="mt-3">
							<button class="btn btn-secondary" type="submit">Сохранить</button>
						</div>
					</form>
				</div>
			</div>

			<div class=" col-6  ">
				<div class="card card-body border-0">
					<h2 class="h5 mb-4">Общая информация</h2>
					<form>
						<div class="row">
							<div class="col-12 mb-3">
								<div class="form-group"><label for="email">Email техподдержки</label> <input class="form-control" id="email" type="email" placeholder="name@company.com" required=""></div>
							</div>
							<div class="col-12 mb-3">
								<div class="form-group"><label for="phone">Телефон техподдержки</label> <input class="form-control" id="phone" type="number" placeholder="+12-345 678 910" required=""></div>
							</div>
						</div>

						<div class="mt-3">
							<button class="btn btn-secondary " type="submit">Сохранить</button>
						</div>
					</form>
				</div>
			</div>

		</div>

		<div class="row">
			<div class="col-12">
				<div class="card card-body border-0 mb-4">
					<h2 class="h5 mb-4">Дополнительные настройки</h2>
					<ul class="list-group list-group-flush">
						<li class="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
							<div><h3 class="h6 mb-1">Selenium</h3>
								<p class="small pe-4">Использовать WebDriver Selenium для работы сервера</p></div>
							<div>
								<div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="user-notification-1" checked="checked"> <label class="form-check-label" for="user-notification-1"></label></div>
							</div>
						</li>
						<li class="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
							<div><h3 class="h6 mb-1">Phantom js</h3>
								<p class="small pe-4">Использовать Phantom js для работы сервера</p></div>
							<div>
								<div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="user-notification-2"> <label class="form-check-label" for="user-notification-2"></label></div>
							</div>
						</li>
						<li class="list-group-item d-flex align-items-center justify-content-between px-0">
							<div><h3 class="h6 mb-1">Работа сервера</h3>
								<p class="small pe-4">Включить или отключить работу CRON</p></div>
							<div>
								<div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="user-notification-3" checked="checked"> <label class="form-check-label" for="user-notification-3"></label></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {}
</script>

<style scoped lang="sass">
	.card-body
		border-radius: 15px
		box-shadow: 0 2px 10px 10px hsl(0, 0%, 95%)
</style>
