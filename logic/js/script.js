// назначаем маску для номера телефона
$(document).ready(function(){
    $("#phone").mask("+7(999) 999-9999");
})
// создаем область видимости скрипта
;(function(w,d){

    $(document).ready(function(){

        var 
        validateViewError = {
            firstName: 'Используйте только крииллицу',
            middleName: 'Используйте только крииллицу',
            lastName: 'Используйте только крииллицу',
            login: 'Используйте только латинницу',
            email: 'Используйте корректный email',
            passwordR: 'Пароли не совпадают',
            passwordLenght: 'Пароль должен быть длиннее 6 символов'
        };


        $('#send').click(function(e){

            var regExpKir = /[а-яА-Я]/,
            regExpLat = /[a-zA-Z]/,
            regExpEmail = /[a-zA-Z]@[a-zA-Z]/,
            arr = [],
            form = $('.registr .form').serializeArray();

            e.preventDefault(); // отменяем действие по умолчанию

            // удаляем предупреждающие сообщения , если они есть
            if ($('.registr .form p').hasClass('error')) {$('.error').remove()}

            // формирвоание новго массива и данными очищенными от лишних пробелов
            for(var i = 0; i < form.length; i++) {
                    arr.push($.trim(form[i].value))
            }
            
            // проверка полей на соответствие требованиям и вывод предупреждений
            if (regExpKir.test(arr[0])) {
                if (regExpKir.test(arr[1])) {
                    if (regExpKir.test(arr[2])) {
                        if (regExpLat.test(arr[3])) {
                            if (regExpEmail.test(arr[4])) {
                                if (arr[6] !== arr[7]) {
                                    $('#password-r').before(`<p class="error">${validateViewError.passwordR}</p>`)
                                } else {
                                    arr.pop();
                                    // console.log(arr);
                                    setAjaxRegistr(arr);
                                }
                            } else {
                                $('#email').before(`<p class="error">${validateViewError.email}</p>`)
                            }
                        } else {
                            $('#login').before(`<p class="error">${validateViewError.login}</p>`)
                        }
                    }  else {
                        $('#last_name').before(`<p class="error">${validateViewError.lastName}</p>`)
                    }
                }  else {
                    $('#middle_name').before(`<p class="error">${validateViewError.middleName}</p>`)
                }
            } else {
                $('#first_name').before(`<p class="error">${validateViewError.firstName}</p>`)
            } 
        })

        // вход
       $('#send-l').click(function(e){

        var formLogin = $('.logIn .form').serializeArray(),
            arrLogin = [],
            regExpLat = /[a-zA-Z]/;

            e.preventDefault();
    
            if ($('.logIn .form p').hasClass('error')) {$('.error').remove()}

                for(var i = 0; i < formLogin.length; i++) {
                    arrLogin.push($.trim(formLogin[i].value))
                }
                
            if (regExpLat.test(arrLogin[0])) {
                setAjaxLogin(arrLogin);
            } else {
                $('#login-l').before(`<p class="error">${validateViewError.login}</p>`)
            } 
        })

        function setAjaxRegistr(arr) {
            // составляем ajax запрос
            $.ajax({
                url:"/php/registration.php", // указываем файл
                type:'post', // тип отправки данных
                dataType:'json', // ожидаемый формат файлов
                data: { // данные
                    firstName: arr[0],
                    middleName: arr[1],
                    lastName: arr[2],
                    login: arr[3],
                    email: arr[4],
                    phone: arr[5],
                    password: arr[6]
                },
                success:(data) => { // выполнение при успешном завершении запроса
                    if(data.hasOwnProperty('error_entry')) {
                        alert(data.error_entry)
                    } else if(data.hasOwnProperty('success_entry')) {
                        alert(data.success_entry)
                       
                    }
                },
                error:(error) => {
                    alert('Ошибка при отправке запроса, попробуйдет позже!')
                }
            })
        }

        function setAjaxLogin(arr) {
            $.ajax({
                url:"/php/logIn.php",
                type:'post',
                dataType:'json',
                data: {
                    login: arr[0],
                    password: arr[1]
                },
                success:(data) => {
                    console.log(data)
                    if(data.hasOwnProperty('error_valid_login')) {
                        alert(data.error_valid_login)
                    } else if(data.hasOwnProperty('error_data')) {
                        alert(data.error_data)
                    } else if(data.hasOwnProperty('error_entry_password')) {
                        alert(data.error_entry_password)
                    } else if(data.hasOwnProperty('success_auth')) {
                        alert(data.success_auth)
                        document.location.href = '/'
                    }
                },
                error:(error) => {
                    alert('Ошибка при отправке запроса, попробуйдет позже!')
                }
            })
        }
    })
}(window, document))