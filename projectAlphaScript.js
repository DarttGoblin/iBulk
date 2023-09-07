//	sliding pictures
var slideIndex = 0;
var slidingSpeed = 5000;
function slidingPictures() {
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	slides[slideIndex-1].style.display = "block";  
	setTimeout(slidingPictures, slidingSpeed);
}
slidingPictures();

// const userAgent = navigator.userAgent;

// const isWindows = /Windows/i.test(userAgent);
// const isLinux = /Linux/i.test(userAgent);

// if (isLinux) {
//   alert("User is accessing from a Windows computer");
// } else if (isWindows) {
//   alert("User is accessing from a Linux computer");
// } else {
//   alert("User is accessing from a non-Windows and non-Linux computer");
// }
// var userAgent = navigator.userAgent;
// alert("User Agent: " + userAgent);
//  Game Teleportation
// var speedyGameButton = document.getElementById("speedyGameButton");
// speedyGameButton.onclick = function() {window.open("ProjectGames/SpeedyGame/speedyGame.html", "_blank")}