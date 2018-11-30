<?php

include_once "connPDO.php";

$username = $_POST["username"];
$apartmentnr = $_POST["apartmentnr"];
$password = $_POST["password"];

$passwordDB = password_hash($password,PASSWORD_DEFAULT);


// Attempt insert query execution
try{
    $sql = "INSERT INTO users (apartmentnr, fullname, password, picture) VALUES (:apartmentnr, :username, :password, 'Nej')";
    $stmt = $pdo->prepare($sql);
    
    $stmt->bindParam(':apartmentnr', $apartmentnr);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $passwordDB);

    $stmt->execute();

    echo "Records inserted successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

$reservationNull = "u" .$apartmentnr. "/t 00:00-00:00/d0000-00-00";

try{
    $sql = "INSERT INTO reservations1 (apartmentnr, reservation) VALUES ('$apartmentnr', '$reservationNull')";    
    $pdo->exec($sql);
    echo "Records inserted successfully.";
    include_once "adminInloggad.php";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
 

// Close connection
unset($pdo);

