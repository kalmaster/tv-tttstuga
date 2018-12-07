<?php

include_once "connPDO.php";

$apartmentnr = $_POST["apartmentnr"];
$usedOrNot = false;

// Attempt select query execution
try{
    $sql = "SELECT apartmentnr FROM users";   
    $result = $pdo->query($sql);

    // Creating the javascript array.
    if($result->rowCount() > 0){

        //Inserts valus from the database in to the array.
        while($row = $result->fetch()){
        	$rowNr = $row["apartmentnr"];

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