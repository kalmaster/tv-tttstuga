<?php 

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
try{
    $pdo = new PDO("mysql:host=localhost;dbname=tvattstugan", "root", "");
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}

$bookedTime = $_POST['bookedTimeVar'];
$bookedDate = $_POST['bookedDateVar'];
// Attempt insert query execution
try{
    $sql = "INSERT INTO reservations (lagenhet, tid, datum) VALUES ('1', '$bookedTime', '$bookedDate')";    
    $pdo->exec($sql);
    echo "Records inserted successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

// Close connection
unset($pdo);

include 'anvandareInloggad.html';