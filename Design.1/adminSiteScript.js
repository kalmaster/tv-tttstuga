$(document).ready(function(){

	//Gloabal variables
	var usernameSet = false;
	var apartmentnrSet = false;
	var passwordSet = false;
	var imageSet = false;

	//Loads in the table with users.
	$.get("adminStartup.php", function(data, status) {
		$("#userTable").html(data);	
	});

	
	$("#apartmentnr").focusout(function() {
		$("#apartmentnrSpan").html("");
		var apartmentnr  = $("#apartmentnr").val();

		var isNotANr = isNaN(apartmentnr);
		
		//Checks if the thing you wrote in the field is a number and if the field isn't empty. 
		if(apartmentnr != "" && isNotANr == false)
		{	
				//Cheks if the apartmentnr already exists. 
				$.post("checksApartmentnr.php", 
				{ apartmentnr: apartmentnr }, 
				function(data, status) {
					$("#apartmentnrSpan").html(data);

					//If the apartmentnr dosn't exist the background color of the
					// apartmentnr field is sets to green. 
					if($("#apartmentnrSpan").html() == "")
					{
						apartmentnrSet = true;
						$("#apartmentnr").css({"background-color": "var(--green-theme-color)"});
						$("#apartmentnrSpan").html("");
					}

					//If the apartmentnr does exist the background color of the
					// apartmentnr field is set to red. 
					else
					{	
						apartmentnrSet = false;
						$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
						$("#apartmentnrSpan").css({"color": "red"});
					}
				});
		}
		//Error messages that occurs if the admin didn't write a number.  
		if(apartmentnr != "" && isNotANr == true)
		{
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
			$("#apartmentnrSpan").html("\"" + apartmentnr + "\" är inte en siffra, man kan bara registrera siffror som lägenhetsnummer!");
			$("#apartmentnrSpan").css({"color": "red"});
		}
		
		//Makes the apartmentnr field red if its empty.
		if(apartmentnr == "")
		{
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
			$("#apartmentnrSpan").html("");
		}
	});

		$("#apartmentnr").keyup(function() {
		$("#apartmentnrSpan").html("");
		var apartmentnr  = $("#apartmentnr").val();

		var isNotANr = isNaN(apartmentnr);
		
		//Checks if the thing you wrote in the field is a number and if the field isn't empty. 
		if(apartmentnr != "" && isNotANr == false)
		{	
				//Cheks if the apartmentnr already exists. 
				$.post("checksApartmentnr.php", 
				{ apartmentnr: apartmentnr }, 
				function(data, status) {
					$("#apartmentnrSpan").html(data);

					//If the apartmentnr dosn't exist the background color of the
					// apartmentnr field is sets to green. 
					if($("#apartmentnrSpan").html() == "")
					{
						apartmentnrSet = true;
						$("#apartmentnr").css({"background-color": "var(--green-theme-color)"});
						$("#apartmentnrSpan").html("");
					}

					//If the apartmentnr does exist the background color of the
					// apartmentnr field is set to red. 
					else
					{	
						apartmentnrSet = false;
						$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
						$("#apartmentnrSpan").css({"color": "red"});
					}
				});
		}
		//Error messages that occurs if the admin didn't write a number.  
		if(apartmentnr != "" && isNotANr == true)
		{
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
			$("#apartmentnrSpan").html("\"" + apartmentnr + "\" är inte en siffra, man kan bara registrera siffror som lägenhetsnummer!");
			$("#apartmentnrSpan").css({"color": "red"});
		}
		
		//Makes the apartmentnr field red if its empty.
		if(apartmentnr == "")
		{
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
			$("#apartmentnrSpan").html("");
		}
	});

	// Cheks if the usernamefield is empty.
	// If it's not empty the background color gets set to green.
	// If it's empty the background color gets set to red.
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

	// Cheks if the usernamefield is empty.
	// If it's not empty the background color gets set to green.
	// If it's empty the background color gets set to red.
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

	// Cheks if the passwordfield is empty.
	// If it's not empty the background color gets set to green.
	// If it's empty the background color gets set to red.
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

	// Cheks if the passwordfield is empty.
	// If it's not empty the background color gets set to green.
	// If it's empty the background color gets set to red.
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

		//Cheks if the admin has not selected an image.
		if (document.getElementById("image").files.length == 0)
		{
			imageSet = false;
		}

		//Cheks if the admin has selected an image.
		if(document.getElementById("image").files.length != 0)
		{
			imageSet = true;
		}

				//Error message for the usernamefield.
		if(usernameSet == false)
		{
			$("#usernameSpan").html(" Detta fält måste vara ifyltt!");
			$("#username").css({"background-color": "var(--gray-red-theme-color)"});
			$("#usernameSpan").css({"color": "red"});
		}

		//Error message for the apartmentnrfield.
		if(apartmentnrSet == false)
		{
			$("#apartmentnrSpan").html(" Detta fält måste vara ifyltt!");
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
			$("#apartmentnrSpan").css({"color": "red"});
		}

		//Error message for the passwordfield.
		if(passwordSet == false)
		{
			$("#passwordSpan").html(" Detta fält måste vara ifyltt!");
			$("#password").css({"background-color": "var(--gray-red-theme-color)"});
			$("#passwordSpan").css({"color": "red"});
		}

		//Error message for image fileselect.
		if(imageSet == false)
		{
			$("#messageBox").html("Du måste ha valt en bild som ska laddas upp!");
			$("#messageBox").css({"color": "red"});
		}

		//Cheks if the usernamefield, the apartmentnrfield and  
		//the passwordfiled isn't empty and a image is selected.
		if(usernameSet == true && apartmentnrSet == true && passwordSet == true && imageSet == true)
		{	
			oldRowCount = $("#userTable tr").length;
			
			//All values get collected. 			
			var username = $("#username").val();
			var apartmentnr = $("#apartmentnr").val();
			var password = $("#password").val();
			var file_data = $("#image").prop("files")[0];

			//Inserts all the values into a form. 
			var form_data = new FormData();                  
			form_data.append("file", file_data);
			form_data.append("username", username);	
			form_data.append("apartmentnr", apartmentnr);
			form_data.append("password", password);

			//Makes a ajax call for the file "insertUser.php" and inserts the user.         
			$.ajax({
			    url: "insertUser.php",  
			    dataType: "text",  
			    cache: false,
			    contentType: false,
			    processData: false,
			    data: form_data,                         
			    type: "post",
			    success: function(php_script_response){			 			        

			        //Cheks if the user was insertert succesfuly.
			        if(php_script_response == "UserRegTrue")
			        {
			        	$.get("adminStartup.php", function(data, status) {
			        		$("#userTable").html(data); 
			        	});

			        	$("#messageBox").html("Användaren har registrerats.");

			        	$("#apartmentnr").val("");
			        	$("#username").val("");
			        	$("#password").val("");
			        	$("#image").val("");

			        	$("#username").css({"background-color": "white"});
			        	$("#apartmentnr").css({"background-color": "white"});
			        	$("#password").css({"background-color": "white"});

			        	usernameSet = false;
			        	apartmentnrSet = false;
			        	passwordSet = false;
			        	imageSet = false;
			        }

			        else if(php_script_response == "fileNotImg")
			        {
			        	$("#messageBox").html("Filen du har valt är inte en bildfil!");	
			        	$("#messageBox").css({"color": "red"});
			        }

			        else if(php_script_response == "fileToLarge")
			        {
			        	$("#messageBox").html("Bildfilen är för stor, bildfilen får max vara 500KB stor!");	
			        	$("#messageBox").css({"color": "red"});
			        }

			        else if(php_script_response == "fileDoesExists")
			        {
			        	$("#messageBox").html("En bildfil med samma namn finns redan!");	
			        	$("#messageBox").css({"color": "red"});
			        }

			        else if(php_script_response == "fileNotOkImg")
			        {
			        	$("#messageBox").html("Bildfilen måste vara i JPG, JPEG, PNG eller GIF format!");	
			        	$("#messageBox").css({"color": "red"});
			        }
			     	//Error message...
			        else 
			        {	/*
			        	$.get("adminStartup.php", function(data, status) {
			        		$("#userTable").html(data); 
			        	}); */ 
			        	$("#messageBox").html("Det uppstod ett fel när användaren skulle registreras, försök igen.");	
			        	$("#messageBox").css({"color": "red"});
			        } 
			    }
			});
		}	
/*
		//Error messages for all the fields and the fileselect. 
		else
		{
			$("#usernameSpan").html(" Detta fält måste vara ifyltt!");
			$("#apartmentnrSpan").html(" Detta fält måste vara ifyltt!");
			$("#passwordSpan").html(" Detta fält måste vara ifyltt!");
			$("#messageBox").html("Du måste ha valt en bild som ska laddas upp!");

			$("#usernameSpan").css({"color": "red"});
			$("#apartmentnrSpan").css({"color": "red"});
			$("#passwordSpan").css({"color": "red"});
			$("#messageBox").css({"color": "red"});


			$("#username").css({"background-color": "var(--gray-red-theme-color)"});
			$("#apartmentnr").css({"background-color": "var(--gray-red-theme-color)"});
			$("#password").css({"background-color": "var(--gray-red-theme-color)"});
		} */
	});



	$("#deleteUser").click(function() {
			var apartmentnr = $("#apartmentnrDelete").val();
			var oldRowCount = $("#userTable tr").length;

			var isNotANr = isNaN(apartmentnr);

		//Cheks if the fields arent empty. 
		if(isNotANr == false && apartmentnr != "")
		{

			//Makes a ajax call to the "deletUser.php" file that delets
			//the selected user. 
			$.post("deleteUser.php", 
			{ apartmentnr: apartmentnr }, 
			function(data, status) {
				$("#userTable").html(data);

				var rowCount = $("#userTable tr").length;
				
				//Cheks if the user was deleted.
				if(oldRowCount > rowCount)
				{
					$("#deleteMessage").html("Användaren har tagits bort.");
					$("#apartmentnrDelete").val("");
					$("#deleteMessage").css({"color": "black"});
				}

				//Error message that shows if the user was not deleted. 
				else
				{
					$("#deleteMessage").html("Det uppstod ett fel när användaren skulle tas bort, försök igen.");	
					$("#deleteMessage").css({"color": "red"});
				}

			});
		}
		else if(isNotANr == true)
		{
			$("#deleteMessage").html("\"" + apartmentnr + "\" är inte ett lägenhetsnummer, ange ett lägenhetsnummer!");
			$("#deleteMessage").css({"color": "red"});
		}
		else
		{
			$("#deleteMessage").html("Du har inte anget en användare som ska tas bort!");
			$("#deleteMessage").css({"color": "red"});
		}
	});

});