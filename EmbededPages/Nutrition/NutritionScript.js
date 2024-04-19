const healthyFoodIMG = document.getElementById("healthyFoodIMG");
const unhealthyFoodIMG = document.getElementById("unhealthyFoodIMG");
const dietsIMG = document.getElementById("dietsIMG");
const iBulkNutritionDictionaryIMG = document.getElementById("iBulkNutritionDictionaryIMG");
const nutritionSearch = document.getElementById("nutritionSearch");
const personalMealPlanIMG = document.getElementById("personalMealPlanIMG");
const dailyCaloriesDiv = document.getElementById("dailyCaloriesDiv");
const dailyCaloriesYes = document.getElementById("dailyCaloriesYes");
const dailyCaloriesNo = document.getElementById("dailyCaloriesNo");
const dailyCaloriesGo = document.getElementById("dailyCaloriesGo");
const dailyCaloriesPara = document.getElementById("dailyCaloriesPara");
const dailyCaloriesInput = document.getElementById("dailyCaloriesInput");
const dailyCaloriesInputButton = document.getElementById("dailyCaloriesInputButton");
const dailyCaloriesClosingTag = document.getElementById("dailyCaloriesClosingTag");
const question = document.getElementById("question");
const search = document.getElementById("search");
const theLastSupperContainer = document.getElementById("theLastSupperContainer");
const theLastSupper = document.getElementById("theLastSupper");
const zoomingDiv = document.createElement("div");
const nutriSuggetions = document.getElementById("nutriSuggetions");

var rect = theLastSupper.getBoundingClientRect();
var surpriseBool = false
var alertIsActivated = false;
var suggetionsExist = false;
var placeHInterval, numberOfSuggetions;
var numberOfSuggetionsAllowed = 10;
var zoomingDivY = 200;
var zoomingDivX = 200;
var positionSpeed = 2;
var scale = 2;

function DailyCaloriesSubmit() {
    if (dailyCaloriesInput.value == "") {alert("Please enter your daily calories if you'd like to proceed!");}
    else if (dailyCaloriesInput.value < 500 || dailyCaloriesInput.value >= 10000) {alert("Please enter daily calories in [500c-10000c] range!");}
    else {
        alertIsActivated = true;
        localStorage.setItem("amountOfCalories", dailyCaloriesInput.value);
        localStorage.setItem("alertIsActivated", alertIsActivated);
        window.location.href = "NutritionEmbededPages/PersonalMealPlan/PersonalMealPlan.html";
    }
}

healthyFoodIMG.onclick = function() {window.location.href = "NutritionEmbededPages/HealthyFood/HealthyFood.html";}
unhealthyFoodIMG.onclick = function() {window.location.href = "NutritionEmbededPages/JunkFood/JunkFood.html";}
dietsIMG.onclick = function() {window.location.href = "NutritionEmbededPages/Diets/Diets.html";}
iBulkNutritionDictionaryIMG.onclick = function() {window.location.href = "NutritionEmbededPages/iBulkDictionary/iBulkDictionary.html";}

//  NutritionMealPlan
dailyCaloriesClosingTag.onclick = function() {
    dailyCaloriesDiv.style.visibility = "hidden";
    dailyCaloriesInput.style.visibility = "hidden";
    dailyCaloriesInputButton.style.visibility = "hidden";
    dailyCaloriesYes.style.visibility = "hidden";
    dailyCaloriesNo.style.visibility = "hidden";
    dailyCaloriesClosingTag.style.top = -355 + "px";
    surpriseBool = false;
    dailyCaloriesDiv.style.top = -320 + "px";
    dailyCaloriesDiv.style.opacity = 0;
    dailyCaloriesPara.innerHTML = "This section requires your daily calories. iBulk provides a body needs calculator in the home page. Would you like to try it?";
}
personalMealPlanIMG.onclick = function() {
    dailyCaloriesDiv.style.visibility = "visible";
    dailyCaloriesDiv.style.opacity = 1;
    dailyCaloriesDiv.style.top = -260 + "px";
    if (!surpriseBool) {
        dailyCaloriesYes.style.visibility = "visible";
        dailyCaloriesNo.style.visibility = "visible";
        dailyCaloriesGo.style.visibility = "visible";
        surpriseBool = true;
    }
}
dailyCaloriesNo.onclick = function() {
    dailyCaloriesYes.style.visibility = "hidden";
    dailyCaloriesNo.style.visibility = "hidden";
    dailyCaloriesGo.style.visibility = "hidden";
    dailyCaloriesPara.innerHTML = "Please enter your daily calories amount:";
    dailyCaloriesInput.style.visibility = "visible";
    dailyCaloriesInput.focus();
    dailyCaloriesInputButton.style.visibility = "visible";
    dailyCaloriesClosingTag.style.top = -287 + "px";
}
dailyCaloriesInputButton.onclick = DailyCaloriesSubmit;
dailyCaloriesInput.addEventListener("keydown", (event) => {if (event.key == 'Enter') DailyCaloriesSubmit();});
dailyCaloriesYes.onclick = function() {window.location.href = "../../iBulk.html#calculatorDiv";}
dailyCaloriesGo.onclick = function() {window.location.href = "NutritionEmbededPages/PersonalMealPlan/PersonalMealPlan.html";}

