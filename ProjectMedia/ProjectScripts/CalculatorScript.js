const calculatorInputs = document.getElementsByClassName("calculatorInputs");
const checkItRightNow = document.getElementById("checkItRightNow");
const caloriesDiv = document.getElementById("caloriesDiv");
const calculatorClosingTag = document.getElementById("calculatorClosingTag");
const calculatorForm = document.getElementById("calculatorForm");
const calculatorButton = document.getElementById("calculatorButton");
const calculatorSubmit = document.getElementById("calculatorSubmit");
const calculatorReset = document.getElementById("calculatorReset");
const maleButton = document.getElementById("male");
const femaleButton = document.getElementById("female");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const activitySelect = document.getElementById("activitySelect");
const goBack = document.getElementById("goBack");
const resetAll = document.getElementById("resetAll");
const maintainSpan = document.getElementById("maintainSpan");
const mildWeightLossSpan = document.getElementById("mildWeightLossSpan");
const weightLossSpan = document.getElementById("weightLossSpan");
const extremeWeightLossSpan = document.getElementById("extremeWeightLossSpan");
const mildWeightGainSpan = document.getElementById("mildWeightGainSpan");
const weightGainSpan = document.getElementById("weightGainSpan");
const fastWeightGainSpan = document.getElementById("fastWeightGainSpan");
const maintainSpanTwo = document.getElementById("maintainSpanTwo");
const calculatorIntro = document.getElementById("calculatorIntro");

var maleGender = false;
var femaleGender = false;
var alertIsActivated = false;

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
    calculatorIntro.style.display = "none";
    calculatorButton.style.display = "none";
    calculatorForm.style.display = "block";
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
    calculatorForm.style.display = "none";
    calculatorIntro.style.display = "block";
    calculatorButton.style.display = "block";
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