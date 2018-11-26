<?php 
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";

/*
$time = $_POST["bookedTimeVar"];
$date = $_POST["bookedDateVar"];

$reservation = "u" .$_SESSION["userOrNr"]. "" */ 
// Attempt update query execution 
/*
try{
    $sql = "UPDATE reservations SET bookedTime='".$bookedTime."', bookedDate='".$bookedDate."' WHERE apartmentnr='".$_SESSION["userOrNr"]."'";    
    $pdo->exec($sql);
  echo "Records were updated successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}*/


$reservation = $_POST["reservation"];

try{
    $sql = "UPDATE reservations1 SET reservation='".$reservation."' WHERE apartmentnr='".$_SESSION["userOrNr"]."'";    
    $pdo->exec($sql);
  echo "Records were updated successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

include "getReservations.php";
// Close connection
unset($pdo);

