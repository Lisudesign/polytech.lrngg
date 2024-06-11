<?php
$user_id = $_GET['localhost/login.php'];
$db = mysqli_connect("localhost", "root", "", "tutorials");
$query = mysqli_query($db, "SELECT * FROM `users` WHERE `user_id`='{$user_id}'");
$array = mysqli_fetch_array($query);
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Профиль <?=$array['nick']?></title>
</head>
<body>
    <h1>Никнейм: <?=$array['nick']?></h1>
    <h1>Возраст: <?=$array['age']?></h1>
    <h1>Пол: <?=$array['gender']?></h1>
    <h1>Дата регистрации: <?=$array['reg_date']?></h1>
</body>
</html>