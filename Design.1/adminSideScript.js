$(document).ready(function() {

alert("Hi");
/*var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);

alert("Hey");
//Lägger ihop datumet av idag med månaden och året vi har just nu.
var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
console.log(currentDate); */

 
    var today = new Date();
    var weekno = today.getWeek();

alert(weekno);
});