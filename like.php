<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json");

require('config.php');
require('admin.php');

$rest_json = file_get_contents("php://input");
$datas = json_decode($rest_json, true);


if (isset($_POST)) {
    
    $result = recupere();
    $result = $result['bomberman'] + $datas['count'];
 
    $result = ajoute($result);


?>
    {
    "status": "success",
    "message": "Vos données ont bien étaient transmis",
    "data":<?php echo json_encode($result) ?>,
    "datas":<?php echo json_encode($datas['count']) ?>
    }
<?php
}
