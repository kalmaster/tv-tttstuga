<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";

try{
    $sql = "UPDATE reservations SET tid='00:00-00:00', datum='0000-00-00' WHERE lagenhet='".$_SESSION["userOrNr"]."'";    
    $pdo->exec($sql);
  echo "Records were updated successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

 /*
// Attempt update query execution
try{
    $sql = "DELETE FROM reservations WHERE lagenhet='1'";  
    $pdo->exec($sql);
    echo "Records were deleted successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
} */
 
// Close connection
unset($pdo);

include "anvandareInloggad.php";