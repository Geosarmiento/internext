


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
$asunto = 'Asunto del Mensaje';

mail($para, $asunto, utf8_docode($message), $header);

header("Location:index.html");

?>



