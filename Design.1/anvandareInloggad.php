<?php
session_start();
?>

<!DOCTYPE html>

<html lang="sv">
	
	<head>
		<title>Boka tid</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" type="text/css" href="stylesheet.css" />
		<link rel="stylesheet" type="text/css" href="userInStylesheet.css" />
	</head>
		
		
	<body>
		<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
		<script src="js/jquery-ui-datepicker.min.js"></script>
		<script type="text/javascript" src="userSideScript.js"></script>

		<div class="container">

				<div id="leftBox">
					<div class="boxHeader">
						<p>Välkommen <label name="username">Kilian</label>!</p>
					</div>

					<form action="laddaUppTid.php" method="POST">
						<input id="lagenhetsnr" name="lagenhetsnr" type="HIDDEN"/>
						<input id="bokadDatumVar" name="bookedDateVar" type="HIDDEN"/>
						<input id="bokadTidVar" name="bookedTimeVar" type="HIDDEN"/>
						<input name="username" type="HIDDEN"/>
						


						<select id=tidSelect>
							<option>06:00-08:00</option>
							<option>08:00-10:00</option>
							<option>10:00-12:00</option>
							<option>12:00-14:00</option>
							<option>14:00-16:00</option>
							<option>16:00-18:00</option>
							<option>18:00-20:00</option>
							<option>20:00-22:00</option>
						</select>
						<br><br>

						<label>Datum: <label id="bokadDatum"></label></label>
						<br>
						<label>Tid: <label id="bokadTid"></label></label>
						<br><br>

						<button type="submit" id="bokaKnapp">Boka</button>

						<button type="submit" formaction="deleteReservation.php" id="avbokaKnapp">Avboka</button>

						<a class="button" href="index.php">Logga ut</a>

					</form>
				</div>



				<div id="rightBox">
					<div class="boxHeader">
						<p>2018</p>
					</div>

						<label id="showMonthNYear"></label>

						<table id="timeTable";>
							<tr id="weekDays">
								<th>Mån</th>
								<th>Tis</th> 
								<th>Ons</th>
								<th>Tor</th>
								<th>Fre</th>
								<th>Lör</th>
								<th>Sön</th>
							</tr>
							<tr>
								<td class="datumTabel" id="1"></td>
								<td class="datumTabel" id="2"></td>
								<td class="datumTabel" id="3"></td>
								<td class="datumTabel" id="4"></td>
								<td class="datumTabel" id="5"></td>
								<td class="datumTabel" id="6"></td>
								<td class="datumTabel" id="7"></td>
							</tr>
							<tr>
								<td class="datumTabel" id="8"></td>
								<td class="datumTabel" id="9"></td>
								<td class="datumTabel" id="10"></td>
								<td class="datumTabel" id="11"></td>
								<td class="datumTabel" id="12"></td>
								<td class="datumTabel" id="13"></td>
								<td class="datumTabel" id="14"></td>
							</tr>
							<tr>
								<td class="datumTabel" id="15"></td>
								<td class="datumTabel" id="16"></td>
								<td class="datumTabel" id="17"></td>
								<td class="datumTabel" id="18"></td>
								<td class="datumTabel" id="19"></td>
								<td class="datumTabel" id="20"></td>
								<td class="datumTabel" id="21"></td>
							</tr>
							<tr>
								<td class="datumTabel" id="22"></td>
								<td class="datumTabel" id="23"></td>
								<td class="datumTabel" id="24"></td>
								<td class="datumTabel" id="25"></td>
								<td class="datumTabel" id="26"></td>
								<td class="datumTabel" id="27"></td>
								<td class="datumTabel" id="28"></td>
							</tr>
							<tr>
								<td class="datumTabel" id="29"></td>
								<td class="datumTabel" id="30"></td>
								<td class="datumTabel" id="31"></td>
								<td class="datumTabel" id="32"></td>
								<td class="datumTabel" id="33"></td>
								<td class="datumTabel" id="34"></td>
								<td class="datumTabel" id="35"></td>
							</tr>
						</table>
				</div>
			
		</div>
	</body>
	
</html>