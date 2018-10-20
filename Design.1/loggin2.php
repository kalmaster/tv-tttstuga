<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";

    session_start();


// Attempt select query execution
    $apartment = $_POST['apartmentnr'];
    $password = $_POST['password'];
//  $name = $_POST['first_name'];
    $_SESSION["loggedApartmentnr"] = $apartment;

 
try{
    $sql = "SELECT * FROM users WHERE apartmentnr ='".$apartment."'";  
    $result = $pdo->query($sql);
    if($result->rowCount() > 0){

        while($row = $result->fetch()){

            $row['apartmentnr'];
            $row['password'];
 
			$hash=$row['password'];
			
			if (password_verify($password, $hash)) {
                echo 'Password is valid!';
                include 'userStartup.php';
            } else {
                include "index.html";
                echo 'Invalid password.';
            }			
        }
        // Free result set
        unset($result);
    } else{
        include "index.html";
        echo "<br> No records matching your query were found.";
    }
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
 
// Close connection
unset($pdo);
