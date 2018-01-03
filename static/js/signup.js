"use strict";var input_username=document.getElementById("username"),input_email=document.getElementById("email"),input_password=document.getElementById("password"),button=document.getElementById("register"),error=document.getElementById("error"),checkEmail=!1,checkPassword=!1,checkUsername=!1;function handlerCheck(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";n?(e.style.borderColor="green",errorText(r)):(e.style.borderColor="red",errorText(r))}function errorText(e){error.innerText=e}input_username.addEventListener("change",function(e){var n=e.target;n.value.length>=3&&n.value.length<=50?n.value.match(/[^a-zA-Z0-9]/g)?(checkUsername=!1,handlerCheck(n,!1,"Можно использовать только английские буквы и цифры")):(checkUsername=!0,handlerCheck(n,!0)):(checkUsername=!1,handlerCheck(n,!1,"Логин должен содержать от 3 до 50 символов"))}),input_password.addEventListener("change",function(e){var n=e.target;n.value.length>=3&&n.value.length<=50?(checkPassword=!0,handlerCheck(n,!0)):(checkPassword=!1,handlerCheck(n,!1,"Пароль должен содержать от 3 до 50 символов"))}),input_email.addEventListener("change",function(e){var n=e.target;""!=n.value?n.value.match(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i)?(checkEmail=!0,handlerCheck(n,!0)):(checkEmail=!1,handlerCheck(n,!0,"Неверный E-Mail")):(checkEmail=!1,handlerCheck(n,!1,"Введите E-Mail"))}),button.addEventListener("click",function(e){e.preventDefault(),!0===checkPassword&&!0===checkEmail&&!0===checkUsername?$.ajax({url:"signup_action",type:"POST",data:{username:input_username.value,email:input_email.value,password:input_password.value}}).done(function(e){var n=JSON.parse(e);!0===n?window.location="/":error.innerText=n}).fail(function(){console.log("error")}):checkEmail&&checkPassword&&checkUsername||(error.innerText="Введите логин, почту и пароль")});