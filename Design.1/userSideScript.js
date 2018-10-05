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
	
	$("#showYear").html(year);
	var j = 0;

	//Skriver ut alla datum från idag tills 30 dagar fram åt
	for(var i = idStart; i < 30; i++)
	{
		//Lägger ihop datumet
		fullDate.setFullYear(year, month, (day + j));
		var formateradFullDate = fullDate.toLocaleDateString();
		
		//Lägger in datumen i tabellen
		$("#"+i).text(formateradFullDate);
		j++;
	} 

	//Lägger till datumet du har bokad i bokningsrutan
	//när man väljer ett datum.
	$(".datumTabel").click(function() {
		//Tar fram id:t på det TD elementen som man trycktes på
		var id = $(this).attr('id');

		if($("#"+id).html() != "Ej bokbar")
		{
			$(".datumTabel").css({"background-color": "gray", })
			$("#"+id).css({"background-color": "red"})

			for(var i = 0; i < 36; i++)
			{
				if($("#"+i).html() == "Ej bokbar")
				{	
					$("#"+i).css({"background-color": "red"})
				}
			}	

			//Lägger till datumet du har valt i bokningsrutan
			var datumString = $("#"+id).html();
			$("#bokadDatum").html(datumString);		
		} 

		else 
		{
			alert("Det datumet är ej bokbar.");
		}




	});

	//Lägger till tiden du har bokad i bokningsrutan 
	//när man väljer en tid.
	$("#tidSelect").change(function() {			
		 $("#bokadTid").html($("#tidSelect option:checked").text());
	});


	for(var i = 0; i < 36; i++)
	{
		if($("#"+i).html() == "")
		{
			$("#"+i).html("Ej bokbar");	
			$("#"+i).css({"background-color": "red"})
		}
	}


});