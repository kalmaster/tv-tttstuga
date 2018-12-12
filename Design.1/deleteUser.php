<?php
session_start();

include_once "conn.php";

$apartmentnr = $_POST["apartmentnr"];

$userDeleted = false;
$reservationDeleted = false;
// Attempt update query execution
try{
    $sql = "DELETE FROM users WHERE apartmentnr='$apartmentnr'";  
    $pdo->exec($sql);

    $userDeleted = true;
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

try{
    $sql = "DELETE FROM reservations WHERE apartmentnr='$apartmentnr'";  
    $pdo->exec($sql);

    $reservationDeleted = true;
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
 
if($userDeleted == true && $reservationDeleted == true)
{
	include_once "adminStartup.php";
} 

// Close connection
unset($pdo);
?>