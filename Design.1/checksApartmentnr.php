<?php
session_start();

include_once "conn.php";

$apartmentnr = $_POST["apartmentnr"];
$usedOrNot = false;

// Attempt select query execution
try{
    //Gets all the existing apartmentnr.
    $sql = "SELECT apartmentnr FROM users";   
    $result = $pdo->query($sql);


    if($result->rowCount() > 0){

        //Cheks all the apartmentnr.
        while($row = $result->fetch()){
        	$rowNr = $row["apartmentnr"];

            //Cheks if the apartmentnr that the admin enterd already exists.
        	if($rowNr == $apartmentnr)
        	{
        		echo "Lägenhetsnummret " .$apartmentnr. " är redan upptaget.";
                $usedOrNot = true;
        	}
        }
        if($usedOrNot == false)
        {
            echo "";
        }

        // Free result set
        unset($result);
    } else{
        echo "";
    }

} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
// Close connection
unset($pdo);