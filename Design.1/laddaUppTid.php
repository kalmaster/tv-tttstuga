<?php 

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";

echo $_SESSION["userOrNr"];

$bookedTime = $_POST["bookedTimeVar"];
$bookedDate = $_POST["bookedDateVar"];
 
// Attempt insert query execution
/*
try{
    $sql = "INSERT INTO reservations (lagenhet, tid, datum) VALUES ('1', '$bookedTime', '$bookedDate')";    
    $pdo->exec($sql);
    echo "Records inserted successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
*/
// Attempt update query execution
try{
    $sql = "UPDATE reservations SET tid='".$bookedTime."', datum='".$bookedDate."' WHERE lagenhet='".$_SESSION["userOrNr"]."'";    
    $pdo->exec($sql);
  echo "Records were updated successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

include "anvandareInloggad.php";
// Close connection

session_start();
unset($pdo);

