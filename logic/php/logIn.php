<?php
try {
    $pdo = new PDO('mysql:host=localhost; dbname=llc', 'root', '');
} catch(PDOException $e) {
    echo "Error".$e->getMessage();
}

class LogIn
{
    private $result_key_entry = [
            'error_entry_login' => 'Пользватель с таким логином не существует',
            'success_entry' => 'Вы успешно авторизованны!'
    ];
    private $error_query_valid = [
                'error_valid_login' => 'Возникла ошибка при проверке логина, попробкйте снова!'
            ];
    private $error_query_data = [
                'error_data' => 'Ошибка при попытке авторизации, попробуйте снова!'
            ];
    private $error_password = [
                'error_entry_password' => 'Неверный паоль',
            ];
    private $success_auth = [
                'success_auth' => 'Вы успешно авторизовались'
    ];

    public function __construct($user){
        $this->login = $user['login'];
        $this->password = $user['password'];
    }

    public function validateDataUser(){
        $this->login = strip_tags(trim($this->login));
        $this->password = strip_tags(trim($this->password));
    }

    private function checkLoginAndPassword(){

        global $pdo;
        self::validateDataUser();
        // проверяем данные на уникальность
        try {
            $sql = 'SELECT COUNT(*) as count FROM logic WHERE login = \''.$this->login.'\'';
            $query = $pdo->query($sql);
            $result = $query->fetch(PDO::FETCH_ASSOC);
        } catch(PDOException $e) { // отлавливаем исключение
            echo json_encode($this->error_query_valid);
        }

        if ($result['count'] == 1) {
            try {
                $sql = 'SELECT login, password FROM logic WHERE login = \''.$this->login.'\''; // выбираем нужные данные
                $query = $pdo->query($sql);
                $result_data = $query->fetch(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                echo json_encode($this->error_query_data);
            }
// проверяем пароли на совпадение
            if (password_verify($this->password, $result_data['password'])) {
                $data = serialize($result_data); // сериализуем данные
                setcookie('user', $data, time() +3600, '/'); // создаем cookie-файл
                echo json_encode($this->success_auth);
            } else {
                echo json_encode($this->error_password);
            }
        }
       
    }

    public function auth() {
        self::checkLoginAndPassword();
    }
}

$logIn = new LogIn($_POST);// экземпаляр класса
$logIn->auth();