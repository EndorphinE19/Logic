// назначаем маску для номера телефона
$(document).ready(function(){
    $("#phone").mask("+7(999) 999-9999");
})
// создаем область видимости скрипта
;(function(w,d){

    $(document).ready(function(){
        
        $('.send').click(function(e){

            e.preventDefault(); // отменяем действие по умолчанию

            if ($('.registr .form p').hasClass('error')) {$('.error').remove()}

            var regExpKir = /[а-яА-Я]/,
                regExpLat = /[a-zA-Z]/,
                regExpEmail = /[a-zA-Z]@[a-zA-Z]/,
                form = $('.registr .form').serializeArray(),
                arr = [],
                validateViewError = {
                    firstName: 'Используйте только крииллицу',
                    middleName: 'Используйте только крииллицу',
                    lastName: 'Используйте только крииллицу',
                    loginE: 'Используйте только латинницу',
                    emailE: 'Используйте корректный email',
                    passwordRE: 'Пароли не совпадают',
                    passwordLenghtE: 'Пароль должен быть длиннее 6 символов'
                };

                for(var i = 0; i < form.length; i++) {
                    arr.push($.trim(form[i].value))
                }
            if (regExpKir.test(arr[0])) {
                if (regExpKir.test(arr[1])) {
                    if (regExpKir.test(arr[2])) {
                        if (regExpLat.test(arr[3])) {
                            if (regExpEmail.test(arr[4])) {
                                if (arr[6].length >= 6) {
                                   if (arr[6] === arr[7]) {
                                        arr.pop();
                                   // console.log(arr);
                                        setAjaxRegistr(arr);
                                   } else {
                                    $('#password-r').before(`<p class="error">${validateViewError.passwordRE}</p>`)
                                   }
                                } else {
                                    $('#password').before(`<p class="error">${validateViewError.passwordLenghtE}</p>`)
                                }
                            } else {
                                $('#email').before(`<p class="error">${validateViewError.emailE}</p>`)
                            }
                        } else {
                            $('#login').before(`<p class="error">${validateViewError.loginE}</p>`)
                        }
                    }  else {
                        $('#last_name').before(`<p class="error">${validateViewError.lastName}</p>`)
                    }
                }  else {
                    $('#middle_name').before(`<p class="error">${validateViewError.middleName}</p>`)
                }
            } else {
                $('#first_name').before(`<p class="error">fdgdfgf</p>`)
            } 
        })

        // вход
       /* $('#send-l').click(function(e){
            e.preventDefault();
    
            if ($('.logIn .form p').hasClass('error')) {$('.error').remove()}

            var
                regExpLat = /[a-zA-Z]/,
                form = $('.logIn .form').serializeArray(),
                arr = [];

                for(var i = 0; i < form.length; i++) {
                    arr.push($.trim(form[i].value))
                }
                
            
            if (regExpLat.test(arr[0])) {
               
            } else {
                $('#login-l').before('<p class="error">Используйте только латинницу</p>')
            } 
        })*/

        function setAjaxRegistr(arr) {
            $.ajax({
                url:"/php/registration.php",
                type:'post',
                dataType:'json',
                data: {
                    firstName: arr[0],
                    middleName: arr[1],
                    lastName: arr[2],
                    login: arr[3],
                    email: arr[4],
                    phone: arr[5],
                    password: arr[6]
                },
                success:(data) => {
                    if(data.hasOwnProperty('error_entry')) {
                        alert(data.error_entry)
                    } else if(data.hasOwnProperty('success_entry')) {
                        alert(data.success_entry)
                       
                    }
                }
            })
        }
    })
}(window, document))