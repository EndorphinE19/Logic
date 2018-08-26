<?php
setcookie('user', $data, time() -3600, '/');
header('Location:/');