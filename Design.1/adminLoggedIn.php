<!DOCTYPE html>
<html lang="sv">
	<head>
		<title>Administration</title>
		<meta charset="utf-8"/>

		<link rel="stylesheet" type="text/css" href="stylesheet.css"/>
		<link rel="stylesheet" type="text/css" href="adminStylesheet.css"/>

	</head>

	<body>
		<div id="reservationsHolder"></div>
			
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

			<script type="text/javascript" src="adminSiteScript.js"></script>

		<div class="container">
				<div id="leftBox">
						<div class="boxHeader">
							<p>Nya Lägenhets Innehavare</p>
						</div>

						<div class="bodyBox">
								<label id="Ny ägare">Namn:</label> <br> 

								<input type="text" name="username" id="username"><span id="usernameSpan"></span><br>

								<label id="usernameLabel">Lägenhetsnummer:</label><br> 
								<input type="text" name="lagenhetsnr" id="apartmentnr" maxlength="3">
								<span id="apartmentnrSpan"></span><br>
								
								Lösenord:<br> 
								  
								<input type="password" name="password" maxlength="30" id="password"><span id="passwordSpan"></span><br><br> 
								
								<input type="file" id="image" name="picture">
								<br><br>

								<div id="messageBox"></div> 
								<button type="submit" id="registerUser">Registrera</button>

							<a href="index.php" class="button" onclick="destroy()">Logga ut</a>

						</div>

				</div>

				<div id="rightBox">
					<div class="boxHeader">
						<p>Registrerade användare</p>	
					</div>
					<div id=holdingUsers>
					<table id="userTable">

					</table>
					</div>



					<div id="deleteContainer">
						
					<input type="text" maxlength="3" placeholder="Lägenhetsnummer" id="apartmentnrDelete"/>

					<button id="deleteUser">Ta bort</button><span id="deleteMessage"></span>

					</div>


				</div>
			</div>
	</body>
	
</html>