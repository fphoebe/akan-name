const male = document.getElementById("maleRadio")
const female = document.getElementById("femaleRadio")
const myDate = document.getElementById("birthDate")

let day;

const getDate = () => {
    myDate.addEventListener("change", function (){
        var input = myDate.value 

        var dateEntered = new Date(input)

        day = dateEntered.getDay()
        alert(day)
    })
}

const dayOfTheWeek = () => {
    if (male.checked) {
        if (day == 0){
            document.getElementById("akan-name").innerHTML = "Kwasi";
        }else if (day == 1){
            document.getElementById("akan-name").innerHTML = "Kwadwo";
        }else if (day == 2){
            document.getElementById("akan-name").innerHTML = "Kwabena";
        }else if (day == 3){
            document.getElementById("akan-name").innerHTML = "Kwaku";
        }else if (day == 4){
            document.getElementById("akan-name").innerHTML = "Yaw";
        }else if (day == 5){
            document.getElementById("akan-name").innerHTML = "Kofi";
        }else{
            document.getElementById("akan-name").innerHTML = "Kwame";
        }
    }else if (female.checked) {
        if (day == 0){
            document.getElementById("akan-name").innerHTML = "Akosua";
        }else if (day == 1){
            document.getElementById("akan-name").innerHTML = "Adwoa";
        }else if (day == 2){
            document.getElementById("akan-name").innerHTML = "Abenaa";
        }else if (day == 3){
            document.getElementById("akan-name").innerHTML = "Akua";
        }else if (day == 4){
            document.getElementById("akan-name").innerHTML = "Yaa";
        }else if (day == 5){
            document.getElementById("akan-name").innerHTML = "Afua";
        }else{
            document.getElementById("akan-name").innerHTML = "Ama";
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


document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault()
    getDate()
    validate()


})
