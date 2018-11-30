 <?php

//Ansluter till databasen
include_once "connPDO.php";

// Attempt select query execution
try{
    $sql = "SELECT * FROM users";   
    $result = $pdo->query($sql);
    
    if($result->rowCount() > 0){
            echo "<tr class=\"selectedUser\">";
                echo "<th>Lägenhetsnr</th>";
                echo "<th>Användarnamn</th>";
                echo "<th>Lösenord</th>";
                echo "<th>Bild</th>";          
            echo "</tr>";            
        while($row = $result->fetch()){
            echo "<tr class=\"selectedUser\">";
                echo "<td>" . $row['apartmentnr'] . "</td>";
                echo "<td>" . $row['fullname'] . "</td>";
                echo "<td>JA</td>";
                echo "<td>" . $row['picture'] . "</td>";
            echo "</tr>";
        }
        // Free result set
        unset($result);
    } else{
        echo "No records matching your query were found.";
    }
} catch(PDOException $e){
    die("ERROR: Could not able to execute $sql. " . $e->getMessage());
}

unset($pdo);