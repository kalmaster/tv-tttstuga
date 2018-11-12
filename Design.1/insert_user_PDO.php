<?php

include_once "connPDO.php";

$apartmentnr = $_POST["lagenhetsnr"];
$username = $_POST["username"];
$password = $_POST["password"];

$passwordDB = password_hash($password,PASSWORD_DEFAULT);


// Attempt insert query execution
try{
    $sql = "INSERT INTO users (apartmentnr, fullname, password, picture) VALUES (:apartmentnr, :username, :password, 'Nice picture')";
    $stmt = $pdo->prepare($sql);
    
    $stmt->bindParam(':apartmentnr', $apartmentnr);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $passwordDB);

    $stmt->execute();

    echo "Records inserted successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

try{
    $sql = "INSERT INTO reservations (lagenhet, tid, datum) VALUES ('$apartmentnr', '00:00-00:00', '0000-00-00')";    
    $pdo->exec($sql);
    echo "Records inserted successfully.";
    include_once "adminInloggad.php";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
 

// Close connection
unset($pdo);

