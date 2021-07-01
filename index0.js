alert("Hello! In Books library");
var help =prompt("Do you want any help?")

if (help === "yes"){ var fav =prompt("Could you enter what your preffered Book type ?") 
var times = prompt( "How many book do you want to download it?") 
while(times >= 4){
  alert("Maximum number of books you are allowed to download is 3 books. ")
} }
else { prompt("Thank you")}
var user;
if (confirm("Do you like the library?") == true) {
			user = "Welcom!";
		} 
console.log(fav)
console.log(times)
document.write("<h5>" + fav +"</h5>")
document.write("<h6>" + times +"</h6>")
document.write("<h7>" + user +"</h7>")
console.log(user)