//  NutritionSearch
search.onclick = function() {
    if (nutritionSearch.value == "") alert("Please drop an element to have its nutrition values!");
    else alert("This option isnt available now!");
}
question.onclick = function() {
    clearInterval(placeHInterval);
    nutritionSearch.value = "";
    nutritionSearch.placeholder = "Get nutrition values for any element!";
    setTimeout(() => {
        PlaceHolderTextGenerater();
        placeHInterval = setInterval(PlaceHolderTextGenerater, 2500);
    }, 4000);
}

function PlaceHolderTextGenerater() {
    var nutritionElement = nutritionElements[Math.floor(Math.random() * (nutritionElements.length))];
    var nutritionElementArray = nutritionElement.split("");
    nutritionSearch.placeholder = "";
    for (var i = 0; i < nutritionElementArray.length; i++) {
        (function(index) {
            setTimeout(() => { nutritionSearch.placeholder += nutritionElementArray[index]; }, 80 * index);
        })(i);
    }
}
PlaceHolderTextGenerater();
placeHInterval = setInterval(PlaceHolderTextGenerater, 2500);

//  Hovering zoom effect script
theLastSupperContainer.style.margin = "0px 0px 20px 0px";
theLastSupperContainer.style.cursor = "none";
zoomingDiv.style.height = zoomingDivY + "px";
zoomingDiv.style.width = zoomingDivX + "px";
zoomingDiv.style.backgroundColor = "none";
zoomingDiv.style.border = "2px solid white";
zoomingDiv.style.borderRadius = "50%";
zoomingDiv.style.position = "absolute";
zoomingDiv.style.pointerEvents = "none";
zoomingDiv.style.backgroundImage = "url('" + theLastSupper.src + "')";
theLastSupper.onmouseenter = function() {theLastSupperContainer.appendChild(zoomingDiv);}
theLastSupper.onmouseleave = function() {theLastSupperContainer.removeChild(zoomingDiv);}
theLastSupper.onmousemove = function(event) {
    zoomingDiv.style.backgroundSize = (theLastSupper.width * scale) + "px " + (theLastSupper.height * scale) + "px";
    zoomingDiv.style.backgroundPosition = "-" + (event.clientX * positionSpeed - rect.left - 400) + "px -" + (event.clientY * positionSpeed - rect.top - 210) + "px";
    zoomingDiv.style.top = (event.clientY - rect.top - (zoomingDivY / 2)) + "px";
    zoomingDiv.style.left = (event.clientX - rect.left - (zoomingDivX / 2)) + "px";
}

function GenerateSuggetions(nutritionElementName) {
    var aSuggDiv = document.createElement("div");
    aSuggDiv.classList.add("suggetions");
    aSuggDiv.innerHTML = nutritionElementName;
    nutriSuggetions.appendChild(aSuggDiv);
    aSuggDiv.onclick = function() {window.location.href = "NutritionEmbededPages/iBulkDictionary/iBulkDictionary.html"/* + "#" + nutritionElementName*/;}
}

nutritionSearch.oninput = function() {
    var numberOfExtractions = nutritionSearch.value.length;
    numberOfSuggetions = 0;
    if (nutritionSearch.value == "") {
        while (nutriSuggetions.firstChild) {nutriSuggetions.removeChild(nutriSuggetions.firstChild);}
        nutriSuggetions.style.display = "none";
    }
    else {
        suggetionsExist = false;
        nutriSuggetions.style.display = "block";
        while (nutriSuggetions.firstChild) {nutriSuggetions.removeChild(nutriSuggetions.firstChild);}
        var nutritionSearchValueToLowerCase = nutritionSearch.value.toLowerCase();
        for (var i = 0; i < nutritionElements.length; i++) {
            var nutritionElementToLowerCase = nutritionElements[i].substring(0, numberOfExtractions).toLowerCase();
            if (numberOfSuggetions >= numberOfSuggetionsAllowed) {break;}
            else if (nutritionSearchValueToLowerCase == nutritionElementToLowerCase) {
                GenerateSuggetions(nutritionElements[i]);
                numberOfSuggetions++;
                suggetionsExist = true;
            }
        }   
        if (!suggetionsExist) {nutriSuggetions.style.display = "none";}
    }   
}