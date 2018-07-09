<?php
require("class.phpmailer.php");
require("class.smtp.php");

// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "mail.matiasromero.com.ar";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "me@matiasromero.com.ar";  // Mi cuenta de correo
$smtpClave = "Mati1987";  // Mi contraseña
// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "me@matiasromero.com.ar";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email_address; // Email desde donde envío el correo.
$mail->FromName = $name;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
$mail->AddReplyTo($email); // Esto es para que al recibir el correo y poner Responder, lo haga a la cuenta del visitante. 
$mail->Subject = "Email desde sitio"; // Este es el titulo del email.
$mensajeHtml = nl2br($message);
$mail->Body = "Mensaje: {$mensajeHtml} <br /><br />Nombre:{$name}<br />Email de contacto:{$email_address}<br /> Tel: {$phone}"; // Texto del email en formato HTML
$mail->AltBody = "{$message} \n\n Formulario de ejemplo By DonWeb"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$result = $mail->Send(); 
if($result){
    return true;
} else {
    return false;
}		
?>
