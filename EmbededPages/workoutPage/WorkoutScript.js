var contentDivs = document.getElementsByClassName("contentDivs");
var selectedMuscleToWorkOut = localStorage.getItem("selectedMuscleToWorkOut");
var selectedMuscleBoolean = JSON.parse(localStorage.getItem("selectedMuscleBoolean"));
var alertMessage = alertMessage = "The workout of " + selectedMuscleToWorkOut + " is not available now, check later!";

if (selectedMuscleBoolean) {
    setTimeout(() => {alert(alertMessage);}, 500);
    localStorage.setItem("selectedMuscleBoolean", false);
}

for (let i = 0; i < contentDivs.length; i++) {contentDivs[i].onclick = function() {alert("This workout is not available now, check later");}}