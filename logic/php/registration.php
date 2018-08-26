<?php
// подключаемся к бд
try {
    $pdo = new PDO('mysql:host=localhost; dbname=llc', 'root', '');
} catch(PDOException $e) {
    echo "Error".$e->getMessage();
}

class Registration
{

    private $result_key_entry = [
        'error_entry' => 'Пользватель с таким логином или email уже существует',
        'success_entry' => 'Вы успешно зарегистрированны!'
    ];
// конструктор
    public function __construct($arr)
    {
        $this->first_name = $arr['firstName'];
        $this->middle_name = $arr['middleName'];
        $this->last_name = $arr['lastName'];
        $this->login = $arr['login'];
        $this->email = $arr['email'];
        $this->phone = $arr['phone'];
        $this->password = $arr['password'];
    }

// удаляем html теги
    private function deleteHTML()
    {
        $this->first_name = trim(strip_tags($this->first_name));
        $this->middle_name = trim(strip_tags($this->middle_name));
        $this->last_name = trim(strip_tags($this->last_name));
        $this->login = trim(strip_tags($this->login));
        $this->email = trim(strip_tags($this->email));
        $this->phone = strip_tags($this->phone);
        $this->password = password_hash(trim(strip_tags($this->password)), PASSWORD_DEFAULT); // хешируем пароль
    }
// проверяем данные на уникальность
    private function check_value(){

        global $pdo;

        $sql = 'SELECT COUNT(*) as count FROM logic WHERE login = \''.$this->login.'\' and email = \''.$this->email.'\'';
        $query = $pdo->query($sql);
        $result = $query->fetch(PDO::FETCH_ASSOC);

        if ($result['count'] >= 1) {
            unset($this->result_key_entry['success_entry']);
            echo json_encode($this->result_key_entry);

            exit(); //валим скрипт при неудачной регистрации
        }
    }
// запись данных в бд
    public function registrationUser() {

        global $pdo;
        self::deleteHTML();
        self::check_value();

        $sql = $pdo->prepare('INSERT INTO logic(first_name, middle_name, last_name, login, email, phone, password, date) VALUES(?,?,?,?,?,?,?, NOW())');
        $result = $sql->execute(
            [
             $this->first_name,
             $this->middle_name,
             $this->last_name,
             $this->login,
             $this->email,
             $this->phone,
             $this->password
            ]
        );
// удаляем ненжные данные из массива и отпровляем сообщение о успешной регитсрации
        if ($result) {
            unset($this->result_key_entry['error_entry']);
            echo json_encode($this->result_key_entry);
        }
    }
}

$reg = new Registration($_POST);// экземпляр класса
$reg->registrationUser();