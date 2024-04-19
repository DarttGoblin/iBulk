var contentDivs = document.getElementsByClassName("contentDivs");
var selectedMuscleToWorkOut = localStorage.getItem("selectedMuscleToWorkOut");
var selectedMuscleBoolean = JSON.parse(localStorage.getItem("selectedMuscleBoolean"));
var musclesSelect = document.getElementById("musclesSelect");

var alertMessage = alertMessage = "The workout of " + selectedMuscleToWorkOut + " is not available now, check later!";
var workouts = [
    "WorkoutEmbededPages/biceps_cable.html",
    "WorkoutEmbededPages/chest_dumbbell.html",
    "WorkoutEmbededPages/chest_cable.html",
    "WorkoutEmbededPages/triceps_cable.html",
];
var workoutsImages = [
    "url('WorkoutMedia/biceps_cable.jpg')",
    "url('WorkoutMedia/chest_dumbbell.jpg')",
    "url('WorkoutMedia/chest_cable.jpg')",
    "url('WorkoutMedia/triceps_cable.jpg')",
];
var workoutSectionMuscles = ["All muscles" ,"Chest", "Biceps", "Triceps", "Forearms", "Shoulders", "Abdominals", "Obliques", 
"Lats", "Trapezius", "Quadriceps", "Hamstrings", "Calves", "Glutes"];

if (selectedMuscleBoolean) {
    setTimeout(() => {alert(alertMessage);}, 500);
    localStorage.setItem("selectedMuscleBoolean", false);
}
for (let i = 0; i < contentDivs.length; i++) {contentDivs[i].style.backgroundImage = workoutsImages[i];}
for (let i = 0; i < contentDivs.length; i++) {contentDivs[i].onclick = function() {window.location.href = workouts[i];}}

for (var i = 0; i < workoutSectionMuscles.length; i++) {
    var option = document.createElement("option");
    option.value = workoutSectionMuscles[i];
    option.text = workoutSectionMuscles[i];
    musclesSelect.append(option);
}








var workoutButtons = document.getElementsByClassName("workoutButtons");
var WorkoutCatBtns = document.getElementsByClassName("WorkoutCatBtns");
var musclesSelect = document.getElementById("musclesSelect");
var numberOfCategory = localStorage.getItem("numberOfCategory");
// var nameOfMuscle = localStorage.getItem("nameOfMuscle");

var all = document.getElementsByClassName("all");
var bodyWeight = document.getElementsByClassName("bodyWeight");
var dumbbells = document.getElementsByClassName("dumbbells");
var barbells = document.getElementsByClassName("barbells");
var cable = document.getElementsByClassName("cable");

var workoutTypes = [all, bodyWeight, dumbbells, barbells, cable];
var moreWorkoutTypes = ["stretches", "plate", "band", "medicineBall", "yoga", "bosuBall", "tRX", "cardio"];

// var muscleXequipement;

function ChooseEquipement(selectedWorkoutType) {
    for (var i = 0; i < contentDivs.length; i++) {contentDivs[i].style.display = "none";}
    for (var i = 0; i < selectedWorkoutType.length; i++) {selectedWorkoutType[i].style.display = "inline";}
    // if (musclesSelect.value = "All muscles") {
    //     for (var i = 0; i < contentDivs.length; i++) {contentDivs[i].style.display = "none";}
    //     for (var i = 0; i < selectedWorkoutType.length; i++) {selectedWorkoutType[i].style.display = "inline";}
    // }
    // else {
        // muscleXequipement = document.getElementsByClassName(musclesSelect.value + "_" + selectedWorkoutType);
        // for (var i = 0; i < contentDivs.length; i++) {contentDivs[i].style.display = "none";}
        // for (var i = 0; i < muscleXequipement.length; i++) {muscleXequipement[i].style.display = "inline";}
    // }
}
// function ChooseMuscle(selectedWorkoutMuscle) {
//     localStorage.setItem("nameOfMuscle", selectedWorkoutMuscle);
//     if (numberOfCategory == null || numberOfCategory == 0) {
//         for (var i = 0; i < contentDivs.length; i++) {contentDivs[i].style.display = "none";}
//         for (var i = 0; i < selectedWorkoutMuscle.length; i++) {selectedWorkoutMuscle[i].style.display = "inline";}
//     }
//     else {
//         muscleXequipement = document.getElementsByClassName(selectedWorkoutMuscle + "_" + selectedWorkoutMuscle);
//         for (var i = 0; i < contentDivs.length; i++) {contentDivs[i].style.display = "none";}
//         for (var i = 0; i < muscleXequipement.length; i++) {muscleXequipement[i].style.display = "inline";}
//     }
// }

function SelectedEquipement() {
    for (var i = 0; i < contentDivs.length; i++) {contentDivs[i].style.display = "none";}
    for (var i = 0; i < workoutTypes[numberOfCategory].length; i++) {workoutTypes[numberOfCategory][i].style.display = "inline";}
}

if (numberOfCategory == null || numberOfCategory == 0) {for (var i = 0; i < contentDivs.length; i++) {contentDivs[i].style.display = "inline";}} //  Intial display
else {SelectedEquipement();}

for (let i = 0; i < workoutButtons.length; i++) {workoutButtons[i].onclick = function() {ChooseEquipement(workoutTypes[i]);}}
// for (let i = 0; i < workoutButtons.length; i++) {musclesSelect.onchange = function() {ChooseMuscle(musclesSelect.value);}}
musclesSelect.disabled = true;