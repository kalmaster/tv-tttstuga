$(document).ready(function(){

	var usernameSet = false;
	var apartmentnrSet = false;
	var passwordSet = false;
	var imageSet = false;


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
		$("#apartmentnrSpan").html("");
		var apartmentnr  = $("#apartmentnr").val();

		var isNotANr = isNaN(apartmentnr);
		if(apartmentnr != "" && isNotANr == false)
		{
				$.post("checksApartmentnr.php", 
				{ apartmentnr: apartmentnr }, 
				function(data, status) {
					$("#apartmentnrSpan").html(data);
					if($("#apartmentnrSpan").html() == "")
					{
						apartmentnrSet = true;
						$("#apartmentnr").css({"background-color": "var(--green-theme-color)"});
						$("#apartmentnrSpan").html("");
					}
					else
					{	
						apartmentnrSet = false;
						$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
					}
				});
		}
		else if(apartmentnr != "" && isNotANr == true)
		{
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
			$("#apartmentnrSpan").html("\"" + apartmentnr + "\" är inte en siffra, man kan bara registrera siffror som lägenhetsnummer!");
		}
		
		if(apartmentnr == "")
		{
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
			$("#apartmentnrSpan").html("");
		}

	});


	function checkIfSet(whichField)
	{
		if($("#" + whichField).val() != "")
		{
			$("#" + whichField).css({"background-color": "var(--green-theme-color)"});
			$("#" + whichField + "Span").html("");

		}
		else
		{
			$("#" + whichField).css({"background-color": "var(--gray-red-theme-color)"});
		}
	}

	$("#username").keyup(function() {
		if($("#username").val() != "")
		{
			usernameSet = true;
			$("#username").css({"background-color": "var(--green-theme-color)"});
			$("#usernameSpan").html("");

		}
		else
		{
			$("#username").css({"background-color": "var(--gray-red-theme-color)"});
			usernameSet = false;
		}
	});

	$("#username").focusout(function() {
		if($("#username").val() != "")
		{
			usernameSet = true;
			$("#username").css({"background-color": "var(--green-theme-color)"});
			$("#usernameSpan").html("");

		}
		else
		{
			$("#username").css({"background-color": "var(--gray-red-theme-color)"});
			usernameSet = false;
		}
	});

	$("#password").keyup(function() {
		if($("#password").val() != "")
		{	
			passwordSet = true;
			$("#password").css({"background-color": "var(--green-theme-color)"});
			$("#passwordSpan").html("");

		}
		else
		{
			$("#password").css({"background-color": "var(--gray-red-theme-color)"});
			usernameSet = false;
		}
	});

	$("#password").focusout(function() {
		if($("#password").val() != "")
		{	
			passwordSet = true;
			$("#password").css({"background-color": "var(--green-theme-color)"});
			$("#passwordSpan").html("");

		}
		else
		{
			$("#password").css({"background-color": "var(--gray-red-theme-color)"});
			usernameSet = false;
		}
	});

	var oldRowCount;
	$("#registerUser").click(function() {

		if (document.getElementById("image").files.length == 0)
		{
			imageSet = false;
		}

		if(document.getElementById("image").files.length != 0)
		{
			imageSet = true;
		}


		if(usernameSet == true && apartmentnrSet == true && passwordSet == true && imageSet == true)
		{	
			oldRowCount = $("#userTable tr").length;
			
			var username = $("#username").val();
			var apartmentnr = $("#apartmentnr").val();
			var password = $("#password").val();
			var file_data = $("#image").prop("files")[0];

			var form_data = new FormData();                  
			form_data.append("file", file_data);
			form_data.append("username", username);	
			form_data.append("apartmentnr", apartmentnr);
			form_data.append("password", password);

			alert(form_data);                             
			$.ajax({
			    url: "upload.php", // point to server-side PHP script 
			    dataType: "text",  // what to expect back from the PHP script, if anything
			    cache: false,
			    contentType: false,
			    processData: false,
			    data: form_data,                         
			    type: "post",
			    success: function(php_script_response){
			        $("#userTable").html(php_script_response); // display response from the PHP script, if any

			        var rowCount = $("#userTable tr").length;

			        if(oldRowCount < rowCount)
			        {
			        	$("#messageBox").html("Användaren har registrerats.");

			        	$("#apartmentnr").val("");
			        	$("#username").val("");
			        	$("#password").val("");

			        	$("#username").css({"background-color": "white"});
			        	$("#apartmentnr").css({"background-color": "white"});
			        	$("#password").css({"background-color": "white"});

			        	usernameSet = false;
			        	apartmentnrSet = false;
			        	passwordSet = false;
			        }
			        else 
			        {
			        	$("#messageBox").html("Det uppstod ett fel när användaren skulle registreras, försök igen.");	
			        } 
			    }
			/*
			var username = $("#username").val();
			var apartmentnr = $("#apartmentnr").val();
			var password = $("#password").val();

			oldRowCount = $("#userTable tr").length;

			$.post("insert_user_PDO.php", 
			{ 	username: username,
				apartmentnr: apartmentnr,
				password: password }, 
			function(data, status) {
				$("#userTable").html(data); */
			});
		}	
		else if(usernameSet == false && apartmentnrSet == true && passwordSet == true && imageSet == true)
		{
			$("#usernameSpan").html(" Detta fält måste vara ifyltt!");
			$("#username").css({"background-color": "var(--gray-red-theme-color)"});
		}

		else if(usernameSet == true && apartmentnrSet == false && passwordSet == true && imageSet == true)
		{
			$("#apartmentnrSpan").html(" Detta fält måste vara ifyltt!");
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
		}

		else if(usernameSet == true && apartmentnrSet == true && passwordSet == false && imageSet == true)
		{
			$("#passwordSpan").html(" Detta fält måste vara ifyltt!");
			$("#password").css({"background-color": "var(--gray-red-theme-color)"});
		}

		else if(usernameSet == true && apartmentnrSet == true && passwordSet == true && imageSet == false)
		{
			$("#messageBox").html("Du måste ha valt en bild som ska laddas upp!");
		}

		else
		{
			$("#usernameSpan").html(" Detta fält måste vara ifyltt!");
			$("#apartmentnrSpan").html(" Detta fält måste vara ifyltt!");
			$("#passwordSpan").html(" Detta fält måste vara ifyltt!");
			$("#messageBox").html("Du måste ha valt en bild som ska laddas upp!");

			$("#username").css({"background-color": "var(--gray-red-theme-color)"});
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
			$("#password").css({"background-color": "var(--gray-red-theme-color)"});
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
				$("#userTable").html(data);

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