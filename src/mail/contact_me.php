<?php
require_once("Mail.php");
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
   $name = strip_tags(htmlspecialchars($_POST['name']));
   $email_address = strip_tags(htmlspecialchars($_POST['email']));
   $phone = strip_tags(htmlspecialchars($_POST['phone']));
   $message = strip_tags(htmlspecialchars($_POST['message']));
   


   
   
   $from = $name.' '.'<'.$email_address.'>';
   $to = "heath@heathshults.com";
   $subject = "Contact inquiry from heathshults.com";
   $body = $message;
   
   $host = "a2plcpnl0219.prod.iad2.secureserver.net";
   $username = "heath@heathshults.com";
   $password = "HK3134Ever";
   
   $headers = array('From' => $from, 'To' => $to, 'Subject' => $subject);
   
   $smtp = Mail::factory('smtp', array ('host' => $host,
                                        'auth' => true,
                                        'username' => $username,
                                        'password' => $password));
   
   $mail = $smtp->send($to, $headers, $body);
   
   if ( PEAR::isError($mail) ) {
       echo("<p>Error sending mail:<br/>" . $mail->getMessage() . "</p>");
   } else {
       echo("<p>Message sent.</p>");
   }
   
   // $name = strip_tags(htmlspecialchars($_POST['name']));
// $email_address = strip_tags(htmlspecialchars($_POST['email']));
// $phone = strip_tags(htmlspecialchars($_POST['phone']));
// $message = strip_tags(htmlspecialchars($_POST['message']));
   
// // Create the email and send the message
// $to = 'heath@heathshults.com'; // Add your email address in between the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
// $email_subject = "HeathShults.com Contact Form:  $name";
// $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
// $headers = "From: noreply@heathshults.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
// $headers .= "Reply-To: $email_address";   
// mail($to,$email_subject,$email_body,$headers);
// return true;         
?>
