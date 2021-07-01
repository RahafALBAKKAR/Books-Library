alert("Welcome to Book library :) ");

var book = prompt("what is your favoite book?" , "book")
if(book != null)
{var document.write( "<h5>"+ book + "</h5>")}
else {alert("Thankyou")}

 var userPreference;

		if (confirm("Do you want to save changes?") == true) {
			userPreference = "Data saved successfully!";
		} else {
			userPreference = "Save Canceled!";
		}

		document. getElementById("msg").innerHTML = userPreference; 

    document.getElementById("userPreference").style.color = "blue";
