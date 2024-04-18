//  Animated Phrase
var childTitle = document.getElementById("childTitle");
var extendedDiv = document.getElementById("extendedDiv");
var linking = document.getElementById("linking");
var rightPic = document.getElementById("rightPic");
var leftPic = document.getElementById("leftPic");
var contentDivs = document.getElementsByClassName("contentDivs");
var linkingPages = document.getElementsByClassName("linkingPages");

function childTitleFuncion() {
    childTitle.style.visibility = "visible";
    childTitle.style.opacity = 1;
    childTitle.style.top = 20 + "px";
}
function extend() {
    extendedDiv.style.width = 1300 + "px";
    extendedDiv.style.height = 400 + "px";
    extendedDiv.style.borderTopRightRadius = 20 + "px";
    extendedDiv.style.borderTopLeftRadius = 20 + "px";
}
function ShowExtraMeals() {
    rightPic.style.opacity = 1;
    leftPic.style.opacity = 1;
    rightPic.style.right = 0 + "px";
    leftPic.style.right = 0 + "px";
}
function ColorizeBackG(color) {
    linking.style.backgroundColor = color;
    extendedDiv.style.backgroundColor = color;
}

setTimeout(childTitleFuncion, 1000); //  intialise animation after 1 second from loading the page
setTimeout(extend, 200);
setTimeout(()=>{
    rightPic.style.display = "inline";
    leftPic.style.display = "inline";
}, 1400);
setTimeout(ShowExtraMeals, 1500);

if (window.location.href.includes("HealthyFood.html")) {ColorizeBackG("rgb(153, 217, 234)");}
else if (window.location.href.includes("JunkFood.html")) {ColorizeBackG("rgb(0, 0, 0)"); for (var i = 0; i < linkingPages.length; i++) {linkingPages[i].style.color = "white";}}
else if (window.location.href.includes("Diets.html")) {ColorizeBackG("rgb(181, 230, 29)");}
else if (
    window.location.href.includes("PersonalMealPlan.html") ||
    window.location.href.includes("MealPlan1.html") ||
    window.location.href.includes("MealPlan2.html") ||
    window.location.href.includes("MealPlan3.html")) 
        {ColorizeBackG("rgb(255, 174, 201)");}
else if (
    window.location.href.includes("iBulkDictionary.html") ||
    window.location.href.includes("Meat.html") ||
    window.location.href.includes("Grains.html") ||
    window.location.href.includes("Fats.html") ||
    window.location.href.includes("Nuts.html") ||
    window.location.href.includes("Vegetables.html") ||
    window.location.href.includes("Fruits.html") ||
    window.location.href.includes("Dairy.html"))
        {ColorizeBackG("rgb(231, 226, 196)");}