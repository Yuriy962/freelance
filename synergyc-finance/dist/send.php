<?php 
// Файлы phpmailer
require $_SERVER['DOCUMENT_ROOT'].'/phpmailer/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'].'/phpmailer/SMTP.php';
require $_SERVER['DOCUMENT_ROOT'].'/phpmailer/Exception.php';

$email = $_POST['email'];

// Формирование самого письма
$title = "CAPELLA FINANCE";
$body = "
<h2>Application from the site Capella Finance for a private session</h2>";
if(!empty($email)){
    $body = $body."<b>Sender's mail:</b> ".$email."<br>";
}


$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервер
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('', 'SYNERGIC FINANCE'); // Адрес самой почты и имя отправителя

    $mail->addAddress('info@softdesign-apps.com');
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Error: the message hasn't been sent: {$mail->ErrorInfo}";
}

echo json_encode(["result" => $result]);
