<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "tvattstugan";

$conn = mysqli_connect($servername, $username, $password, $database);

// Kollar om man är ansluten till databasen.
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
	echo "Connected successfully";
}
