<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$datas = json_decode($rest_json, true);


$info = "Vous n 'avez pas indiqué votre";
$checkInfos = ['inputEmail', 'inputFirstName', 'inputLastName', 'inputAddress', 'inputCity', 'inputZip', 'inputPhone', 'message'];
$messageInfo = ['Email',  'Nom', 'Prénom', 'Adresse postal', 'Ville', 'Code postal', 'Telephone', 'Message'];


for ($i = 0; $i < count($checkInfos); $i++) {
    if (empty($datas[$checkInfos[$i]])) {
        if ($i === 0) {
            $errors[] = $info . $messageInfo[$i];
        } else {
            $errors[] = $messageInfo[$i];
        }
    } else {
        ${$checkInfos[$i]} = $datas[$checkInfos[$i]];
    }
}

require_once('vendor/autoload.php');

$transport = (new Swift_SmtpTransport('smtp.mailtrap.io', 25))
    ->setUsername('072a4903f7e537')
    ->setPassword('e4b40ae31fd365');


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
echo $result;
?>
<?php
/*
<tr><th align='left' bgcolor='#f57900'> Date: <span style=\"color:#930031\">" . $date . "</span></th></tr>
<br>
Nom: <span style=\"color:#888\">" . $datas['inputFirstName'] . "</span>
<br>
Email: <span style=\"color:#888\">". $datas['inputEmail'] . "</span>
<br>
Message: <div style=\"color:#888\">" . $datas['inputLastName'] . "</div>
</div>
<br/>*/



/*
$rest_json = file_get_contents("php://input");
$datas = json_decode($rest_json, true);
$errors = array();


$info = "Vous n 'avez pas indiqué votre";
$checkInfos = ['inputEmail', 'inputFirstName', 'inputLastName', 'inputAddress', 'inputCity', 'inputZip', 'inputPhone', 'message'];
$messageInfo = ['Email',  'Nom', 'Prénom', 'Adresse postal', 'Ville', 'Code postal', 'Telephone', 'Message'];



for ($i = 0; $i < count($checkInfos); $i++) {
    if (empty($datas[$checkInfos[$i]])) {
        if ($i === 0) {
            $errors[] = $info . $messageInfo[$i];
        } else {
            $errors[] = $messageInfo[$i];
        }
    } else {
        ${$checkInfos[$i]} = $datas[$checkInfos[$i]];
    }
}


/*
if (empty($datas['inputEmail'])) {
    //si l'email est vide on mets l'erreur dans un tableau
    $errors[] = 'Vous n\'avez pas indiqué votre Email';
} else {

    // vérifie si l'email est valide
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email invalide';
    } else {
        $email = $datas['inputEmail'];
    }
}
if (empty($datas['inputFirstName'])) {
    //si le nom est vide on mets l'erreur dans un tableau
    $errors[] = 'Vous n\'avez pas indiqué votre Nom';
} else {
    $inputFirstName = $datas['inputFirstName'];
}
if (empty($datas['inputLastName'])) {
    //si le nom est vide on mets l'erreur dans un tableau
    $errors[] = 'Vous n\'avez pas indiqué votre Prénom';
} else {
    $inputLastName = $datas['inputLastName'];
}


if (empty($datas['message'])) {
    //si le message est vide on mets l'erreur dans un tableau
    $errors[] = 'Vous n\'avez pas indiqué votre message!';
} else {
    $message = $datas['message'];
}
*/
/*/
/*
//Si aucune erreur ont prépare le mail a envoyer
if (empty($errors)) {
    $date = date('j, F Y h:i A');
    $emailBody = "
    <html>
    <head>
      <title>$inputEmail prise de contact</title>
    </head>
    <body style=\"background-color:#fafafa;\">
      <div style=\"padding:20px;\">
        Date: <span style=\"color:#888\">$date</span>
        <br>
        Nom: <span style=\"color:#888\">$inputFirstName</span>
        <br>
        Email: <span style=\"color:#888\">$inputEmail</span>
        <br>
        Message: <div style=\"color:#888\">$message</div>
      </div>
    </body>
    </html>
    ";
}
//si l'envoie est fait en distant//////////////////////////////////////////////////////////////
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    //Envoyez l'e-mail
    $headers = 'From: Contact Portfolio <contact@logic-68consolessystem.fr>' . "\r\n" .
        "Reply-To: $inputEmail" . "\r\n" .
        "MIME-Version: 1.0\r\n" .
        "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'contact@logic-68consolessystem.fr';
    $subject = 'Contact Porfolio';
    

    if (mail($to, $subject, $emailBody, $headers)) {
        $sent = true;
    }

    //Si l'envoie est fait en local/////////////////////////////////////////////////////////////
} else if ($_SERVER['SERVER_NAME'] === "localhost") {
    require_once('vendor/autoload.php');
    $transport = (new Swift_SmtpTransport('smtp.mailtrap.io', 25))
        ->setUsername('072a4903f7e537')
        ->setPassword('e4b40ae31fd365');

    $mailer = new Swift_Mailer($transport);


    $message = (new Swift_Message('Test Email'))
        ->setFrom(['contact@logic-consolessystem.fr' => 'logic-68consolessystem.fr'])
        ->setTo(['serveur@local.fr'])
        ->setBody('salut les gens');

    $result = $mailer->send($message);
    var_dump($result);
}
?>
<!--Si une ou plusieurs erreur ont étaient relevé------------------------------------------->
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
<?php endif; ?>

