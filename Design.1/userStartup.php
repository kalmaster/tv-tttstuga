<?php 

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";

$sql = "SELECT * FROM reservations";
$result = $pdo->query($sql);

if (!$result) {
    // output data of each row
    while($row = $result->fetch_row()) {
        echo "<br> lagenhet: ". $row["lagenhet"]. " - tid: ". $row["tid"]. " " . $row["datum"] . "<br>";
    }
} else {
    echo "0 results";
}


$amount = count($result);
echo $amount;
//$result[i]
include_once "anvandareInloggad.php";


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
