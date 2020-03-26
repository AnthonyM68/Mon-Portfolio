<?php
//l'un ou l'autre en fonction du serveur
if ($_SERVER['SERVER_NAME'] === "") {
    $host = "localhost";
    $dbname = ";charset=utf8";
    $user = "";
    $pass = "";

} else if ($_SERVER['SERVER_NAME'] === "localhost") {
    $host = "localhost";
    $dbname = "portfolio;charset=utf8";
    $user = "root";
    $pass = "";
}
