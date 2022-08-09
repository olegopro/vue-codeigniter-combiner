<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<div class="card card-body col-6 border-0 mx-auto">
					<h2 class="h5 mb-4">Параметры профиля</h2>
					<form>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Email</label>
							<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
						</div>
						<div class="mb-3">
							<label for="gender">Тип учётной записи</label>
							<select class="form-select mb-0" id="gender" aria-label="Gender select example">
								<option selected="selected">Администратор</option>
								<option value="1">Пользователь</option>
								<option value="2">Гость</option>
							</select>
						</div>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Имя</label>
							<input type="text" class="form-control" id="exampleFormControlInput1">
						</div>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Фамилия</label>
							<input type="email" class="form-control" id="exampleFormControlInput1">
						</div>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Пароль</label>
							<input type="password" class="form-control" id="exampleFormControlInput1" placeholder="пароль">
						</div>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Пароль</label>
							<input type="password" class="form-control" id="exampleFormControlInput1" placeholder="повторите пароль">
						</div>

						<div class="mt-3">
							<button class="btn btn-secondary " type="submit">Сохранить</button>
						</div>
					</form>
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
		box-shadow: 0 2px 10px 10px hsl(0, 0%, 94%)
</style>
