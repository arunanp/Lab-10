function AskUserAge() {
    var txt;
    var Age_Number;
    var age = prompt("Please enter your age:");
    if (age == null || age == "") {
        txt = "User cancelled the prompt.";
    }
    else {
        Age_Number = parseInt(age);
    }
    document.getElementById("UserAge").innerHTML = Age_Number;
    var Current_Year = new Date().getFullYear()
    var BirthYear = Current_Year - Age_Number;
    document.getElementById("UserBirthYear").innerHTML = BirthYear;
}
