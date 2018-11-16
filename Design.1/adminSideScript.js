$(document).ready(function(){

	$.get("adminStartup.php", function(data, status) {
		$("#test").html(data);	
	});

});