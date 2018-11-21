<!DOCTYPE html>
<html lang="sv">
	<head>
		<title>Administration</title>
		<meta charset="utf-8"/>
	</head>

	<body>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

		<div class="container">
				<div id="leftBox">
						<div class="boxHeader">
							<p>Nya Lägenhets Innehavare</p>
						</div>

						<div class="bodyBox">
							

							<form action="insert_user_PDO.php" method="POST">
										
								<label id="Ny ägare">Namn:</label> <br> 

								<input type="text" name="username" onfocusout="validerar()" id="nyägare"> <br>

								<label id="usernameLabel">Lägenhetsnummer:</label><br> 
								<input type="text" name="lagenhetsnr" " onfocusout="validerar()" id="nylägenhet"><br>
								
								Lösenord:<br> 
								  
								<input type="password" name="password" maxlength="30"><br><br>
								
								<input type="file" id ="bild" name="picture">
								<br><br>

								<button type="submit" id="Regestrera">Registrera</button>

							</form>
							<br>
							<a href="index.php" class="button" onclick="destroy()">Logga ut</a>

						</div>

				</div>

				<div id="rightBox">
					<div class="boxHeader">
						<p>Registrerade användare</p>	
					</div>
					<div id="test"></div>
				</div>
			</div>
			


		<!--<input type="text" name="Nytt lösenord " onfocusout="validerar()" id="nyttlösenord"><br>
		<label id="usernameLabel">Nytt Lösenord:</label><br> 
		-->
		<script type="text/javascript" src="adminSideScript.js"></script>
		<link rel="stylesheet" type="text/css" href="stylesheet.css"/>
		<link rel="stylesheet" type="text/css" href="adminInStylesheet.css"/>
	<!--	<script type="text/javascript" src="javascript.js"></script> -->
	</body>
	
</html>