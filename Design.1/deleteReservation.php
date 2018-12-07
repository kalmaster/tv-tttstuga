<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";


$reservation = "u".$_SESSION["userOrNr"]. "/t00:00-00:00/d0000-00-00";
$_SESSION["sendFromDelRes"] = "true";

try{
    $sql = "UPDATE reservations SET reservation='".$reservation."' WHERE apartmentnr='".$_SESSION["userOrNr"]."'";    
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
 
include_once "getReservations.php";

// Close connection
unset($pdo);