<?php

// notify the team with an email
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


print_r($_POST);
// if(!$_POST['email']) { 
//   die(json_encode(array('error' => 'No email submitted.')));
// };
$data = $_POST;

$replyTo = $_POST['email'];
$name = $_POST['name'];
$sendTo = '836e8b82.fnma.onmicrosoft.com@amer.teams.ms'; // $sendTo = 'christopher_gray@fanniemae.com';

date_default_timezone_set('America/Chicago'); //SMTP needs accurate times, and the PHP time zone MUST be set //This should be done in your php.ini, but this is how to do it if you don't have access to that
require 'vendor/autoload.php';
$mail = new PHPMailer;//Create a new PHPMailer instance

$mail->isSMTP(); //Tell PHPMailer to use SMTP
//Enable SMTP debugging
// SMTP::DEBUG_OFF = off (for production use);
// SMTP::DEBUG_CLIENT = client messages;
// SMTP::DEBUG_SERVER = client and server messages;
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->Host = 'mailhub.fanniemae.com';
$mail->Port = 25;
//$mail->SMTPAuth = false; //We don't need to set this as it's the default value
$mail->setFrom('feedback@loanlifecycle.com', 'LLC Map'); //Set who the message is to be sent from
// $mail->addReplyTo($replyTo, $name); //Set an alternative reply-to address
$mail->addAddress($sendTo, 'Loan Lifecycle Team'); //Set who the message is to be sent to
$mail->Subject = 'LLC Map Feedback'; //Set the subject line
$templatePath = 'mail-templates/bp-notification.html'; // build the html that will hold the table
$template = file_get_contents(($templatePath), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded, //convert HTML into a basic plain-text alternative body
foreach($data as $key => $value)
{
  // $template = str_replace('{{ '.$key.' }}', $value, $template);
  $dtable .= '<tr>';
  $dtable .= '<td style="border-bottom: 1px solid #dedede; padding: 8px"><strong>' . $key . ':</strong></td><td style="border-bottom: 1px solid #dedede; white-space: nowrap;width: 6px; padding: 8px;"></td></td><td style="border-bottom: 1px solid #dedede;">' . $value . '</td>';
  $dtable .= '</tr>';
  // echo $dtable;
};
$finalTemplate = str_replace('{{ datatable }}', $dtable, $template);
$mail->msgHTML($finalTemplate);

//Replace the plain text body with one created manually
$mail->AltBody = 'All data cn be found in the HTML version of this email.';

//$mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file
//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: '. $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}
print_r( $dtable);
 ?>
