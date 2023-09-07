//  Recieving The Calories Amount To Personal Meal Plan
var amountOfCalories = Number(localStorage.getItem("amountOfCalories"));
var alertIsActivated = JSON.parse(localStorage.getItem("alertIsActivated"));
if (alertIsActivated) {
    alertMessage = "Your amount of calories is " + amountOfCalories + ". No suggested meal for this amount. please try again later";
    setTimeout(() => {alert(alertMessage);}, 2000);
    alertIsActivated = false;
    localStorage.setItem("alertIsActivated", alertIsActivated);
}