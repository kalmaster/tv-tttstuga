<?php
session_start();

include_once "conn.php";

$apartmentnr = $_POST["apartmentnr"];

$userDeleted = false;
$reservationDeleted = false;

//Deletes the user from the users table in the database. 
try{
    $sql = "DELETE FROM users WHERE apartmentnr='$apartmentnr'";  
    $pdo->exec($sql);

    $userDeleted = true;
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

//Deletes the reservationspace the user had in the reservations table in the database. 
try{
    $sql = "DELETE FROM reservations WHERE apartmentnr='$apartmentnr'";  
    $pdo->exec($sql);

    $reservationDeleted = true;
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}


//Cheks if the user was deleted succesfuly 
if($userDeleted == true && $reservationDeleted == true)
{
	include_once "adminStartup.php";
} 

// Close connection
unset($pdo);
?>