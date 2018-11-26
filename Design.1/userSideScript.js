$(document).ready(function() {

	function reservationArray()
	{
		// Gets all the values out of the array and finds out
		// if you have booked a time. The seperates the string in the
		// array and places the values in two labels. 
		var reservationsLength = reservations.length;
		//alert(reservationsLength);
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

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";  

    var d = new Date();
    var n = month[d.getMonth()];

    //WeekDayControl week day gets set to todays weekday.
    var weekDayControl = weekday[d.getDay()];
    var idStart = 0;

    for(var i = 0; i < 7; i++)
    {
    	//Looks which weekday it is
    	if(weekDayControl == weekday[i])
    		 {

    		 	// idStart is a variable used to start writting todays 
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




	var oldId;
	//Lägger till datumet du har bokad i bokningsrutan
	//när man väljer ett datum.
	$(".datumTabel").click(function() {
		$("option").prop("disabled", false);

		//Tar fram id:t på det TD elementen som man trycktes på
		var id = $(this).attr('id');

		//Kollar om tatument man valde inte är ett obokbart datum.
		if(id >= idStart && id <= (idStart + 30))
		{
			//Lägger till datumet du har valt i bokningsrutan och en variabel
			var datumString = $("#"+id).html();
			$("#bookedDate").html(dateArray[id]);	
			$("#bokadDatumVar").val(dateArray[id]);

			//Ändrar på den bakgrundfärgen gamla valda  knappen   
			//och bakgrundsfärgeen på den knappen man tryckte på.
			$("#"+oldId).css({"background-color": "var(--light-theme-color)"});
			$("#"+id).css({"background-color": "var(--medium-theme-color)"});

			oldId = id;

			var reservationsLength2 = reservations.length;

			for(var i = 0; i < reservationsLength2; i++)
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
					//		alert("It works 1!");
							var selectAmount = document.getElementById("tidSelect").length -1;
					//		var selectAmount = $("#tidSelect option").length();
					//		alert("The variable is set!");
							for(var i = 0; i < selectAmount; i++)
							{	
							//	alert("It works 2!");
								var timeToChange = $("#time" + i).text();
								alert("."+timeToChange+".");
								alert("booked" + "."+time+".")
								if(timeToChange == time)
								{	
									alert("It works!");
									$("#time" + i).prop("disabled", true);
								}
							}
						}	
				}
			}
		}

		else 
		{
			alert("Det datumet är ej bokbart.");
		}
	});




	//Lägger till tiden du har bokad i bokningsrutan 
	//när man väljer en tid.
	$("#tidSelect").change(function() {
		$(".datumTabel").css({"text-decoration": "none", "pointer-events": "auto"});

		$("#bookedTime").html("/ " + $("#tidSelect option:checked").text());
		$("#bokadTidVar").val($("#tidSelect option:checked").text());

		var dateArrayLength = dateArray.length;
		var reservationsLength3 = reservations.length;

		for(var i = 0; i < reservationsLength3; i++)
		{
			//Searches for the time and the datye in the string from the array.
			var timePosition = reservations[i].search("/t");
			var datePosition = reservations[i].search("/d");
			
			// Seperates the string so you can use the booked
			// time and date seperatly.
			var time = reservations[i].substring((timePosition + 2), (timePosition + 13));
			var date = reservations[i].substring((datePosition + 2), (datePosition + 12)); 
			alert(date);
			for(var i = 0; i < dateArrayLength; i++)
			{
									alert($("#tidSelect option:checked").text());

				if (dateArray[i] == date && $("#tidSelect option:checked").text() == time)
				{
					alert("Im in!");
					$("#"+i).css({"text-decoration": "line-through", "pointer-events": "none"});
				}
			}
		}
		 
	});

	for(var i = 0; i < 36; i++)
	{
		if(i < idStart || i > (idStart + 30))
		{
			$(".datumTabel").css({"background-color": "var(--light-theme-color)"});
			$("#"+i).css({"filter": "blur(3px)"});
		}
	}




	$("#bookingBTN").click(function() {

		var bookedTime = $("#tidSelect option:checked").text();
		var bookedDate = $("#bookedDate").html();
		alert("." + bookedDate + ".");
		alert("." + bookedTime + ".");

		if(bookedDate != " 0000-00-00" && bookedTime != "Välj en tid")
		{			
			var reservation = "u" + userLoggedIn + "/t" + bookedTime + "/d" + bookedDate;
			$.post("reservingTime.php", 
				{ reservation: reservation }, 
				function(data, status) {
					$("#messageBox").html(data);
				})

			reservationArray();
		}

		//Error messages
		else if(bookedDate == " 0000-00-00" && bookedTime != "Välj en tid")
		{
			$("#messageBox").html("Du har inte valt datumet som tiden ska bokas!")
		}
		else if(bookedDate != " 0000-00-00" && bookedTime == "Välj en tid")
		{
			$("#messageBox").html("Du har inte valt tiden som ska bokas!");	
		}
		else
		{
			$("#messageBox").html("Du har inte valt datum och tid som ska bokas!");
		}
	});




	$("#cancelBTN").click(function() {
		var bookedTime = $("#tidSelect option:checked").text();
		var bookedDate = $("#bookedDate").html();

		if(bookedDate != " 0000-00-00" && bookedTime != "Välj en tid")
		{	
			$.get("deleteReservation.php", function(data) {
				$("#messageBox").html(data);
			});	

			reservationArray();		
		}
		else
		{
			$("#messageBox").html("Du har inte bokat en tid som kan avbokas!");
		}
		
	});

});