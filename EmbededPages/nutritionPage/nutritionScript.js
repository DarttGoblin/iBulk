//  EmbededPagesLinking
var healthyFoodIMG = document.getElementById("healthyFoodIMG");
var unhealthyFoodIMG = document.getElementById("unhealthyFoodIMG");
var dietsIMG = document.getElementById("dietsIMG");
var iBulkNutritionDictionaryIMG = document.getElementById("iBulkNutritionDictionaryIMG");

healthyFoodIMG.onclick = function() {window.location.href = "../healthyFoodPage/healthyFood.html";}
unhealthyFoodIMG.onclick = function() {window.location.href = "../junkFoodPage/unhealthyFood.html";}
dietsIMG.onclick = function() {window.location.href = "../DietsPage/diets.html";}
iBulkNutritionDictionaryIMG.onclick = function() {window.location.href = "../iBulkDicPage/iBulkNutritionDictionary.html";}

//  NutritionMealPlan
var personalMealPlanIMG = document.getElementById("personalMealPlanIMG");
var dailyCaloriesDiv = document.getElementById("dailyCaloriesDiv");
var dailyCaloriesYes = document.getElementById("dailyCaloriesYes");
var dailyCaloriesNo = document.getElementById("dailyCaloriesNo");
var dailyCaloriesPara = document.getElementById("dailyCaloriesPara");
var dailyCaloriesInput = document.getElementById("dailyCaloriesInput");
var dailyCaloriesInputButton = document.getElementById("dailyCaloriesInputButton");
var dailyCaloriesClosingTag = document.getElementById("dailyCaloriesClosingTag");
var surpriseBool = false;
var alertIsActivated = false;

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
        surpriseBool = true;
    }
}
dailyCaloriesNo.onclick = function() {
    dailyCaloriesYes.style.visibility = "hidden";
    dailyCaloriesNo.style.visibility = "hidden";
    dailyCaloriesPara.innerHTML = "Please enter your daily calories amount:";
    dailyCaloriesInput.style.visibility = "visible";
    dailyCaloriesInput.focus();
    dailyCaloriesInputButton.style.visibility = "visible";
    dailyCaloriesClosingTag.style.top = -287 + "px";
}
function DailyCaloriesSubmit() {
    if (dailyCaloriesInput.value == "") alert("Please enter your daily calories if you'd like to proceed!");
    else if (dailyCaloriesInput.value < 500 || dailyCaloriesInput.value >= 4000) alert("Please enter daily calories in (500c-4000c) range!");
    else {
        alertIsActivated = true;
        localStorage.setItem("amountOfCalories", dailyCaloriesInput.value);
        localStorage.setItem("alertIsActivated", alertIsActivated);
        window.location.href = "../PersonalMealPage/PersonalMealPlan.html";
    }
}
dailyCaloriesInputButton.onclick = DailyCaloriesSubmit;
dailyCaloriesInput.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') DailyCaloriesSubmit();
})
dailyCaloriesYes.onclick = function() {
    window.location.href = "../../projectAlpha8.html#doYourBody";
}
//  NutritionSearch
var question = document.getElementById("question");
var search = document.getElementById("search");
search.onclick = function() {
    if (nutritionSearch.value == "") alert("Please drop an element to have its nutrition values!");
    else alert("This option isnt available now!");
}
question.onclick = function() {
    nutritionSearch.value = "";
    nutritionSearch.placeholder = "Get nutrition values for any element!";    
}
const nutritionElements = ['Apple', 'Spinach', 'Chicken Breast', 'Banana', 'Broccoli', 'Salmon', 'Orange', 'Carrot', 'Lean Beef', 'Strawberries', 'Kale', 'Turkey Breast', 'Grapes', 'Cauliflower', 'Tuna', 'Blueberries', 'Sweet Potato', 'Pork Tenderloin', 'Pineapple', 'Asparagus'];
var nutritionSearch = document.getElementById("nutritionSearch");
nutritionSearch.placeholder = nutritionElements[Math.floor(Math.random() * (nutritionElements.length))];