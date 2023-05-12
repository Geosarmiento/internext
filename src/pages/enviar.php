


<?php 

$name = $_POST['name'];
$phone = $_POST['telefono'];
$mail = $_POST['email'];
$message  =$_POST['comentario'];

$header = 'From:' . $mail . " \r\n";
$header = "X-mailer: PHP/" . phpversion() .  " \r\n";
$header = "Mime-Version: 1.0 \r\n";
$header = "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: ". $name . " \r\n";
$message = "Su e-mail es: ". $email . " \r\n";
$message = "Telefono de Contaco: ". $phone . " \r\n";
$message = "Mensaje: " . $_POST['message']  . " \r\n";
$message = "Enviado el: ". date ('d/m/y' , time());

$para = 'jhova29@gmail.com';
$asunto = 'Asusnto del Mensaje';

mail($para, $asunto, utf8_docode($message), $header);

header("Location:index.html");



/*
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

$subject = $_POST['subject'];// El valor entre corchetes son los atributos name del formulario html
$msg = $_POST['msg'];
$from = $_POST['from'];

// El from DEBE corresponder a una cuenta de correo real creada en el servidor
$headers = "From: pablomonteserin@pablomonteserin.com\r\n"; 
$headers .= "Reply-To: $from\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n"; 
	
if(mail($from, $subject, $msg,$headers)){
	echo "mail enviado";
	}else{
	$errorMessage = error_get_last()['msg'];
	echo $errorMessage;
}
?>

