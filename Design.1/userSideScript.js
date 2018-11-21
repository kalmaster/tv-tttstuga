$(document).ready(function() {


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
			var timePosition = reservations[i].search("t");
			var datePosition = reservations[i].search("d");

			// Seperates the string so you can use the booked
			// time and date seperatly. 
			var time = reservations[i].substring((timePosition + 1), (timePosition + 12));
			var date = reservations[i].substring((datePosition + 1), (datePosition + 11)); 	

			//Inserts the time and the date into a label. 
			$("#bookedDate").html(" " + date);
			$("#bookedTime").html(" / " + time);	
		} 
		//alert("Im in the loop!");
	} 


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
		}

		else 
		{
			alert("Det datumet är ej bokbart.");
		}
	});



	//Lägger till tiden du har bokad i bokningsrutan 
	//när man väljer en tid.
	$("#tidSelect").change(function() {			
		 $("#bookedTime").html($("#tidSelect option:checked").text());
		 $("#bokadTidVar").val($("#tidSelect option:checked").text());
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
		var bookedTime = $("#bookedTime").html();
		var bookedDate = $("#bookedDate").html();
		
		var reservation = "u" + userLoggedIn + "/t" + bookedTime + "/d" + bookedDate;

		$.post("reservingTime.php", 
			{ reservation: reservation }, 
			function(data, status) {
				$("#messageBox").html(data);
			}); 
	});


	$("#cancelBTN").click(function() {
		$.get("deleteReservation.php", function(data) {
			$("#messageBox").html(data);
		})		
	});

});