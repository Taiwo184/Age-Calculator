var userInput = document.getElementById("today");
Btn = document.querySelector(".button")
userInput.max = new Date().toISOString().split("T")[0];
showTime = document.getElementById("showtime");
function calculate(){
    let birthDay = new Date(userInput.value);

    let day1 = birthDay.getDate();
    let month1 = birthDay.getMonth() + 1;
    let year1 = birthDay.getFullYear();

    let Today = new Date()

    let day2 = Today.getDate();
    let month2 = Today.getMonth() + 1;
    let year2 = Today.getFullYear()

    let day3, month3, year3;
    year3 = year2 - year1;
    if (month2 >= month1) {
        month3 = month2 - month1;
    }else{
        year3--;
        month3 = 12 + month2 - month1
    }
    if(day2 >= day1){
        day3 = day2 -  day1
    }else{
        month3--;
        day3 = getDaysInMonth(year1, month1) + day2 - day1
    }
    if (month3 < 0) {
        month3 = 11;
        year3--;
    }
    showTime.innerHTML = `TaaDaa: You are ${year3} years, ${month3} month and ${day3} days old`
    // console.log(year3, month3, day3);
userInput.value = "";
}

function getDaysInMonth(year,month) {
    return new Date(year,month, 0).getDate();
}
// day3 = day1 - day2;
// month3 = month1 - month2;