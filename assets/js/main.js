const male = document.getElementById("maleRadio")
const female = document.getElementById("femaleRadio")
const myDate = document.getElementById("birthDate")
let title = document.getElementById("title");
let text = document.getElementById("text");

let day;

var weekday = new Array(7)
weekday[0] = "Sunday"
weekday[1] = "Monday"
weekday[2] = "Tuesday"
weekday[3] = "Wednesday"
weekday[4] = "Thursday"
weekday[5] = "Friday"
weekday[6] = "Saturday"

const getDate = () => {
    myDate.addEventListener("change", function (){
        var input = myDate.value 

        var dateEntered = new Date(input)

        day = dateEntered.getDay()
    })
}

// Gets the day and gender selected, and outputs the correct Akan name and descriptive text
const dayOfTheWeek = () => {
    if (male.checked) {
        if (day == 0){
            document.getElementById("akan-name").innerHTML = "Kwasi";
            document.getElementById("text").innerHTML = "Which means an African male born on a " + weekday[day]
        }else if (day == 1){
            document.getElementById("akan-name").innerHTML = "Kwadwo";
            document.getElementById("text").innerHTML = "Which means an African male born on a " + weekday[day]
        }else if (day == 2){
            document.getElementById("akan-name").innerHTML = "Kwabena";
            document.getElementById("text").innerHTML = "Which means an African male born on a " + weekday[day]
        }else if (day == 3){
            document.getElementById("akan-name").innerHTML = "Kwaku";
            document.getElementById("text").innerHTML = "Which means an African male born on a " + weekday[day]
        }else if (day == 4){
            document.getElementById("akan-name").innerHTML = "Yaw";
            document.getElementById("text").innerHTML = "Which means an African male born on a " + weekday[day]
        }else if (day == 5){
            document.getElementById("akan-name").innerHTML = "Kofi";
            document.getElementById("text").innerHTML = "Which means an African male born on a " + weekday[day]
        }else{
            document.getElementById("akan-name").innerHTML = "Kwame";
            document.getElementById("text").innerHTML = "Which means an African male born on a " + weekday[day]
        }
    }else if (female.checked) {
        if (day == 0){
            document.getElementById("akan-name").innerHTML = "Akosua";
            document.getElementById("text").innerHTML = "Which means an African female born on a " + weekday[day]
        }else if (day == 1){
            document.getElementById("akan-name").innerHTML = "Adwoa";
            document.getElementById("text").innerHTML = "Which means an African female born on a " + weekday[day]
        }else if (day == 2){
            document.getElementById("akan-name").innerHTML = "Abenaa";
            document.getElementById("text").innerHTML = "Which means an African female born on a " + weekday[day]
        }else if (day == 3){
            document.getElementById("akan-name").innerHTML = "Akua";
            document.getElementById("text").innerHTML = "Which means an African female born on a " + weekday[day]
        }else if (day == 4){
            document.getElementById("akan-name").innerHTML = "Yaa";
            document.getElementById("text").innerHTML = "Which means an African female born on a " + weekday[day]
        }else if (day == 5){
            document.getElementById("akan-name").innerHTML = "Afua";
            document.getElementById("text").innerHTML = "Which means an African female born on a " + weekday[day]
        }else{
            document.getElementById("akan-name").innerHTML = "Ama";
            document.getElementById("text").innerHTML = "Which means an African female born on a " + weekday[day]
        }
    }
}

const validate = () => {
    if (((male.checked)  == false) && ((female.checked) == false)) {
        document.getElementById("messageOne").innerHTML = "Please select your gender";
    }
    else if ( ((((male.checked)  == false) && ((female.checked) == false))) ) {
    document.getElementById("messageOne").innerHTML =
        "Fill your date and Gender";
    }else{
    document.querySelector(".form").style.display = "none";
    document.querySelector(".display").style.display = "block";
    dayOfTheWeek();
    // getDate()
    }
}

getDate()


document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault()
    validate()
})
