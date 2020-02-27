<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json");

require('config.php');
require('admin.php');

if(isset($_POST)){
    $result = recupere();

    ?>
        {
        "status": "success",
        "message": "Vos données ont bien étaient transmis",
        "data":<?php echo json_encode($result) ?>
        }
    <?php
}

