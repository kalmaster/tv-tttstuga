$(document).ready(function() {
	
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

    //WeekDayControl får värdet av dagens veckodag.
    var weekDayControl = weekday[d.getDay()];
    var idStart = 0;

    for(var i = 0; i < 7; i++)
    {
    	//Kollar vilken veckodag vi har
    	if(weekDayControl == weekday[i])
    		 {
    		 	//idStart gör så att den börjar skriva ut
    		 	//datumen under rätt veckodag.
    		 	idStart = i;
    		 }
    }

	var date = new Date();

	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	var fullDate = new Date();  

    //Sätter ihop texten som sitter över kalendern.
    var monthNYear = n + " " + year;
    $("#showMonthNYear").html(monthNYear) 

	var j = -5;
 	var dateArray = Array(36);
	//Skriver ut alla datum från idag tills 30 dagar fram åt
	for(var i = idStart -5; i < 36; i++)
	{
		//Lägger ihop datumet
		fullDate.setFullYear(year, month, (day + j));
		var formateradFullDate = fullDate.toLocaleDateString();
		var baraDag = formateradFullDate.substring(8,10);
		//Lägger in datumen i tabellen
		$("#"+i).text(baraDag);
		j++;

		//En array som inehåller alla datum i fårmatet åååå-mm-dd
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
			$("#bokadDatum").html(dateArray[id]);	
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
		 $("#bokadTid").html($("#tidSelect option:checked").text());
		 $("#bokadTidVar").val($("#tidSelect option:checked").text());
	});

	for(var i = 0; i < 36; i++)
	{
		if(i < idStart || i > (idStart + 30))
		{
			$(".datumTabel").css({"background-color": "var(--light-theme-color)"})
			$("#"+i).css({"filter": "blur(3px)"})
		}
	}

});