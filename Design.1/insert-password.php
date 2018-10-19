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

$username = 'KilianJablonka';
$password = '123';

$passwordDB = password_hash('123',PASSWORD_DEFAULT);

// Attempt insert query execution
try{
    $sql = "INSERT INTO users (apartmentnr, fullname, password) VALUES ('1', :username, :password)";
    $stmt = $pdo->prepare($sql);
    
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $passwordDB);

    $stmt->execute();

    echo "Records inserted successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
 
// Close connection
unset($pdo);
?>