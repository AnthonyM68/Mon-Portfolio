<?php

// Connexion BDD -> PDO

$options = [
   PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
$pdo = new PDO('mysql:host=' . $host . ';dbname=' . $dbname, $user, $pass, $options);


function recupere()
{
   global $pdo;
   $req = $pdo->prepare('SELECT * FROM mylikes');
   $req->execute();
   return $req->fetch();
}
function ajoute($result)
{
   global $pdo;
   $req = $pdo->prepare('UPDATE mylikes SET bomberman=?');
   $req->execute([$result]);
   return $req->fetch();
}
