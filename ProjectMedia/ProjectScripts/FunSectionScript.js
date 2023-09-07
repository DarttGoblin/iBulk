var funSection = document.getElementById("funSection");
var funTitle = document.getElementById("funTitle");
var memesButton = document.getElementById("memesButton");
var gamesButton = document.getElementById("gamesButton");
var gamesOptions = document.getElementsByClassName("gamesOptions");
var funBoolian = false; //  Game Button Is Not Clicked Yet

//	Helping Functions
function ButtonState(element, visibilityScale, opacityScale) {
	element.style.visibility = visibilityScale;
	element.style.opacity = opacityScale;
}
function StyleGameOptions() {
	funTitle.style.filter = "blur(8px)";
	memesButton.style.right = 0 + "px";
	gamesButton.style.right = -100 + "px";
	memesButton.style.opacity = 0;
	gamesButton.innerHTML = "Back";
	funBoolian = true;
}
function ShowGameOptions() {
	for (var i = 0; i < gamesOptions.length; i++) {ButtonState(gamesOptions[i], "visible", 1);}
	memesButton.style.visibility = "hidden";
	funTitle.style.userSelect = "none";
}
function UnstyleGameOptions() {
	for (var i = 0; i < gamesOptions.length; i++) {ButtonState(gamesOptions[i], "visible", 0);}
	memesButton.style.visibility = "visible";
	funTitle.style.filter = "none";
	memesButton.style.right = -200 + "px";
	gamesButton.style.right = -200 + "px";
	memesButton.style.opacity = 1;
	gamesButton.innerHTML = "Games";
	funBoolian = false;
	funTitle.style.userSelect = "text";
}
function HideGameOptions() {for (var i = 0; i < gamesOptions.length; i++) {ButtonState(gamesOptions[i], "hidden", 0);}}

//	User interaction
gamesButton.onclick = function() {
	if (!funBoolian) {StyleGameOptions(); setTimeout(ShowGameOptions, 300);}
	else {UnstyleGameOptions(); setTimeout(HideGameOptions, 300);}
}
memesButton.onclick = function() {alert("This Service Is Not Available Now!");}
for (let i = 0; i < gamesOptions.length; i++) {gamesOptions[i].onclick = function() {alert("This Service Is Not Available Now!");}}