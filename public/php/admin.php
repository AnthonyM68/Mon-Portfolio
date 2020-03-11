<?php

$options = [
   PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
$pdo = new PDO('mysql:host=' . $host . ';dbname=' . $dbname, $user, $pass, $options);


function searchAbout()
{
   global $pdo;
   $req = $pdo->prepare('SELECT * FROM about');
   $req->execute();
   return $req->fetchAll();
}

function searchTimeline()
{
   global $pdo;
   $req = $pdo->prepare('SELECT * FROM timeline');
   $req->execute();
   return $req->fetchAll();
}
function searchProjects()
{
   global $pdo;
   $req = $pdo->prepare('SELECT * FROM mylikes');
   $req->execute();
   return $req->fetchAll();
}
function searchNews()
{
   global $pdo;
   $req = $pdo->prepare('SELECT * FROM news');
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
   global $pdo;
   $req = $pdo->prepare('INSERT INTO mail (email, last_name, first_name, adress, city, postal_code, phone, content) VALUE (?, ?, ?, ?, ?, ?, ?, ?) ');
   return $req->execute([$email, $last_name, $first_name, $adress, $city, $postal_code, $phone, $message]);
}
