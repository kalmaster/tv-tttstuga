<?php 
session_start();

include_once "conn.php";

$reservation = $_POST["reservation"];

try{
    $sql = "UPDATE reservations SET reservation='".$reservation."' WHERE apartmentnr='".$_SESSION["userOrNr"]."'";    
    $pdo->exec($sql);
  echo "Records were updated successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

// Close connection
unset($pdo);

