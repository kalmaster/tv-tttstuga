 <?php

include_once "conn.php";

// Attempt select query execution
try{
    $sql = "SELECT * FROM users";   
    $result = $pdo->query($sql);
    
    if($result->rowCount() > 0){ ?>
            <tr class="selectedUser">
                <th>Lägenhetsnr</th>
                <th>Användarnamn</th>
                <th>Lösenord</th>
                <th>Bild</th>          
            </tr>

        <?php while($row = $result->fetch()){ ?>
            <tr class="selectedUser">";
                <td><?php echo $row["apartmentnr"]; ?></td>
                <td><?php echo $row["fullname"]; ?></td>
                <td>JA</td>
                <td><img src="<?php echo $row["picture"]; ?>"></td>
            </tr>";
        <?php 
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