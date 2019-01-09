<?php 
session_start();

include_once "conn.php";

//Gets the reservation.
$reservation = $_POST["reservation"];

try{
	//Updates the reservation in the database.  
    $sql = "UPDATE reservations SET reservation='".$reservation."' WHERE apartmentnr='".$_SESSION["userOrNr"]."'";    
    $pdo->exec($sql);
  echo "Records were updated successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

// Close connection
unset($pdo);

