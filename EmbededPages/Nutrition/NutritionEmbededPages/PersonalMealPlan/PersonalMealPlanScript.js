var contentDivs = document.getElementsByClassName("contentDivs");

var amountOfCalories = Number(localStorage.getItem("amountOfCalories"));
var alertIsActivated = JSON.parse(localStorage.getItem("alertIsActivated"));

for (var i = 0; i < contentDivs.length; i++) {
    var bgImage = document.createElement("img");
    bgImage.src = "PersonalMealPlanMedia/MealPlanPic" + (i + 1) + ".png";
    bgImage.style.height = "100%";
    bgImage.style.width = "100%";
    bgImage.style.borderRadius = "30px";
    contentDivs[i].appendChild(bgImage);
}
for (let i = 0; i < contentDivs.length; i++) {contentDivs[i].onclick = function() {window.location.href = "PersonalMealPlanEmbededPages/MealPlan" + (i+1) + ".html";}}
for (let i = 0; i < contentDivs.length; i++) {contentDivs[i].onmouseenter = function() {contentDivs[i].style.scale = 1.05;}}
for (let i = 0; i < contentDivs.length; i++) {contentDivs[i].onmouseleave = function() {contentDivs[i].style.scale = 1;}}

//  Recieving The Calories Amount To Personal Meal Plan
if (alertIsActivated) {
    alertMessage = "Your amount of calories is " + amountOfCalories + ". No suggested meal for this amount. please try again later";
    setTimeout(() => {alert(alertMessage);}, 2000);
    alertIsActivated = false;
    localStorage.setItem("alertIsActivated", alertIsActivated);
}

