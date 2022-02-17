<?php 
// Файлы phpmailer
require $_SERVER['DOCUMENT_ROOT'].'/phpmailer/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'].'/phpmailer/SMTP.php';
require $_SERVER['DOCUMENT_ROOT'].'/phpmailer/Exception.php';

$email = $_POST['email'];

// Формирование самого письма
$title = "SYNERGIC FINANCE";
$body = "
<h2>Письмо с сайта-заглушки SYNERGIC FINANCE</h2>";
if(!empty($email)){
    $body = $body."<b>Почта отправителя:</b> ".$email."<br>";
}


$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервер
    $mail->Username   = 'buranov@seoprostor.ru'; // Логин на почте
    $mail->Password   = 'Samara2020'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('buranov@seoprostor.ru', 'SYNERGIC FINANCE'); // Адрес самой почты и имя отправителя

    
    $mail->addAddress('buranov@seoprostor.ru');
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

}  catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

echo json_encode(["result" => $result]);
