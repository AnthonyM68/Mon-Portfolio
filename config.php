<?php
//l'un ou l'autre en fonction du serveur
if ($_SERVER['SERVER_NAME'] === "anthonym.promo-36.codeur.online") {
    $host = "localhost";
    $dbname = "anthonym_portfoliodb;charset=utf8";
    $user = "anthonym";
    $pass = "4Wflo7tNwAG41A==";

} else if ($_SERVER['SERVER_NAME'] === "localhost") {
    $host = "localhost";
    $dbname = "anthonym_portfolio;charset=utf8";
    $user = "root";
    $pass = "";
}
