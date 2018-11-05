index.php

<?php
// Start the session
session_start();
?>

<!DOCTYPE html>

<html lang="sv">
	
	<head>
		<title>Logga in</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" type="text/css" href="loginStylesheet.css" />
		<link rel="stylesheet" type="text/css" href="stylesheet.css" />
	</head>
		
	<body>
		<div class="contaner" id="loggin">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
			<script type="text/javascript" src="loginSideScript.js"></script>
			
			<h1 id="loginH3">Logga in som Användare</h1>
			<div class="formular">
				<form action="login2.php" method="POST" name="login">
					<input type="HIDDEN" name="loginAs" id="logeinAs">

					<select id="userSelect">
						<option value="user" >Användare</option>
						<option value="admin" onclick="changeUser()">Administratör</option>
					</select>		

					<div id="loginFalt">
						<label id="usernameLabel">Lägenhetsnummer:</label><br>
						<input type="text" name="userOrNr" onfocusout="validerar()" id="userOrNrBox"><br>
					
						Lösenord: <br>
						<input type="password" name="password" onfocusout="validerar()" id="passwordBox"><br>			
					</div><br>
					<input type="submit" name="submit" value="Logga in" id="submitButton">
				</form>
			</div>
		</div>

	</body>
	
	
</html>