<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json");

require('config.php');
require('admin.php');

$rest_json = file_get_contents("php://input");
$datas = json_decode($rest_json, true);

function searchTabNews()
{
   global $pdo;
   $req = $pdo->prepare('SELECT * FROM news');
   $req->execute();
   return $req->fetchAll();
}

if (isset($_POST)) {
        $tabInfos = searchTabNews();
        $tab = ['status' => 'success', 'tabInfos' => $tabInfos];
        echo json_encode($tab);
    
}
