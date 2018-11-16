<?php 
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";


$bookedTime = $_POST["bookedTimeVar"];
$bookedDate = $_POST["bookedDateVar"];


// Attempt update query execution
try{
    $sql = "UPDATE reservationsTest SET bookedTime='".$bookedTime."' bookedDate='".$bookedDate."', WHERE apartmentnr='".$_SESSION["userOrNr"]."'";    
    $pdo->exec($sql);
  echo "Records were updated successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

include "anvandareInloggad.php";

// Close connection
unset($pdo);

