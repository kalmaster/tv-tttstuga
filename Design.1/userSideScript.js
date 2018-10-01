$(document).ready(function() {

  /*  $("#calendar").datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }); */
  
/*
	var fullDate = new Date();
	var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);

	//Lägger ihop datumet av idag med månaden och året vi har just nu.
	var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
	console.log(currentDate);

 	
    var today = new Date();

    $("#r1k1").html(currentDate);
    alert(currentDate);

        var date=new Date();
    date.setFullYear(2020,1,1);
    var _now=new Date();
    if(date.getTime()>_now.getTime())
        {
      // date is future
      		alert(date);
        }
*/	
	var d = new Date();
    var weekday = new Array(7);

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";


    var weekDayControl = weekday[d.getDay()];
    var idStart = 0;

    for(var i = 0; i < 7; i++)
    {
    	if(weekDayControl == weekday[i])
    		 {
    		 	idStart = i;
    		 }
    }
		var date = new Date();

		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		var fullDate = new Date();  
		
		var j = 0;
		for(var i = idStart; i < 30; i++)
		{
			fullDate.setFullYear(year, month, (day + j));
			var formateradFullDate = fullDate.toISOString();
			//alert(formateradFullDate);
			$("#"+i).text(formateradFullDate);
			j++;
		} 


//Kolla om du kan separera det med hjälp av en string...

 
});