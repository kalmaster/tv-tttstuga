<?php 

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";


include_once "anvandareInloggad.html";
//echo "<input type="HIDDEN" id="bokadTid"/>";
/*
$bookedTime = $_POST['bookedTimeVar'];
$bookedDate = $_POST['bookedDateVar'];
// Attempt insert query execution
try{
    $sql = "INSERT INTO reservations (lagenhet, tid, datum) VALUES ('1', '$bookedTime', '$bookedDate')";    
    $pdo->exec($sql);
    echo "Records inserted successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}*/

// Close connection
unset($pdo);
