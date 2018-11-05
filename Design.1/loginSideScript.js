	$(document).ready(function() {

		$("#submitButton").prop("disabled",true);
		$("#logginAs").val("user");

		//Kollar om man lämnar användarnamnfältet körs funktionen
		$("#usernameBox").focusout(function() {

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
		});

		$("#passwordBox").focusout(function() {

			if($("#usernameBox").val() != "" && $("#passwordBox").val() != "")
			{
				$("#submitButton").prop("disabled",false);
			}
			else
			{
				$("#submitButton").prop("disabled",true);
			}

		});

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
	});














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