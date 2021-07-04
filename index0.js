var help = prompt("Hello! In Books library","Do you need any help? yes/No! ")

if (help !== "yes" ){
    alert("You are Welcom im the Books library!") }

  var fav =prompt("Choose one of these books type from your favorite?",
"Fantasy,Sci-Fi,Mystery")
function download (){
var times = prompt("How many books do you want to download it?") 

while( times >= 1 && times > 4 ){
 alert("Sorry.....Maximum number of books you are allowed to download is 3 books.:") 
break;
}

 for( var i = 0 ; i < times ; i++){
if (fav == "Fantasy"){
  document.write("<div >" + "User need these books" + "<img src='https://i.ebayimg.com/images/g/g~MAAOSwgQlepbh3/s-l300.jpg' alt='Fantasy'>" + "</div>") }
 if (fav == "Sci-Fi"){
  document.write("<div >" + "User need these books" + " <img src='https://images-na.ssl-images-amazon.com/images/I/512U7YktxHL._SX330_BO1,204,203,200_.jpg'>" + "</div>")  }
  if (fav == "Mystery"){
  document.write("<div >" + "User need these books" + " <img src='https://images-na.ssl-images-amazon.com/images/I/912ziOwTWgL.jpg'>" + "</div>")  }
  }
  return times;
  }
 download();

var user;
if (confirm("Do you like the library?") == true) {
			user = "Welcom!";
		}


document.write("<h5>" + fav +"</h5>")

document.write("<h7>" + user +"</h7>")


console.log(fav)

console.log(user)