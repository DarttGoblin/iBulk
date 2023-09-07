var calculatorInputs = document.getElementsByClassName("calculatorInputs");
var checkItRightNow = document.getElementById("checkItRightNow");
var caloriesDiv = document.getElementById("caloriesDiv");
var calculatorClosingTag = document.getElementById("calculatorClosingTag");
var calculatorForm = document.getElementById("calculatorForm");
var calculatorButton = document.getElementById("calculatorButton");
var calculatorSubmit = document.getElementById("calculatorSubmit");
var calculatorReset = document.getElementById("calculatorReset");
var maleButton = document.getElementById("male");
var femaleButton = document.getElementById("female");
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var activitySelect = document.getElementById("activitySelect");
var goBack = document.getElementById("goBack");
var resetAll = document.getElementById("resetAll");
var maleGender = false;
var femaleGender = false;
var alertIsActivated = false;
var maintainSpan = document.getElementById("maintainSpan");
var mildWeightLossSpan = document.getElementById("mildWeightLossSpan");
var weightLossSpan = document.getElementById("weightLossSpan");
var extremeWeightLossSpan = document.getElementById("extremeWeightLossSpan");
var mildWeightGainSpan = document.getElementById("mildWeightGainSpan");
var weightGainSpan = document.getElementById("weightGainSpan");
var fastWeightGainSpan = document.getElementById("fastWeightGainSpan");
var maintainSpanTwo = document.getElementById("maintainSpanTwo");

//  Helping Functions
function GenderButtonInitialState(gender) {
    gender.style.background = "white";
    gender.style.color = "black";
    gender.style.borderColor = "rgb(140,0,0)";
}
function GenderButtonClickingState(gender) {
    gender.style.background = "black";
    gender.style.color = "white";
    gender.style.borderColor = "black";
}
function CalculateBMR() { //  Basal Metabolic Rate
    if (maleGender) return (66.47 + (13.75 * weight.value) + (5.003 * height.value) - (6.755 * age.value));                
    else if (femaleGender) return (655.1 + (9.563 * weight.value) + (1.850 * height.value) - (4.676 * age.value));
}
function CalculateAMR(BMR) { //  Active Metabolic Rate
    if (activitySelect.value == "Sedentary (little or no exercise)") return (BMR * 1.2);
    else if (activitySelect.value == "Lightly active (exercise 1-3 days/week)") return (BMR * 1.375);
    else if (activitySelect.value == "Moderately active (exercise 3-5 days/week)") return (BMR * 1.55);
    else if (activitySelect.value == "Active (exercise 6-7 days/week)") return (BMR * 1.725);
    else return (BMR * 1.9);
}
function BodyInputsState(visibilityScale) {
    calculatorSubmit.style.visibility = visibilityScale; 
    calculatorReset.style.visibility = visibilityScale;
    maleButton.style.visibility = visibilityScale;
    femaleButton.style.visibility = visibilityScale;
    age.style.visibility = visibilityScale;
    weight.style.visibility = visibilityScale;
    height.style.visibility = visibilityScale;
    activitySelect.style.visibility = visibilityScale;
    calculatorClosingTag.style.visibility = visibilityScale;
}
function ShowResult() {
    maintainSpan.innerHTML = Math.floor(CalculateAMR(CalculateBMR()));
    mildWeightLossSpan.innerHTML = Math.floor((CalculateAMR(CalculateBMR()) * 91) / 100);
    weightLossSpan.innerHTML = Math.floor((CalculateAMR(CalculateBMR()) * 81) / 100);
    extremeWeightLossSpan.innerHTML = Math.floor((CalculateAMR(CalculateBMR()) * 63) / 100);
    mildWeightGainSpan.innerHTML = Math.floor((CalculateAMR(CalculateBMR()) * 109) / 100);
    weightGainSpan.innerHTML = Math.floor((CalculateAMR(CalculateBMR()) * 119) / 100);
    fastWeightGainSpan.innerHTML = Math.floor((CalculateAMR(CalculateBMR()) * 137) / 100);
    maintainSpanTwo.innerHTML = Math.floor(CalculateAMR(CalculateBMR())); 
    BodyInputsState("hidden");
    caloriesDiv.style.visibility = "visible";
}

//  Controling Document Elements
calculatorButton.onclick = function() {
    calculatorForm.style.visibility = "visible";
    BodyInputsState("visible");
}
maleButton.onclick = function() {
    GenderButtonInitialState(femaleButton);
    GenderButtonClickingState(maleButton);
    femaleGender = false;
    maleGender = true;
}
femaleButton.onclick = function() {
    GenderButtonInitialState(maleButton);
    GenderButtonClickingState(femaleButton);
    maleGender = false;
    femaleGender = true;
}
calculatorReset.onclick = function() {
    GenderButtonInitialState(maleButton);
    GenderButtonInitialState(femaleButton);
    age.value = null;
    height.value = null;
    weight.value = null;
    activitySelect.value = "Your activity";
}
calculatorSubmit.onclick = function() {
    if (!femaleGender && !maleGender) alert("Gender unknown!");
    else if (age.value < 15 || age.value > 80) alert("Age Givin in range [15,80]");
    else if (height.value < 100 || height.value > 250) alert("Height Givin in range [100,250]");
    else if (weight.value < 40 || weight.value > 150) alert("Weight Givin in range [40,150]");
    else if (activitySelect.value == "Your activity") alert("Activity unknown");
    else ShowResult();
}
calculatorClosingTag.onclick = function() {
    BodyInputsState("hidden");
    calculatorForm.style.visibility = "hidden";
}
goBack.onclick = function() {
    caloriesDiv.style.visibility = "hidden";
    BodyInputsState("visible");
}
resetAll.onclick = function() {
    caloriesDiv.style.visibility = "hidden";
    GenderButtonInitialState(maleButton);
    GenderButtonInitialState(femaleButton);
    maleGender = false;
    femaleGender = false;
    age.value = null;
    height.value = null;
    weight.value = null;
    activitySelect.value = "Your activity";
    BodyInputsState("visible");
}

//  Sending The Calories Amount To Personal Meal Plan
checkItRightNow.onclick = function() {
    alertIsActivated = true;
    localStorage.setItem("alertIsActivated", alertIsActivated);
    localStorage.setItem("amountOfCalories", Math.floor(CalculateAMR(CalculateBMR())));
}