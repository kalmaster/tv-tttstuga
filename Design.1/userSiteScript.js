$(document).ready(function() {

	var isTimeSet = false;
	var isDateSet = false;

	var cancelTimeSet = false;
	var cancelDateSet = false;

	function reservationArray()
	{
		// Gets all the values out of the array and finds out
		// if you have booked a time. The seperates the string in the
		// array and places the values in two labels. 
		var reservationsLength = reservations.length;

		for(var i = 0; i < reservationsLength; i++)
		{
			// Seaching for the user which has booked the time "i".
			var subStringEnd = reservations[i].search("/");
			var whichUser = reservations[i].substring(1, subStringEnd);


			if(whichUser == userLoggedIn)
			{	
				//Searches for the time and the datye in the string from the array.
				var timePosition = reservations[i].search("/t");
				var datePosition = reservations[i].search("/d");

				// Seperates the string so you can use the booked
				// time and date seperatly.
				var time = reservations[i].substring((timePosition + 2), (timePosition + 13));
				var date = reservations[i].substring((datePosition + 2), (datePosition + 12)); 	

				//Inserts the time and the date into a label. 
				$("#bookedDate").html(" " + date);
				$("#bookedTime").html(" / " + time);

				if(date == "0000-00-00" && time == "00:00-00:00")
				{
					cancelTimeSet = false;
					cancelDateSet = false;
				}
				else
				{
					cancelTimeSet = true;
					cancelDateSet = true;
				}
			} 
		}		
	}
 
 	reservationArray();

	var d = new Date();
    var weekday = new Array(7);

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var monthArray = new Array();
    monthArray[0] = "January";
    monthArray[1] = "February";
    monthArray[2] = "March";
    monthArray[3] = "April";
    monthArray[4] = "May";
    monthArray[5] = "June";
    monthArray[6] = "July";
    monthArray[7] = "August";
    monthArray[8] = "September";
    monthArray[9] = "October";
    monthArray[10] = "November";
    monthArray[11] = "December";  

    var d = new Date();
    var n = monthArray[d.getMonth()];

    //WeekDayControl weekday gets set to todays weekday.
    var weekDayControl = weekday[d.getDay()];
    var idStart = 0;

    for(var i = 0; i < 7; i++)
    {
    	//Looks which weekday it is
    	if(weekDayControl == weekday[i])
    		 {

    		 	// idStart is a variable used to start writing todays 
    		 	// date under the right weekday in the calendar on the userpage. 
    		 	idStart = i;
    		 }
    }

	var date = new Date();

	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	var fullDate = new Date();  

    //Insert the year at the top of the calendar.
    $("#calendarYear").html(year);

    //Insert the month into the calendar.
    $("#showMonth").html(n) 

	var j = -5;
 	var dateArray = Array(36);

	//Inserts all the dates from the start of this week and four weeks on.
	for(var i = idStart -5; i < 36; i++)
	{
		//Combinds the differend parts of the date to one string
		fullDate.setFullYear(year, month, (day + j));
		var formateradFullDate = fullDate.toLocaleDateString();

		//Seperates the day from the rest in the date string
		var baraDag = formateradFullDate.substring(8,10);

		//Inserts just the number of the day in the calendar.
		$("#"+i).text(baraDag);
		j++;

		// Inserts all the dates from the start of this week and four
		// weeks on in a array, in the format yyyy-mm-dd
		dateArray[i] = formateradFullDate;
	} 

	//Makes all the dates that the users should not 
	//be able to book not clickable.  
	for(var i = 0; i < 36; i++)
	{
		if(i < idStart || i > (idStart + 30))
		{
			$("#"+i).css({"filter": "blur(3px)"});
		}
	}

	

	var oldId;
	var oldSelectedTime;
	// Makes the date yoo chose show in the dateNTime
	// label in the left-element. 
	$(".dateTable").click(function() {
		$("option").prop("disabled", false);
		var oldSelectedTime = selectedTime;
		isDateSet = true;
		cancelDateSet = true;

		//Gets the id:t of the td-elementen the user clicked.
		var id = $(this).attr('id');

		//Checks if the date is one that you can book.
		if(id >= idStart && id <= (idStart + 30))
		{
			if(oldSelectedTime != selectedTime)
			{
				$(".dateTable").css({"text-decoration": "none", "pointer-events": "auto"});	
			}

			// Inserts the chosen date in to the dateNTime label.
			var datumString = $("#"+id).html();
			$("#bookedDate").html(dateArray[id]);	

			// Changes the background-color of the previusly
			// pressed button and the button which was pressed. 
			$("#"+oldId).css({"background-color": "var(--light-theme-color)"});
			$("#"+id).css({"background-color": "var(--medium-theme-color)"});

			oldId = id;

			var reservationsLength2 = reservations.length;

			for(var i = 0; i < reservationsLength2; i++)
			{

				// Seaching for the user which has booked the time "i".
				var subStringEnd = reservations[i].search("/");
				var whichUser = reservations[i].substring(1, subStringEnd);

				if(whichUser != userLoggedIn)
				{

					//Searches for the time and the datye in the string from the array.
					var timePosition = reservations[i].search("/t");
					var datePosition = reservations[i].search("/d");
					
					// Seperates the string so you can use the booked
					// time and date seperatly.
					var time = reservations[i].substring((timePosition + 2), (timePosition + 13));
					var date = reservations[i].substring((datePosition + 2), (datePosition + 12)); 	
					
					if(dateArray[id] == date)
					{	
						if(time != "00:00-00:00")
						{
							var selectAmount = document.getElementById("#timeSelect").length -1;

							for(var i = 0; i < selectAmount; i++)
							{	
								var timeToChange = $("#time" + i).text();

								if(timeToChange == time)
								{	
									$("#time" + i).prop("disabled", true);
								}
							}
						}	
					}
				}
			}
		}
		//Error message...
		else 
		{
			alert("Det datumet är ej bokbart.");
		}
	});



	var selectedTime;
	// Shows the time that the user has chosen
	// in the dateNTime label.
	$("#timeSelect").change(function() {
		$(".dateTable").css({"text-decoration": "none", "pointer-events": "auto"});

		//Cheks if you have chosen a time. 
		if($("#timeSelect option:checked").text() != "Välj en tid")
		{	
			isTimeSet = true;
			cancelTimeSet = true;

			//Gets the selected time.
			selectedTime = $("#timeSelect option:checked").text();

			//Inserts the selected time into the dateNTime label.
			$("#bookedTime").html("/ " + $("#timeSelect option:checked").text());
			
			var dateArrayLength = dateArray.length;
			var reservationsLength3 = reservations.length;

			for(var i = 0; i < reservationsLength3; i++)
			{
				// Seaching for the user which has booked the time "i".
				var subStringEnd = reservations[i].search("/");
				var whichUser = reservations[i].substring(1, subStringEnd);

				if(whichUser != userLoggedIn)
				{
					//Searches for the time and the datye in the string from the array.
					var timePosition = reservations[i].search("/t");
					var datePosition = reservations[i].search("/d");

					// Seperates the string so you can use the booked
					// time and date seperatly.
					var time = reservations[i].substring((timePosition + 2), (timePosition + 13));
					var date = reservations[i].substring((datePosition + 2), (datePosition + 12)); 
					
					for(var j = 0; j < dateArrayLength; j++)
					{	
						//Makes the date that the chosen time is booked not clickable.
						if (dateArray[j] == date && $("#timeSelect option:checked").text() == time)
						{
							$("#"+j).css({"text-decoration": "line-through", "pointer-events": "none"});
						} 
					}
				
				}
			}
		}
		else
		{	
			isTimeSet = false;
			cancelTimeSet = false;

			$("#bookedTime").html("/ 00:00-00:00");
		}

	});



	$("#bookingBTN").click(function() {

		// Gets the values the user wants to book. 
		var bookedTime = $("#timeSelect option:checked").text();
		var bookedDate = $("#bookedDate").html();	

		// Checks if a new date and time has bin slected and only
		// if so then it calls the php update file.
		if(isDateSet == true && isTimeSet == true)
		{	
			var reservation = "u" + userLoggedIn + "/t" + bookedTime + "/d" + bookedDate;
			
			$.post("reservingTime.php", 
				{ reservation: reservation }, 
				function(data, status) {
					
					//Checks if the reservation was booked.
					if(data == "Records were updated successfully.")
					{
						$(".messageBox").html("Tiden har bokats.");	
						$(".messageBox").css({"color": "black"});

						cancelDateSet = true;
						cancelTimeSet = true;

						//	Sets the varaibles to false so you  
						//  can't spam the reserving button.
						isDateSet = false;
						isTimeSet = false;

						$.get("getReservations.php", function(data) {
							$("#reservationScript").html(data);
							reservationArray();
						});
					}

					//Error message if something went wrong.
					else
					{
						$(".messageBox").html("Något gick fel när tiden skulle bokas!");	
						$(".messageBox").css({"color": "red"});	
					}
				});
		}

		//Error messages...
		else if(isDateSet == false && isTimeSet == true)
		{
			$(".messageBox").html("Du har inte valt datumet som tiden ska bokas!")
			$(".messageBox").css({"color": "red"});
		}
		else if(isDateSet == true && isTimeSet == false)
		{
			$(".messageBox").html("Du har inte valt tiden som ska bokas!");	
			$(".messageBox").css({"color": "red"});
		}
		else
		{
			$(".messageBox").html("Du har inte valt datum och tid som ska bokas!");
			$(".messageBox").css({"color": "red"});
		}
	});




	$("#cancelBTN").click(function() {

		// Gets the values the user wants to reserv. 
		var bookedTime = $("#timeSelect option:checked").text();
		var bookedDate = $("#bookedDate").html();

		// Checks if there is a reservation to cancel/delet and only if
		// there is one it calls the php cancel/delete file. 
		if(cancelDateSet == true && cancelTimeSet == true)
		{	
			$.get("deleteReservation.php", function(data) {

				//Checks if the reservation was deleted.
				if(data == "Records were updated successfully.")
				{
					$(".messageBox").html("Tiden har avbokats.");	
					$(".messageBox").css({"color": "black"});

					// Sets the variables to false so 
					// you can't spam the cancel button.
					cancelDateSet = false;
					cancelTimeSet = false;	
				}

				//Error message if something went wrong.
				else
				{
					$(".messageBox").html("Något gick fel när tiden skulle avbokas!");	
					$(".messageBox").css({"color": "red"});	
				}
			});		
		}
		//Error message...
		else
		{
			$(".messageBox").html("Du har inte bokat en tid som kan avbokas!");
			$(".messageBox").css({"color": "red"});	
		}
	});
});