<?php

include_once "connPDO.php";

$username = $_POST["username"];
$apartmentnr = $_POST["apartmentnr"];
$password = $_POST["password"];

$passwordDB = password_hash($password,PASSWORD_DEFAULT);

$userSet = false;
$reservationSet = false;

// Attempt insert query execution
try{
    $sql = "INSERT INTO users (apartmentnr, fullname, password, picture) VALUES (:apartmentnr, :username, :password, 'NEJ')";
    $stmt = $pdo->prepare($sql);
    
    $stmt->bindParam(':apartmentnr', $apartmentnr);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $passwordDB);

    $stmt->execute();

    $userSet = true;
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

try{
    $sql = "INSERT INTO reservationstest2 (apartmentnr, reservation) VALUES ('$apartmentnr', '00:00-00:00/0000-00-00')";    
    $pdo->exec($sql);

    $reservationSet = true;
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
 
if($userSet == true && $reservationSet == true)
{
    include_once "adminStartup.php";
}
// Close connection
unset($pdo);


