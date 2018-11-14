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
		<link rel="stylesheet" type="text/css" href="stylesheet.css"/>
	</head>
		
	<body>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
			
			<script type="text/javascript" src="loginSideScript.js"></script>

		<div class="container">
			<div class="mainBox">
				<div class="boxHeader">
					<p id="loginH3">Logga in som Användare</p>
				</div>

				<div class="bodyBox">
					<div class="formBox">
						<form action="login.php" method="POST" name="login" id="loginForm">
							<input type="HIDDEN" name="loginAs" id="loginAs" value="user">

							<select id="userSelect" class="select_box">
								<option value="user" >Användare</option>
								<option value="admin" onclick="changeUser()">Administratör</option>
							</select>	

							<div id="loginFalt">
								<label id="usernameLabel">Lägenhetsnummer:</label><br>
								<input type="text" name="userOrNr" id="userOrNr"/><br>
							
								Lösenord: <br>
								<input type="password" name="password" id="password"/><br>			
							</div><br>

							<button type="submit" name="submit" id="submitButton">Logga In</button>
							<div id="errorMSG"></div>
						</form> 
					</div>
				</div>
			</div>
		</div>
	</body>
	
	
</html>