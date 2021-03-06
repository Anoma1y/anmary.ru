'use strict';

const input_username = document.getElementById('username');
const input_email = document.getElementById('email');
const input_password = document.getElementById('password');
const button = document.getElementById('register');
var error = document.getElementById('error');
var checkEmail = false;
var checkPassword = false;
var checkUsername = false;

/**
 * [handlerCheck функция для проверки поля]
 * @param  {object} target    [текущий узел]
 * @param  {bool} bool      [если true, то ошибки нет]
 * @param  {String} textError [текст ошибки]
 * @return           [возвращает ошибку и цвет]
 */
function handlerCheck(target, bool, textError = "") {
	if (bool) {
		target.style.borderColor = 'green';
		errorText(textError);		
	} else {
		target.style.borderColor = 'red';
		errorText(textError);
	}
}
/**
 * [errorText функция для записи текста ошибки]
 * @param  {String} text [текст ошибки]
 * @return {[type]}      [запись ошибки в узел]
 */
function errorText(text) {
	error.innerText = text;
}
input_username.addEventListener('change', function(e){
	var target = e.target;
	if (target.value.length >= 3 && target.value.length <= 50) {
		if (!target.value.match(/[^a-zA-Z0-9]/g)) {
			checkUsername = true;
			handlerCheck(target, true);
		} else {
			checkUsername = false;
			handlerCheck(target, false, "Можно использовать только английские буквы и цифры");
		}
	} else {
		checkUsername = false;
		handlerCheck(target, false, "Логин должен содержать от 3 до 50 символов")
	}
})
input_password.addEventListener('change', function(e){
	var target = e.target;
	if (target.value.length >= 3 && target.value.length <= 50) {
		checkPassword = true;
		handlerCheck(target, true);
	} else {
		checkPassword = false;
		handlerCheck(target, false, "Пароль должен содержать от 3 до 50 символов");
	}
})
input_email.addEventListener('change', function(e){
	var target = e.target;
	if(target.value != '') {
		if(target.value.match(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i)){
			checkEmail = true;
			handlerCheck(target, true);
		} else {
			checkEmail = false;
			handlerCheck(target, true, "Неверный E-Mail");
		}
	} else {
		checkEmail = false;
		handlerCheck(target, false, "Введите E-Mail");
	}
})

button.addEventListener('click', function (e) {
	e.preventDefault();
	if (checkPassword === true && checkEmail === true && checkUsername === true) {
		$.ajax({
			url: 'signup_action',
			type: 'POST',
			data: {
				username: input_username.value,
				email: input_email.value,
				password: input_password.value
			},
		})
		.done(function(data) {
			let status = JSON.parse(data);
			if (status === true) {
				window.location = "/";
			} else {
				error.innerText = status;
			}
		})
		.fail(function() {
			console.log("error");
		})			
	} else if (!checkEmail || !checkPassword || !checkUsername) {
		error.innerText = 'Введите логин, почту и пароль';
	} 

})