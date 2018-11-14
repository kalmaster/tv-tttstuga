<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include_once "connPDO.php";

//SESSION variabler...
$_SESSION["loginAs"] = $_POST["loginAs"];
$_SESSION["userOrNr"] = $_POST["userOrNr"];
$_SESSION["password"] = $_POST["password"];


if($_SESSION["loginAs"] == "user"){
      try{
         $sql = "SELECT * FROM users WHERE apartmentnr ='".$_SESSION["userOrNr"]."'"; 
        $result = $pdo->query($sql);
        if($result->rowCount() > 0){

            while($row = $result->fetch()){

                $row["apartmentnr"];
                $row["password"];
     
                $hash=$row["password"];
                
                if (password_verify($_SESSION["password"], $hash)) {
                    echo 'Password is valid!';
                    include_once "userStartup.php";
                } else {
                    include "index.php";
                    echo 'Invalid password.';
                }           
            }
            // Free result set
            unset($result);
        } else{
            include "index.php";
            echo "<br> No records matching your query were found.";
        }
    } catch(PDOException $e){
        die("ERROR: Could not able to execute $sql. " . $e->getMessage());
    }  
}

else{
      try{
        $sql = "SELECT * FROM admin WHERE username ='".$_SESSION["userOrNr"]."'";  
        $result = $pdo->query($sql);
        if($result->rowCount() > 0){

            while($row = $result->fetch()){

                $row["username"];
                $row["password"];
     
                $hash=$row["password"];
                
                if (password_verify($_SESSION["password"], $hash)) {
                    echo "Password is valid!";
                    include 'adminStartup.php';
                } else {
                    include "index.php";
                    echo "Invalid password.";
                }           
            }
            // Free result set
            unset($result);
        } else{
            include "index.php";
            echo "<br> No records matching your query were found.";
        }
    } catch(PDOException $e){
        die("ERROR: Could not able to execute $sql. " . $e->getMessage());
    }  
}

 
// Close connection
unset($pdo);
