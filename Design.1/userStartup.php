<?php 

include "connPDO.php";


// Attempt select query execution
try{
    $sql = "SELECT * FROM reservations1";   
    $result = $pdo->query($sql);
    
    $amountOFRows = $result->rowCount();
    echo $amountOFRows;

    //Creating the javascript array...
    if($result->rowCount() > 0){
        echo "<script>";
            echo "var userLoggedIn = \""  .$_SESSION["userOrNr"]. "\";";
            echo "var reservations = new Array(" .$amountOFRows. ");";
        $i = 0;

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





   /* if($result->rowCount() > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>Lägenhetsnr</th>";
                echo "<th>Användarnamn</th>";
                echo "<th>Lösenord</th>";
                echo "<th>Bild</th>";
            echo "</tr>";
        while($row = $result->fetch()){
            echo "<tr>";
                echo "<td>" . $row['apartmentnr'] . "</td>";
                echo "<td>" . $row['fullname'] . "</td>";
                echo "<td>JA</td>";
                echo "<td>" . $row['picture'] . "</td>";
            echo "</tr>";
        }
        echo "</table>"; 
        // Free result set
        unset($result);
    } else{
        echo "No records matching your query were found.";
    } */
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

include_once "anvandareInloggad.php";


//echo "<input type="HIDDEN" id="bokadTid"/>";
/*
$bookedTime = $_POST['bookedTimeVar'];
$bookedDate = $_POST['bookedDateVar'];
// Attempt insert query execution
try{
    $sql = "INSERT INTO reservations (lagenhet, tid, datum) VALUES ('1', '$bookedTime', '$bookedDate')";    
    $pdo->exec($sql);
    echo "Records inserted successfully.";
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}*/

// Close connection
unset($pdo);
