<?php 
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";

$reservation = $_POST["reservation"];

try{
    $sql = "UPDATE reservations SET reservation='".$reservation."' WHERE apartmentnr='".$_SESSION["userOrNr"]."'";    
    $pdo->exec($sql);
  echo "Records were updated successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

include "getReservations.php";
// Close connection
unset($pdo);

