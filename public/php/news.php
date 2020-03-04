<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json");

require_once('config.php');
require_once('admin.php');



$rest_json = file_get_contents("php://input");
$datas = json_decode($rest_json, true);

if (isset($_POST)) {
        $tabNews = searchNews();
        $tab = ['status' => 'success', 'tabInfos' => $tabNews];
        echo json_encode($tab);
    
}
