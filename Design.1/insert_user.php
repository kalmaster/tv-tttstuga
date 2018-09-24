<?php

//Lägger till conn.php filen så att du kommer åt convariblen
include_once "conn.php";

//Kollar om den ska registrera user.
if (!isset($_GET['register-user'])) {

	$username = $_POST['username'];
	$password = $_POST['password'];

	
}