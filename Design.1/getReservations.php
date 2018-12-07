<?php 

include "connPDO.php";


// Attempt select query execution
try{
    $sql = "SELECT * FROM reservations";   
    $result = $pdo->query($sql);
    
    $amountOFRows = $result->rowCount();
    echo $amountOFRows;

    // Creating the javascript array.
    if($result->rowCount() > 0){

        // Starts to echo a javascript script.
        echo "<script id=\"reservationScript\">";

            // Creates a table for the reservations and a 
            // vraible for the logged in user.
            echo "var userLoggedIn = \""  .$_SESSION["userOrNr"]. "\";";
            echo "var reservations = new Array(" .$amountOFRows. ");";
        $i = 0;

        //Inserts valus from the database in to the array.
        while($row = $result->fetch()){

            echo "reservations[$i] = \"" .$row["reservation"]. "\" ;";
            $i += 1;
        }
        echo "</script>";
        // Free result set
        unset($result);
    } else{
        echo "No records matching your query were found.";
    }

} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}
// Close connection
unset($pdo);
