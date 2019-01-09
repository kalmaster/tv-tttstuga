<?php
session_start();

include_once "conn.php";

//Creates a string with the date and time set to "zero".
$reservation = "u".$_SESSION["userOrNr"]. "/t00:00-00:00/d0000-00-00";

$_SESSION["sendFromDelRes"] = "true";


try{
	//Delets/set the value of the reservation 
	//in the database to "zero". 
    $sql = "UPDATE reservations SET reservation='".$reservation."' WHERE apartmentnr='".$_SESSION["userOrNr"]."'";    
    $pdo->exec($sql);
  echo "Records were updated successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

// Close connection
unset($pdo);