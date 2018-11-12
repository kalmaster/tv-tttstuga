	$(document).ready(function() {


		$("#logginAs").val("user");



		function changeLoginH3() 
		{
			var selectedOption = "Logga in som " + $("#userSelect option:checked").text();
			$("#loginH3").html(selectedOption);	

			var user = "Lägenhetsnummer";
			var admin = "Användarnamn";

			if($("#userSelect option:checked").text() == "Användare")
			{
				$("#usernameLabel").html(user);
				$("#loginAs").val("user");
			}
			else
			{
				$("#usernameLabel").html(admin);
				$("#loginAs").val("admin");
			}
		}

		$("#userSelect").change(changeLoginH3);




		$("#userOrNr").keyup(function(){

			var nameBox = $("#userOrNr").val();
			var passBox = $("#password").val();

			if(nameBox != "" && passBox != "")
			{
				$("#submitButton").prop("disabled",false);
			}
			else
			{
				//Här ska felmedelande i placeholder vara.
			}
		});

		$("#password").keyup(function(){

			var nameBox = $("#userOrNr").val();
			var passBox = $("#password").val();

			if(nameBox != "" && passBox != "")
			{
				$("#submitButton").prop("disabled",false);
			}
			else
			{
				//Här ska felmedelande i placeholder vara.
			}
		});



		$("#submitButton").click(function(){

			var loginAs = $("#loginAs").val();
			var userOrNr = $("#userOrNr").val();
			var password = $("#password").val();

			var dataString = "loginAs1" + loginAs + "&userOrNr1=" + userOrNr + "&password1=" + password;

			if(userOrNr == "" || password == "")
			{
				$("#errorMSG").html("Fyll i alla fält!");
			}
			else
			{
				$.ajax({
					type:"POST", 
					url: "login2.php",
					data: dataString,
					cache: false,
					success: function(result){}
				});
			}

		});



		//Kollar om man lämnar användarnamnfältet körs funktionen
/*		$("#usernameBox").focusout(function() {

			//Kollar om något står i båda inmatningsfälten och om det
			// gör det så gör den 
			if($("#usernameBox").val() != "" && $("#passwordBox").val() != "")
			{
				$("#submitButton").prop("disabled",false);
			}
			else
			{
				$("#submitButton").prop("disabled",true);
			}
		}); */
/*
		$("#passwordBox").focusout(function() {

			if($("#usernameBox").val() != "" && $("#passwordBox").val() != "")
			{
				$("#submitButton").prop("disabled",false);
			}
			else
			{
				$("#submitButton").prop("disabled",true);
			}

		}); */


	});

/*
	var request;
	$("#loginForm").submit(function(event){
		event.preventDefault();

		var nameBox = $("#userOrNr").val();
		var passBox = $("#password").val();

		if(nameBox != "" && passBox != "")
		{

			// Prevent default posting of form - put here to work in case of errors
			event.preventDefault();

			// Abort any pending request
			if (request) {
			    request.abort();
			}
			// setup some local variables
			var $form = $(this);

			// Let's select and cache all the fields
			var $inputs = $form.find("input, select, button, textarea");

			// Serialize the data in the form
			var serializedData = $form.serialize();

			// Let's disable the inputs for the duration of the Ajax request.
			// Note: we disable elements AFTER the form data has been serialized.
			// Disabled form elements will not be serialized.
			$inputs.prop("disabled", true);


			request = $.ajax({
			        url: "/login2.php",
			        type: "post",
			        data: serializedData
			    });

			// Callback handler that will be called on success
			request.done(function (response, textStatus, jqXHR){
			    // Log a message to the console
			    console.log("Hooray, it worked!");
			});

			// Callback handler that will be called on failure
			request.fail(function (jqXHR, textStatus, errorThrown){
			    // Log the error to the console
			    console.error(
			        "The following error occurred: "+
			        textStatus, errorThrown
			    );
			});

			// Callback handler that will be called regardless
			// if the request failed or succeeded
			request.always(function () {
			    // Reenable the inputs
			    $inputs.prop("disabled", false);
			});
		}
		else
		{
			//Här ska felmedelande i placeholder vara.
		}
	}); */








	/*
	//Funktion som ändrar på vad som står över användarnamn fältet.
function changeUser() {
	
    var string = document.getElementById("username").innerHTML; 
    var resetString = string.replace("Lägenhetsnummer:", "Användarnamn:");
    document.getElementById("username").innerHTML = resetString;
}


	//Funktion som ändrar på vad som står över användarnamn fältet.
function changeUser2() {
	
    var string = document.getElementById("username").innerHTML; 
    var resetString = string.replace("Användarnamn:", "Lägenhetsnummer:");
    document.getElementById("username").innerHTML = resetString;
}


function validerar() {
	
	var usernameString = document.getElementById("usernameBox").innerHTML;
	var passwordString = document.getElementById("passwordBox").innerHTML;
	
	if(usernameString == "" && passwordString == "")
	{
		document.getElementById("submitButton").disabled = true;
	}
	
	else
	{
		alert("Here I am!");
		document.getElementById("submitButton").disabled = false;
	}
} */