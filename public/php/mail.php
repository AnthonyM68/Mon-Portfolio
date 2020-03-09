<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json");

require_once('config.php');
require_once('admin.php');

$rest_json = file_get_contents("php://input");
$datas = json_decode($rest_json, true);



$checkInfos = ['inputEmail', 'inputFirstName', 'inputLastName', 'inputAddress', 'inputCity', 'inputZip', 'inputPhone', 'message'];

for ($i = 0; $i < count($checkInfos); $i++) {

    if (empty($datas[$checkInfos[$i]] )) {
        $errors[] = $checkInfos[$i];
    } else {
        $success[] = $checkInfos[$i];
    }
}


$message = "<html>
<head>
<title>Prise de contact</title>
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

if ($_SERVER['SERVER_NAME'] === "anthonym.promo-36.codeur.online") {
    //Envoyez l'e-mail
        $mail_exp = $datas['inputEmail'];
        $headers = "From: Portfolio < $mail_exp > " . "\r\n" .
        "Reply-To: $mail_exp" . "\r\n" .
        "MIME-Version: 1.0\r\n" .
        "Content-Type: text/html; charset=utf-8\r\n";
        $subject = 'Demande de contact depuis Portfolio';
        $mail_dest = 'contact@logic-68consolessystem.fr';
       
        if (empty($errors)) {
            
            if(mail($mail_dest, $subject, $message, $headers)){
                $result = mailbdd($datas['inputEmail'], $datas['inputFirstName'], $datas['inputLastName'], $datas['inputAddress'], $datas['inputCity'], $datas['inputZip'], $datas['inputPhone'], $datas['message']);
                if($result === true){
                    $tab2 = ['status' => 'success', 'message' => $checkInfos];
                } else {
                    $tab2 = ['status' => 'fail', 'message' => 'bdd'];
                }
            } else {
                $tab2 = ['status' => 'fail', 'message' => 'senderror'];
            }
        }
        else  {
            $tab2 = ['status' => 'fail', 'error' => $errors];
        }
        echo json_encode($tab2);

} else if ($_SERVER['SERVER_NAME'] === "localhost") {

    if (empty($error)) {
        require_once('../../vendor/autoload.php');

        $transport = (new Swift_SmtpTransport('smtp.mailtrap.io', 465))
            ->setUsername('10d8c72cde03e7')
            ->setPassword('bb66424e01e210');
        $mailer = new Swift_Mailer($transport);
        $date = date('j, F Y h:i A');
        $message = (new Swift_Message('bienvenue'))
            ->setFrom(['contact@logic-consolessystem.fr' => 'logic-68consolessystem.fr'])
            ->setTo(['demo@demo.fr'])
            ->setBody($message);

        $type = $message->getHeaders()->get('Content-Type');
        $type->setValue('text/html');
        $type->setParameter('charset', 'utf-8');

        if (empty($errors)) {
            $result = $mailer->send($message);

            if($result == true){
                $result = mailbdd($datas['inputEmail'], $datas['inputLastName'], $datas['inputFirstName'], $datas['inputAddress'], $datas['inputCity'], $datas['inputZip'], $datas['inputPhone'], $datas['message']);

                if($result === true){
                    $tab2 = ['status' => 'success', 'message' => $checkInfos];
                } else {
                    $tab2 = ['status' => 'fail', 'message' => 'bdd'];
                }

            } else {
                $tab2 = ['status' => 'fail', 'message' => 'senderror'];
            }
        }
        else  {
            $tab2 = ['status' => 'fail', 'error' => $errors];
        }
        echo json_encode($tab2);
    }
}