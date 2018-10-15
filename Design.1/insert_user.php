<?php

//Lägger till conn.php filen så att du kommer åt convariblen
include_once "conn.php";

//Kollar om den ska registrera user.
if (!isset($_GET['register-user'])) {

	$username = $_POST['username'];
	$password = $_POST['password'];
	$lagenhetsnr = $_POST['lagenhetsnr']; 
	//$picture = $_FILE['picture'];

	$sql = "INSERT INTO users (apartmentnr, fullname, password)
	VALUES ($lagenhetsnr, $username, $password)";

	if ($conn->query($sql) === TRUE) {
        echo "New record created successfully!";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
} else {
	echo "In the else";
}