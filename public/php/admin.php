<?php

$options = [
   PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
$pdo = new PDO('mysql:host=' . $host . ';dbname=' . $dbname, $user, $pass, $options);


function searchNews()
{
   global $pdo;
   $req = $pdo->prepare('SELECT * FROM news');
   $req->execute();
   return $req->fetchAll();
}
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
function mailbdd($email, $last_name, $first_name, $adress, $city, $postal_code, $phone, $message)
{
   echo json_encode('bdddata');
   global $pdo;
   $req = $pdo->prepare('INSERT INTO mail (email, last_name, first_name, adress, city, postal_code, phone, content) VALUE (?, ?, ?, ?, ?, ?, ?, ?) ');
   return $req->execute([$email, $last_name, $first_name, $adress, $city, $postal_code, $phone, $message]);
}

