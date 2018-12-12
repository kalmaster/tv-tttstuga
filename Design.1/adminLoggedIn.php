<!DOCTYPE html>
<html lang="sv">
	<head>
		<title>Administration</title>
		<meta charset="utf-8"/>
	</head>

	<body>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

			<script type="text/javascript" src="adminSideScript.js"></script>

		<div class="container">
				<div id="leftBox">
						<div class="boxHeader">
							<p>Nya Lägenhets Innehavare</p>
						</div>

						<div class="bodyBox">
							

							<!--							<form action="insert_user_PDO.php" method="POST">
								-->		
								<label id="Ny ägare">Namn:</label> <br> 

								<input type="text" name="username" id="username"><span id="usernameSpan"></span><br>

								<label id="usernameLabel">Lägenhetsnummer:</label><br> 
								<input type="text" name="lagenhetsnr" id="apartmentnr">
								<span id="apartmentnrSpan"></span><br>
								
								Lösenord:<br> 
								  
								<input type="password" name="password" maxlength="30" id="password"><span id="passwordSpan"></span><br><br> 
								
								<input type="file" id="image" name="picture">
								<br><br>

								<div id="messageBox"></div> 
								<button type="submit" id="registerUser">Registrera</button>

								<button id="deleteUser">Ta bort</button>

					<!--		</form> -->
							<a href="index.php" class="button" onclick="destroy()">Logga ut</a>

						</div>

				</div>

				<div id="rightBox">
					<div class="boxHeader">
						<p>Registrerade användare</p>	
					</div>

					<table id="userTable">

					</table>

<!--
					<table>
						<tr class="userSelected">
							<td>1</td>
							<td>2</td>
							<td>3</td>
						</tr>

						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
						</tr>

						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
						</tr>
					</table>
	-->				
					<div id="test">
						<img id="testImg">
					</div>
				</div>
			</div>
			


		<!--<input type="text" name="Nytt lösenord " onfocusout="validerar()" id="nyttlösenord"><br>
		<label id="usernameLabel">Nytt Lösenord:</label><br> 
		-->
		<link rel="stylesheet" type="text/css" href="stylesheet.css"/>
		<link rel="stylesheet" type="text/css" href="adminInStylesheet.css"/>
	<!--	<script type="text/javascript" src="javascript.js"></script> -->
	</body>
	
</html>