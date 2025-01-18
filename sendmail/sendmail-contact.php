<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$first_name = $_POST["FirstName"];
$last_name = $_POST["LastName"];
$email = $_POST["Email"];
$phone = $_POST["Phone"];
$message = $_POST["Message"];

$first_name = htmlspecialchars($first_name);
$last_name = htmlspecialchars($last_name);

$first_name = ucwords($first_name);
$last_name = ucwords($last_name);

$email = filter_var($email, FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ssl://smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'jvoutsouricingservices@gmail.com';                 // SMTP username
$mail->Password = 'hswzhyyaftpaumwz';                           // SMTP password
$mail->SMTPSecure = 'tls';          // Enable encryption, 'ssl' also accepted
$mail->Port = 465;                   

$mail->setFrom('jvoutsouricingservices@gmail.com', "Automatic Email Sender", false);
$mail->FromName = $first_name . ' ' . $last_name;
$mail->addAddress('jvoutsourcingservices@gmail.com');     // Add a recipient
$mail->addReplyTo($email, $first_name . ' ' . $last_name);

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->isHTML(true);        // Set email format to HTML

$mailBody = file_get_contents('../mail-templates\mail-template-contact.html');
$mailVariables = array();
$mailVariables['first_name'] = $first_name;
$mailVariables['last_name'] = $last_name; 
$mailVariables['email'] = $email; 
$mailVariables['phone'] = $phone; 
$mailVariables['message'] = $message; 

foreach($mailVariables as $key => $value) {
    $mailBody = str_replace('{{ '.$key.' }}', $value, $mailBody);
}

$mail->Subject = "[ CONTACT FORM ] by {$last_name}";
$mail->Body = $mailBody;

$mail->AltBody = "First Name: {$first_name}\r\n
                    Last Name: {$last_name}\r\n
                    Email: {$email}\r\n
                    Phone: {$phone}\r\n
                    Message: {$message}";

$mail->send();
?>

