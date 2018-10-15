<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
try{
    $pdo = new PDO("mysql:host=localhost;dbname=tvattstugan", "root", "");
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}
 
// Attempt select query execution
   $name = $_REQUEST['username'];
//  $name = $_POST['first_name'];

$password = 'admin';

 
try{
    $sql = "SELECT * FROM admin WHERE username ='".$name."'";  
    $result = $pdo->query($sql);
    if($result->rowCount() > 0){
            echo "<table>";
            echo "<tr>";
            echo "<th>username</th>";
            echo "<th>password</th>";
            echo "</tr>";
        while($row = $result->fetch()){
            echo "<tr>";
            echo "<td>" . $row['username'] . "</td>";
            echo "<td>" . $row['password'] . "</td>";
            echo "</tr>";
			$hash=$row['password'];
			
			echo password_verify($password,$hash);
			
			
			if (password_verify($password, $hash)) {
                echo 'Password is valid!';
            } else {
              echo 'Invalid password.';
            }			
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
 
// Close connection
unset($pdo);
?>