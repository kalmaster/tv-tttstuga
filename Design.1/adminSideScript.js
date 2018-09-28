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
		var date = new Date();

		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		alert(day);
		alert(month);
		alert(year);
		var fullDate = new Date();  
 
		
		for(var i = 0; i < 21; i++)
		{
			fullDate.setFullYear(year, month, (day + i));
			$("#"+i).text(fullDate);
		} 

//Kolla om du kan separera det med hjälp av en string...

 
});