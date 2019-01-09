<?php 
    session_start();

    include "conn.php";

    //Checks if it's the first time this file was called.
    if($_SESSION["firstTime"] == true)
    {
        // Attempt select query execution
        try{
            $sql = "SELECT * FROM reservations";   
            $result = $pdo->query($sql);
            
            $amountOFRows = $result->rowCount();
            
            // Creating the javascript array.
            if($result->rowCount() > 0){

                // Starts to echo a javascript script.
                echo "<script id=\"reservationScript\">";

                    // Creates a table for the reservations and a 
                    // vraible for the logged in user.
                    echo "var userLoggedIn = \""  .$_SESSION["userOrNr"]. "\"; ";

                    echo "var reservations = new Array(" .$amountOFRows. "); ";
                $i = 0;

                //Inserts valus from the database in to the array.
                while($row = $result->fetch()){

                    echo "reservations[$i] = \"" .$row["reservation"]. "\";";
                    $i += 1;
                }
                echo "</script>";

                $_SESSION["firstTime"] = false;

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
    }
    else
    {
        // Attempt select query execution
    try{
        $sql = "SELECT * FROM reservations";   
        $result = $pdo->query($sql);
        
        //Get the amount of rows the table has. 
        $amountOFRows = $result->rowCount();
        
        // Creating the javascript array.
        if($result->rowCount() > 0){

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
    }

