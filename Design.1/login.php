<?php
session_start(); 

include_once "conn.php";

//SESSION variabler...
$_SESSION["loginAs"] = $_POST["loginAs"];
$_SESSION["userOrNr"] = $_POST["userOrNr"];
$_SESSION["password"] = $_POST["password"];

//Checks if you login as a user.
if($_SESSION["loginAs"] == "user"){
      try{
         $sql = "SELECT * FROM users WHERE apartmentnr ='".$_SESSION["userOrNr"]."'"; 
        $result = $pdo->query($sql);
        if($result->rowCount() > 0){

            while($row = $result->fetch()){

                $row["apartmentnr"];
                $row["password"];
                
                $hash=$row["password"];
                
                //Checks if the password matches.
                if (password_verify($_SESSION["password"], $hash)) {
                    echo 'Password is valid!';
                    include_once "userStartup.php";
                } else {
                    include_once "index.php";
                    echo 'Invalid password.';
                }           
            }
            // Free result set
            unset($result);
        } else{
            include_once "index.php";
            echo "<br> No records matching your query were found.";
        }
    } catch(PDOException $e){
        die("ERROR: Could not able to execute $sql. " . $e->getMessage());
    }  
}

//If you don't login as a user then you must login as a admin.
else{
      try{
        $sql = "SELECT * FROM admins WHERE username ='".$_SESSION["userOrNr"]."'";  
        $result = $pdo->query($sql);
        if($result->rowCount() > 0){

            while($row = $result->fetch()){

                $row["username"];
                $row["password"];
     
                $hash=$row["password"];
                
                //Cheks if the password matches. 
                if (password_verify($_SESSION["password"], $hash)) {
                    echo "Password is valid!";
                    include_once "adminLoggedIn.php";
                } else {
                    include_once "index.php";
                    echo "Invalid password.";
                }           
            }
            // Free result set
            unset($result);
        } else{
            include_once "index.php";
            echo "<br> No records matching your query were found.";
        }
    } catch(PDOException $e){
        die("ERROR: Could not able to execute $sql. " . $e->getMessage());
    }  
}

 
// Close connection
unset($pdo);
