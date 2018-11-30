$(document).ready(function(){

	var usernameSet = false;
	var apartmentnrSet = false;
	var passwordSet = false;


	function selectUser(apartmentnr, username, picture)
	{
		$("#apartmentnr").val(apartmentnr);
		$("#username").val(username);
		$("password").val("true");
		$("#picture").val(picture);
	}

	$(".selectedUser").click(function() {
		alert("The PHP one works!");
	});

	$.get("adminStartup.php", function(data, status) {
		$("#userTable").html(data);	
	});





	$("#apartmentnr").keyup(function() {
		$("#regMessageBox").html("");
		var apartmentnr  = $("#apartmentnr").val();

		var isNotANr = isNaN(apartmentnr);

		if(apartmentnr != "" && isNotANr == false)
		{
				$.post("checksApartmentnr.php", 
				{ apartmentnr: apartmentnr }, 
				function(data, status) {
					$("#regMessageBox").html(data);

					if($("#regMessageBox").html().substring(0, 16) != "Lägenhetsnummret")		
					{
						apartmentnrSet = true;
					}
				});
		}
		else if(apartmentnr != "" && isNotANr == true)
		{
			$("#regMessageBox").html("\"" + apartmentnr + "\" är inte en siffra, man kan bara registrera siffror som lägenhetsnummer!");
		}

	});

	$("#username").keyup(function() {
		if($("#username").val() != "")
		{
			usernameSet = true;
		}
	});

	$("#password").keyup(function() {
		if($("#password").val() != "")
		{
			passwordSet = true;
		}
	});

	$("#registerUser").click(function() {

		if(usernameSet == true && apartmentnrSet == true && passwordSet == true)
		{
			var username = $("#username").val();
			var apartmentnr = $("#apartmentnr").val();
			var password = $("#password").val();

			$.post("insert_user_PDO.php", 
			{ 	username: username,
				apartmentnr: apartmentnr,
				password: password }, 
			function(data, status) {
				$("#test").html(data);

				var rowCount = $("#userTable tr").length;

				if(oldRowCount < rowCount)
				{
					$("#messageBox").html("Användaren har registrerats.");
				}
				else
				{
					$("#messageBox").html("Det uppstod ett fel när användaren skulle registreras, försök igen.");	
				}
			});
		}
	});



	$("#deleteUser").click(function() {
			var apartmentnr = $("#apartmentnr").val();
			var oldRowCount = $("#userTable tr").length;

		if(usernameSet == true && passwordSet == true)
		{
			$.post("deleteUser.php", 
			{ apartmentnr: apartmentnr }, 
			function(data, status) {
				$("#test").html(data);

				var rowCount = $("#userTable tr").length;
				
				if(oldRowCount > rowCount)
				{
					$("#messageBox").html("Användaren har tagits bort.");
				}
				else
				{
					$("#messageBox").html("Det uppstod ett fel när användaren skulle tas bort, försök igen.");	
				}

			});
		}
	});

});