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
    if ($datas['id'] === 'search') {
        $tabInfos = searchProjects();
        if(!empty($tabInfos) && is_array($tabInfos)){
            $tab = ['status' => 'success', 'tabInfos' => $tabInfos];
            echo json_encode($tab);
        } else {
            $tab = ['status' => 'fail'];
            echo json_encode($tab);
        }

    } else {
        $result = recoversLikes($datas['id']);

        if ($result) {
            $result = $result['likes'] + $datas['count'];
            $result = updateLikes($result, $datas['id']);

            if ($result) {
                $tabInfos = searchProjects();
                $tab = ['status' => 'success', 'tabInfos' => $tabInfos];
                echo json_encode($tab);
            } else {
                $tab = ['status' => 'fail', 'message' => 'no connect'];
                echo json_encode($tab);
            }
        } else {
            $tab = ['status' => 'fail', 'message' => 'no connect'];
            echo json_encode($tab);
        }
    }
}