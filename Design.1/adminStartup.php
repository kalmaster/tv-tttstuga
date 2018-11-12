 <?php

//Ansluter till databasen
include_once "connPDO.php";

// Attempt select query execution
try{
    $sql = "SELECT * FROM users";   
    $result = $pdo->query($sql);
    if($result->rowCount() > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>apartmentnr</th>";
                echo "<th>fullname</th>";
                echo "<th>password</th>";
                echo "<th>picture</th>";
            echo "</tr>";
        while($row = $result->fetch()){
            echo "<tr>";
                echo "<td>" . $row['apartmentnr'] . "</td>";
                echo "<td>" . $row['fullname'] . "</td>";
                echo "<td>" . $row['password'] . "</td>";
                echo "<td>" . $row['picture'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        // Free result set
        unset($result);
    } else{
        echo "No records matching your query were found.";
    }
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

include_once "adminInloggad.php";

unset($pdo);