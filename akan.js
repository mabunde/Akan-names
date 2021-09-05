var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

function validation() {
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = document.getElementById('date').value;
    var gender = document.getElementById('gender').value

    var date = new Date(year + "/" + month + "/" + day);
    var d = date.getDay();

    if((day <= 0) || (day > 31)) {
        alert('Please enter valid dates!')
    }
    else if ((month <= 0) || (month > 12)) {
        alert('Please enter valid months!')
    }
    else if ((year <= 1900) || (year > 3000)) {
        alert("Check the century entered.")
    }
    else if(gender === null){
        alert("Please choose your gender")
    }

    if(gender === "Female"){
        alert("Your Akan name is: " + femaleNames[d] + " and you were born on " + dayOfTheWeek[d])
    }
    else if (gender === "Male"){
        alert("Your Akan name is: " + maleNames[d] + " and you were born on " + dayOfTheWeek[d])
    }


}