<?php
header('Content-Type: application/json');
error_reporting(0);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require __DIR__ . '/../libs/PHPMailer/src/Exception.php';
require __DIR__ . '/../libs/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/../libs/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre   = htmlspecialchars(trim($_POST['nombre']), ENT_QUOTES, 'UTF-8');
    $telefono = preg_replace('/[^0-9+\s()-]/', '', $_POST['telefono']);
    $email    = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $tema     = htmlspecialchars(trim($_POST['tema']), ENT_QUOTES, 'UTF-8');
    $mensaje  = htmlspecialchars(trim($_POST['mensaje']), ENT_QUOTES, 'UTF-8');

    if (!$email) {
        echo json_encode(["status" => "error", "message" => "Email inválido."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        
        // Configuración SMTP
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'enriruiztirado11@gmail.com'; // Tu correo 
        $mail->Password = 'fmdsbgdatiidehre'; // Clave de aplicación, no tu contraseña normal
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Remitente y respuesta
        $mail->setFrom($mail->Username, 'Instalfrio');
        $mail->addReplyTo($email, $nombre);
        $mail->addAddress('enriruiztirado11@gmail.com', 'Destinatario');

        // Contenido
        $mail->isHTML(true);
        $mail->Subject = $tema;
        $mail->Body = "
            <h1>Mensaje de {$nombre}</h1>
            <p><strong>Remitente:</strong> {$email}</p>
            <p><strong>Teléfono:</strong> {$telefono}</p>
            <p><strong>Mensaje:</strong><br>" . nl2br($mensaje) . "</p>
        ";
        echo json_encode(["status" => "success", "message" => "Mensaje enviado correctamente."]);

        $mail->send();
    } catch (Exception $e) {
        error_log("Error enviando correo: " . $mail->ErrorInfo);
        echo json_encode(["status" => "error", "message" => "No se pudo enviar el mensaje. Inténtalo más tarde."]);
    }
}
