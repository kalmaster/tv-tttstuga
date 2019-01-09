	$(document).ready(function() {

		//Some starter values are getting set here. 
		$("#submitButton").prop("disabled", true);
		$("#submitButton").css({"background-color": "var(--gray-theme-color)"});
		$("#logginAs").val("user");


		//This function changes a paragraf an as what you will login.
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


		//A function that makes  the login button klickebel 
		//if the userOrNr and password filed are not empty.
		function validateBoxes(){
			var userBox = $("#userOrNr").val();
			var passBox = $("#password").val();
			if(userBox != "" && passBox != "")
			{
				$("#submitButton").prop("disabled", false);
				$("#submitButton").css({"background-color": "var(--medium-theme-color)"});
			}
			else
			{
				$("#submitButton").prop("disabled", true);
				$("#submitButton").css({"background-color": "var(--gray-theme-color)"});
			}
		}


		//All interactiv actions are here
		$("#userSelect").change(changeLoginH3);
		$("#userOrNr").keyup(validateBoxes);
		$("#password").keyup(validateBoxes);


	});