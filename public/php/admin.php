<?php

$options = [
   PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
$pdo = new PDO('mysql:host=' . $host . ';dbname=' . $dbname, $user, $pass, $options);



function search()
{
   global $pdo;
   $req = $pdo->prepare('SELECT * FROM mylikes');
   $req->execute();
   return $req->fetchAll();
}
function recoversLikes($project)
{
   global $pdo;
   $req = $pdo->prepare('SELECT likes FROM mylikes WHERE project=?');
   $req->execute([$project]);
   return $req->fetch();
}
function updateLikes($result, $project)
{
   global $pdo;
   $req = $pdo->prepare('UPDATE mylikes SET likes=? WHERE project=?');
   return $req->execute([$result, $project]);
}


