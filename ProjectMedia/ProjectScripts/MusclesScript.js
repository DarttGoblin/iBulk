var frontMuscles = document.getElementsByClassName("frontMuscles");
var baackMuscles = document.getElementsByClassName("baackMuscles");
var principleImage = document.getElementById("principleImage");
var principleImageBV = document.getElementById("principleImageBV");
var takeMeToWorkout = document.getElementById("takeMeToWorkout");
var selectedMuscle = document.getElementById("selectedMuscle");
var maleBodyButton = document.getElementById("maleBodyButton");
var femaleBodyButton = document.getElementById("femaleBodyButton");
var welcomeKingQueen = document.getElementById("welcomeKingQueen");
var principleImage = document.getElementById("principleImage");
var anatomyParagraphSpan = document.getElementById("anatomyParagraphSpan");
var paragraphDiv = document.getElementById("paragraphDiv");
var anatomyImageDiv = document.getElementById("anatomyImageDiv");
var scrollLimit = document.getElementById("scrollLimit");

var selectedMuscleToWorkOut;
var selectedMuscleBoolean = false;
var anatomyDivInterval;

//	Support Function
function StyleBody(element) {element.style.boxShadow = "0px 0px 50px 5px grey"; element.style.borderRadius = "50px";}
function ShowFrontMuscles(muscle) {principleImage.src = muscle.src; StyleBody(muscle);}
function HideFrontMuscles() {principleImage.src = "ProjectMedia/ProjectPictures/MaleBody/body.png"; StyleBody(principleImage);}
function ShowBackMuscles(muscle) {principleImageBV.src = muscle.src; StyleBody(muscle);}
function HideBackMuscles() {principleImageBV.src = "ProjectMedia/ProjectPictures/MaleBody/bodyBV.png"; StyleBody(principleImageBV);}
function SwitchMusclesToOtherGender(visibilityScale) {
	for (var i = 0; i < frontMuscles.length; i++) {frontMuscles[i].style.visibility = visibilityScale;}
	for (var i = 0; i < baackMuscles.length; i++) {baackMuscles[i].style.visibility = visibilityScale;}
}
function StyleGenderButtons(selected, notSelected) {
	selected.style.backgroundColor = "rgb(140, 0, 0)";
	selected.style.color = "white";
	notSelected.style.color = "black";
	notSelected.style.backgroundColor = "white";
	if (selected == femaleBodyButton) {welcomeKingQueen.innerHTML = "Welcome Queen"}
	else {welcomeKingQueen.innerHTML = "Welcome King"};
	welcomeKingQueen.style.visibility = "visible";
	welcomeKingQueen.style.color = "black";
	setTimeout(() => {welcomeKingQueen.style.color = "white"}, 3000);
}
function ShowMuscleInfo(muscleIndex, musclesPicArray, musclesNamesArray, musclesParagraphs) {
	selectedMuscle.innerHTML = musclesNamesArray[muscleIndex];
	anatomyParagraphSpan.innerHTML = musclesParagraphs[muscleIndex];
	anatomyImageDiv.innerHTML = "";
	musclesPicArray[muscleIndex].style.top = 0 + "px";
	musclesPicArray[muscleIndex].style.height = 450 + "px";
	musclesPicArray[muscleIndex].style.width = 420 + "px";
	musclesPicArray[muscleIndex].style.borderRadius = 30 + "px";
	musclesPicArray[muscleIndex].alt = musclesNamesArray[muscleIndex] + "Image";
	anatomyImageDiv.appendChild(musclesPicArray[muscleIndex]);
	selectedMuscleToWorkOut = musclesNamesArray[muscleIndex];
}
function RandomizeInfoDiv() {
	var randomMuscle = Math.floor(Math.random() * frontMusclesNamesArray.length)
	ShowMuscleInfo(randomMuscle, frontMusclesPicArray, frontMusclesNamesArray, frontMusclesParagraphs);
}

principleImage.src = "ProjectMedia/ProjectPictures/MaleBody/body.png";
principleImageBV.src = "ProjectMedia/ProjectPictures/MaleBody/bodyBV.png";
for (let i = 0; i < frontMuscles.length; i++) { //	User Interaction With Muscles
	frontMuscles[i].addEventListener("mouseenter", () => {ShowFrontMuscles(frontMusclesArray[i]);})
	frontMuscles[i].onmouseleave = HideFrontMuscles;
}
for (let i = 0; i < baackMuscles.length; i++) {
	baackMuscles[i].addEventListener("mouseenter", () => {ShowBackMuscles(backMusclesArray[i]);})
	baackMuscles[i].onmouseleave = HideBackMuscles;
}
femaleBodyButton.onclick = function() { //	Gender Switch Script Section
	StyleGenderButtons(femaleBodyButton, maleBodyButton);
	principleImage.src = "ProjectMedia/ProjectPictures/FemaleBody/femaleBody.png";
	principleImageBV.src = "ProjectMedia/ProjectPictures/FemaleBody/femaleBodyBV.png";
	StyleBody(principleImage);
	StyleBody(principleImageBV);
	SwitchMusclesToOtherGender("hidden");
}
maleBodyButton.onclick = function() {
	StyleGenderButtons(maleBodyButton, femaleBodyButton);
	principleImage.src = "ProjectMedia/ProjectPictures/MaleBody/body.png";
	principleImageBV.src = "ProjectMedia/ProjectPictures/MaleBody/bodyBV.png";
	StyleBody(principleImage);
	StyleBody(principleImageBV);
	SwitchMusclesToOtherGender("visible");
}

for (let i = 0; i < frontMuscles.length; i++) {7
	frontMuscles[i].onclick = function() {
		clearInterval(anatomyDivInterval);
		ShowMuscleInfo(i, frontMusclesPicArray, frontMusclesNamesArray, frontMusclesParagraphs);
		scrollLimit.scrollIntoView({behavior: 'smooth'});
	}
}
for (let i = 0; i < baackMuscles.length; i++) {
	baackMuscles[i].onclick = function() {
		clearInterval(anatomyDivInterval);
		ShowMuscleInfo(i, backMusclesPicArray, backMusclesNamesArray, backMusclesParagraphs);
		scrollLimit.scrollIntoView({behavior: 'smooth'});
	}
}
takeMeToWorkout.onclick = function() {
	selectedMuscleBoolean = true;
	localStorage.setItem("selectedMuscleToWorkOut", selectedMuscleToWorkOut);
	localStorage.setItem("selectedMuscleBoolean", selectedMuscleBoolean);
	window.location.href = "EmbededPages/workout/Workout.html";
}
RandomizeInfoDiv();
anatomyDivInterval = setInterval(RandomizeInfoDiv, 2000);