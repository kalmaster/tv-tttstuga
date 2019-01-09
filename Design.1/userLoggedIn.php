<!DOCTYPE html>

<html lang="sv">
	
	<head>
		<title>Boka tid</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" type="text/css" href="stylesheet.css" />
		<link rel="stylesheet" type="text/css" href="userStylesheet.css" />
	</head>
		
		
	<body>
		<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>	
		<script type="text/javascript" src="userSiteScript.js"></script>

		<div class="container">

			<div id="leftBox">

				<div class="boxHeader">
					<p>Välkommen <label name="username">Kilian</label>!</p>
				</div>

				<div class="bodyBox">
					<select id=timeSelect>
						<option>Välj en tid</option>
						<option id="time0">06:00-08:00</option>
						<option id="time1">08:00-10:00</option>
						<option id="time2">10:00-12:00</option>
						<option id="time3">12:00-14:00</option>
						<option id="time4">14:00-16:00</option>
						<option id="time5">16:00-18:00</option>
						<option id="time6">18:00-20:00</option>
						<option id="time7">20:00-22:00</option>
					</select>
					<br><br>

					<label id="dateNTime" >Datum och tid: 
						<label id="bookedDate"></label>
						<label id="bookedTime"></label>
					</label>
					<br><br>

					<div class="messageBox"></div>

					<div class="bottomContainer">
						<button type="submit" id="bookingBTN">Boka</button/>

						<button type="submit" id="cancelBTN">Avboka</button>

						<a class="button" href="index.php">Logga ut</a>
					</div>
				</div>
				

			</div>



			<div id="rightBox">
				<div class="boxHeader">
					<p id="calendarYear"></p>
				</div>

				<label id="showMonth"></label>
				
				<table id="timeTable">
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
						<td class="dateTable" id="1"></td>
						<td class="dateTable" id="2"></td>
						<td class="dateTable" id="3"></td>
						<td class="dateTable" id="4"></td>
						<td class="dateTable" id="5"></td>
						<td class="dateTable" id="6"></td>
						<td class="dateTable" id="7"></td>
					</tr>
					<tr>
						<td class="dateTable" id="8"></td>
						<td class="dateTable" id="9"></td>
						<td class="dateTable" id="10"></td>
						<td class="dateTable" id="11"></td>
						<td class="dateTable" id="12"></td>
						<td class="dateTable" id="13"></td>
						<td class="dateTable" id="14"></td>
					</tr>
					<tr>
						<td class="dateTable" id="15"></td>
						<td class="dateTable" id="16"></td>
						<td class="dateTable" id="17"></td>
						<td class="dateTable" id="18"></td>
						<td class="dateTable" id="19"></td>
						<td class="dateTable" id="20"></td>
						<td class="dateTable" id="21"></td>
					</tr>
					<tr>
						<td class="dateTable" id="22"></td>
						<td class="dateTable" id="23"></td>
						<td class="dateTable" id="24"></td>
						<td class="dateTable" id="25"></td>
						<td class="dateTable" id="26"></td>
						<td class="dateTable" id="27"></td>
						<td class="dateTable" id="28"></td>
					</tr>
					<tr>
						<td class="dateTable" id="29"></td>
						<td class="dateTable" id="30"></td>
						<td class="dateTable" id="31"></td>
						<td class="dateTable" id="32"></td>
						<td class="dateTable" id="33"></td>
						<td class="dateTable" id="34"></td>
						<td class="dateTable" id="35"></td>
					</tr>
				</table>
			</div>
		</div>
	</body>
	
</html>