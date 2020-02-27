<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$datas = json_decode($rest_json, true);



$checkInfos = ['inputEmail', 'inputFirstName', 'inputLastName', 'inputAddress', 'inputCity', 'inputZip', 'inputPhone', 'message'];
$messageInfo = ['Email',  'Nom', 'Prenom', 'Adresse postal', 'Ville', 'Code postal', 'Telephone', 'Message'];


for ($i = 0; $i < count($checkInfos); $i++) {
    if (empty($datas[$checkInfos[$i]])) {
        if ($i === 0) {
            $errors[] = $messageInfo[$i];
        } else {
            $errors[] = $messageInfo[$i];
        }
    } else {
        ${$checkInfos[$i]} = $datas[$checkInfos[$i]];
    }
}




if ($_SERVER['SERVER_NAME'] === "anthonym.promo-36.codeur.online") {
    
    //Envoyez l'e-mail
    $headers = 'From: Contact Portfolio <contact@logic-68consolessystem.fr>' . "\r\n" .
        "Reply-To: $inputEmail" . "\r\n" .
        "MIME-Version: 1.0\r\n" .
        "Content-Type: text/html; charset=utf-8\r\n";

    $to = 'contact@logic-68consolessystem.fr';
    $subject = 'Contact Porfolio';

    $message ="<html>
    <head>
      <title>$inputEmail prise de contact</title>
    </head>
    <body style=\"background-color:#fafafa;\">
      <div style=\"padding:20px;\">
      <span style='background-color: #cc0000; color: #fce94f; font-size: x-large;'>( Nouveau Contact )</span><br><br>


      
      <table style=\"border:1px solid #000\">
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Nom : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputFirstName'] . "</td>
      </tr>
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Prénom : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputLastName'] . "</td>
      </tr>
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Email : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputEmail'] . "</td>
      </tr>
      </table>
      <table style=\"border:1px solid #000\">
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Adresse : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputAddress'] . "</td>
      </tr>
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Ville : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputCity'] . "</td>
      </tr>
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Code postal : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputZip'] . "</td>
      </tr>
      </table>
      <br><br>
      <table>
      <tr>
      <td style=\"border:1px solid #000; width:600px;heigth:200px\"> " . $datas['message'] . "</td>
      </tr>
      </table>
    </body>
    </html>";
    

    if (mail($to, $subject, $message , $headers)) {
        $sent = true;
    }
}
?>

<?php if (!empty($errors)) : ?>
    {
    "status": "fail",
    "error": <?php echo json_encode($errors) ?>
    }
<?php endif; ?>
<!--Si aucune erreur a été relevé------------------------------------------->
<?php if (isset($sent) && $sent === true) : ?>
    {
    "status": "success",
    "message": "Vos données ont bien étaient transmis"
    }
<?php endif; 
/*
require_once('vendor/autoload.php');

$transport = (new Swift_SmtpTransport('smtp.mailtrap.io', 25))
    ->setUsername('10d8c72cde03e7')
    ->setPassword('bb66424e01e210');


$mailer = new Swift_Mailer($transport);
$date = date('j, F Y h:i A');

$message = (new Swift_Message('bienvenue'))
    ->setFrom(['contact@logic-consolessystem.fr' => 'logic-68consolessystem.fr'])
    ->setTo(['demo@demo.fr'])
    ->setBody("<html>
    <head>
      <title>$inputEmail prise de contact</title>
    </head>
    <body style=\"background-color:#fafafa;\">
      <div style=\"padding:20px;\">
      <span style='background-color: #cc0000; color: #fce94f; font-size: x-large;'>( Nouveau Contact )</span><br><br>


      
      <table style=\"border:1px solid #000\">
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Nom : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputFirstName'] . "</td>
      </tr>
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Prénom : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputLastName'] . "</td>
      </tr>
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Email : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputEmail'] . "</td>
      </tr>
      </table>
      <table style=\"border:1px solid #000\">
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Adresse : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputAddress'] . "</td>
      </tr>
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Ville : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputCity'] . "</td>
      </tr>
      <tr>
      <td style=\"border:1px solid #000; width:100px\">Code postal : </td>
      <td style=\"border:1px solid #000; width:500px\">" . $datas['inputZip'] . "</td>
      </tr>
      </table>
      <br><br>
      <table>
      <tr>
      <td style=\"border:1px solid #000; width:600px;heigth:200px\"> " . $datas['message'] . "</td>
      </tr>
      </table>
    </body>
    </html>");

$type = $message->getHeaders()->get('Content-Type');
$type->setValue('text/html');
$type->setParameter('charset', 'utf-8');

echo $type->toString();
$result = $mailer->send($message);
//echo $result;
?>


<?php if (!empty($errors)) : ?>
    {
    "status": "fail",
    "error": <?php echo json_encode($errors) ?>
    }
<?php endif; ?>
<!--Si aucune erreur a été relevé------------------------------------------->
<?php if (isset($sent) && $sent === true) : ?>
    {
    "status": "success",
    "message": "Vos données ont bien étaient transmis"
    }
<?php endif; */
