var AlphaTeamlogoPicture = document.getElementById("AlphaTeamlogoPicture");
var iBulkFooterHeading = document.getElementById("iBulkFooterHeading");
var switchColor = true;
var whiteChosenSRC;
var redChosenSRC;

if (window.location.href.includes("iBulk.html")) {
    whiteChosenSRC = "Global-Media/whiteAlphaTeam.jpg";
    redChosenSRC = "Global-Media/redAlphaTeam.jpg";
}
else {
    whiteChosenSRC = "../../Global-Media/whiteAlphaTeam.jpg";
    redChosenSRC = "../../Global-Media/redAlphaTeam.jpg";
}

AlphaTeamlogoPicture.src = whiteChosenSRC;

function footerAnimation() {
    if (!switchColor) {
        AlphaTeamlogoPicture.src = whiteChosenSRC;
        AlphaTeamlogoPicture.alt = "alpha-team-picture";
        iBulkFooterHeading.style.color = "rgb(140, 0, 0)";
        switchColor = true;
    }
    else {
        AlphaTeamlogoPicture.src = redChosenSRC;
        AlphaTeamlogoPicture.alt = "alpha-team-picture";
        iBulkFooterHeading.style.color = "white";
        switchColor = false;
    }
}

footerInterval = setInterval(footerAnimation, 500);

AlphaTeamlogoPicture.onmouseenter = function() {clearInterval(footerInterval);}
AlphaTeamlogoPicture.onmouseleave = function() {footerInterval = setInterval(footerAnimation, 500);}

var feedBackSubmit = document.getElementById("feedBackSubmit");
var feedBackSpan = document.getElementById("feedBackSpan"); 
var feedBackDiv = document.getElementById("feedBackDiv");
var thanksSpan = document.getElementById("thanksSpan");
var footerGoBack = document.getElementById("footerGoBack");
var feedBackInput = document.getElementById("feedBackInput");
var feedBackSent = false;

var footerDiscreptionDiv = document.getElementById("footerDiscreptionDiv");

function StyleFeedBack(displayScaleOne, displayScaleTwo) {
    footerDiscreptionDiv.style.display = displayScaleOne;
    feedBackDiv.style.display = displayScaleTwo;
}
function StyleFeedBackSent(string,) {
    feedBackSubmit.style.visibility = "hidden";
    footerGoBack.style.visibility = "hidden";
    thanksSpan.innerHTML = string;
    thanksSpan.style.visibility = "visible";
    thanksSpan.style.opacity = 1;
    thanksSpan.style.top = -45 +"px";
    setTimeout(() => {
        feedBackSubmit.style.visibility = "visible";
        footerGoBack.style.visibility = "visible";
        thanksSpan.style.visibility = "hidden";
        thanksSpan.style.opacity = 0;
        thanksSpan.style.top = -8 +"px";
    }, 3000);
}

feedBackSpan.onclick = function() {StyleFeedBack("none", "inline-block");}
feedBackSubmit.onclick = function() {
    if (feedBackInput.value == "") {StyleFeedBackSent("Please Make sure to enter your feedback!");}
    else {
        var submittedFeedback = feedBackInput.value;
        fetch('http://localhost:10000', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({submittedFeedback})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {alert("Feedback has been sent successfully");
            } else {
                var errorMessage = "Error sending Feedback: " + data.error; 
                alert(errorMessage);
            }
        })
        .catch(error => {alert('Error sending Feedback:', error);}); 
        StyleFeedBackSent("Your feed back is sent. Thanks!");
    }
}
footerGoBack.onclick = function() {StyleFeedBack("block", "none");}

//  Footer Links Script
var footerLinks = document.getElementsByClassName("footerLinks");
var footerLinksArray;
if (window.location.href.includes("projectAlpha8.html")) {
    footerLinksArray = ["projectAlpha8.html",
    "EmbededPages/programsPage/programs.html",
    "EmbededPages/workoutPage/workout.html",
    "EmbededPages/nutritionPage/nutrition.html",
    "EmbededPages/servicesPage/services.html",
    "EmbededPages/aboutPage/aboutSection.html",
    "EmbededPages/contactUsPage/contactUs.html"];
}
else {
    footerLinksArray = ["../../projectAlpha8.html",
    "../programsPage/programs.html",
    "../workoutPage/workout.html",
    "../nutritionPage/nutrition.html",
    "../servicesPage/services.html",
    "../aboutPage/aboutSection.html",
    "../contactUsPage/contactUs.html"];
}
for (let i = 0; i < footerLinks.length; i++) {footerLinks[i].onclick = function() {window.location.href = footerLinksArray[i];}}

//  Social Media Script
var socialMediaIcons = document.getElementsByClassName("socialMediaIcons");
var socialMediaArray = ["https://www.facebook.com/profile.php?id=100094572798608",
"https://twitter.com/iBulk_69",
"https://www.instagram.com/ibulk_fitness/",
"https://www.tiktok.com/@ibulk69",
""];
for (let i = 0; i < socialMediaIcons.length; i++) {socialMediaIcons[i].onclick = function() {window.open(socialMediaArray[i], "_blank");}}