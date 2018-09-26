$(document).ready(function() {

  /*  $("#calendar").datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }); */
  

	var fullDate = new Date();
	var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);

	//Lägger ihop datumet av idag med månaden och året vi har just nu.
	var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
	console.log(currentDate);

 	
    var today = new Date();

    $("#r1k1").html(currentDate);
    alert(currentDate);
});