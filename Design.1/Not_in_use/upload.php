<?php

include_once "connPDO.php";

if ( 0 < $_FILES["file"]["error"] ) {
    echo "Error: " . $_FILES["file"]["error"] . "<br>";
}
else {
    move_uploaded_file($_FILES["file"]["tmp_name"], "uploaded_images/" . $_FILES["file"]["name"]);
    $imagePath = "uploaded_images/" .$_FILES["file"]["name"];
}

$username = $_POST["username"];
$apartmentnr = $_POST["apartmentnr"];
$password = $_POST["password"]; 

$passwordDB = password_hash($password,PASSWORD_DEFAULT);


// Attempt insert query execution
try{
    $sql = "INSERT INTO users (apartmentnr, fullname, password, picture) VALUES (:apartmentnr, :username, :password, :picture)";
    $stmt = $pdo->prepare($sql);
    
    $stmt->bindParam(':apartmentnr', $apartmentnr);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $passwordDB);
    $stmt->bindParam(":picture", $imagePath);

    $stmt->execute();

    echo "Records inserted successfully.";
} catch(PDOException $e){
    include_once "adminStartup.php";
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

$reservationNull = "u" .$apartmentnr. "/t 00:00-00:00/d0000-00-00";

try{
    $sql = "INSERT INTO reservations1 (apartmentnr, reservation) VALUES ('$apartmentnr', '$reservationNull')";    
    $pdo->exec($sql);
    echo "Records inserted successfully.";
    include "adminStartup.php";
} catch(PDOException $e){
    include_once "adminStartup.php";
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
 

// Close connection
unset($pdo);