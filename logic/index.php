<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css" media="none" onload="if(media != 'all')media='all'">
    <title>Document</title>
</head>
<body class="flex-ac">
    <?php
    if (isset($_COOKIE['user'])) {
        $user = unserialize($_COOKIE['user']);
        echo "
        <div class='flex-dcc login'>
            <p>{$user[login]}</p>
            <a href='http://fav/php/exit.php'>Выход</a>
        </div>
        ";
    }
    ?>
<article class="container-form flex-ac wrapper">
        <div class="logIn">
                <article class="info-page">
                        <p class="logIn-disp">Вход</p>
                    </article>
        <article class="wrapper-max flex-dcc container">
            <form class="form wrapper">
                    <input type="text" name="login-l" id="login-l" placeholder="Ваш Login:" required>
                    <input type="password" name="password-l" id="paswword-l" placeholder="Ваш Пароль:" required>
                    <input type="hidden" name="csrf" id="csrf">
                    <input type="submit" name="send-l" id="send-l" value="Вход">
            </form>
        </article>
        </div>
    
        <div class="registr">
        <article class="info-page">
             <p class="registr-disp">Регистрация</p>
        </article>
        <article class="wrapper-max flex-dcc container">
            <form class="form wrapper">
                    <input type="text" name="first_name" id="first_name" placeholder="Ваше Имя:" required>
                    <input type="text" name="middle_name" id="middle_name" placeholder="Ваше Отчество:" >
                    <input type="text" name="last_name" id="last_name" placeholder="Ваша Фамилия:" required>
                
    
                    <input type="login" name="login" id="login" placeholder="Ваш Login:" required>
                    <input type="email" name="email" id="email" placeholder="Ваш E-mail:" required>
                    <input type="text" name="phone" id="phone" placeholder="Ваш Телефон:" required>
                    <input type="password" name="password" id="paswword" placeholder="Ваш Пароль:" required>
                    <input type="password" name="password-r" id="password-r" placeholder="Повторите вароль:">
                        
                    <input type="submit" name="send" id="send" value="Регистрация">
            </form>
        </article>
        </div>
</article>

    <script src="js/jQuery.js"></script>
    <script src="js/jquery.maskedinput.js"></script>
    <script src="js/nav-form.js"></script>
    <script src="js/script.js"></script>
</body>
</html>