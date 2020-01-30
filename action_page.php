<?php
echo 'hello world';
/**header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['inputEmail']) && empty($_POST['inputFirstName'])) die();

if ($_POST)
	{

	// code réponse - 200 OK

	http_response_code(200);
    $subject = $_POST['inputFirstName'] . $_POST['inputLastName'] . $_POST['inputPhone'];
	$to = "contact@logic-68consolessystem.fr";
	$from = $_POST['inputEmail'];

	// données

    $msg = $_POST['number'] . "Message : " . $_POST['message'];
    $adress = "Adresse : " . $_POST['inputAdress'];
    $city = "Ville : " . $_POST['inputCity'];
    $zip = "Code Postal : " . $_POST['inputZip'];
    $mail = "Email : " . $_POST['inputEmail'];
	// Headers

	$headers = "MIME-Version: 1.0\r\n";
    $headers.= "Content-type: text/html; charset=UTF-8\r\n";
    
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $adress, $city, $zip, $mail,  $headers);

	// echo json_encode( $_POST );

	echo json_encode(array("sent" => true));
	} else {
	// tell the user about error
	echo json_encode(["sent" => false, "message" => "Erreur de soumission au serveur"]);
    }*/
    


?>