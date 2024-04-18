var AlphaTeamlogoPicture = document.getElementById("AlphaTeamlogoPicture");
var iBulkFooterHeading = document.getElementById("iBulkFooterHeading");
var switchColor = true;
var whiteChosenSRC;
var redChosenSRC;

if (window.location.href.includes("iBulk.html")) {
    whiteChosenSRC = "ProjectMedia/ProjectPictures/FitnessPictures/whiteAlphaTeam.jpg";
    redChosenSRC = "ProjectMedia/ProjectPictures/FitnessPictures/redAlphaTeam.jpg";
}
else if ( //    iBulk embeded pages
    window.location.href.includes("Programs.html") ||
    window.location.href.includes("Workout.html") ||
    window.location.href.includes("Nutrition.html") ||
    window.location.href.includes("Services.html") ||
    window.location.href.includes("About.html")) {
        whiteChosenSRC = "../../ProjectMedia/ProjectPictures/FitnessPictures/whiteAlphaTeam.jpg";
        redChosenSRC = "../../ProjectMedia/ProjectPictures/FitnessPictures/redAlphaTeam.jpg";
}
else if (window.location.href.includes("Sweat&Wizdom.html")) { //   Services embeded pages
    whiteChosenSRC = "../../../../ProjectMedia/ProjectPictures/FitnessPictures/whiteAlphaTeam.jpg";
    redChosenSRC = "../../../../ProjectMedia/ProjectPictures/FitnessPictures/redAlphaTeam.jpg";
}
else if (
    window.location.href.includes("Meat.html") || 
    window.location.href.includes("Grains.html") ||
    window.location.href.includes("Fats.html") ||
    window.location.href.includes("Nuts.html") ||
    window.location.href.includes("Vegetables.html") ||
    window.location.href.includes("Fruits.html") ||
    window.location.href.includes("Dairy.html") ||
    window.location.href.includes("MealPlan1.html") ||
    window.location.href.includes("MealPlan2.html") ||
    window.location.href.includes("MealPlan3.html")) { //    iBulkDictionary embeded pages
        whiteChosenSRC = "../../../../../ProjectMedia/ProjectPictures/FitnessPictures/whiteAlphaTeam.jpg";
        redChosenSRC = "../../../../../ProjectMedia/ProjectPictures/FitnessPictures/redAlphaTeam.jpg";
}
else {
    whiteChosenSRC = "../../../../ProjectMedia/ProjectPictures/FitnessPictures/whiteAlphaTeam.jpg";
    redChosenSRC = "../../../../ProjectMedia/ProjectPictures/FitnessPictures/redAlphaTeam.jpg";
}

AlphaTeamlogoPicture.src = whiteChosenSRC;

function footerAnimation() {
    if (!switchColor) {
        AlphaTeamlogoPicture.src = whiteChosenSRC;
        AlphaTeamlogoPicture.alt = "we-bulk-picture";
        iBulkFooterHeading.style.color = "rgb(140, 0, 0)";
        switchColor = true;
    }
    else {
        AlphaTeamlogoPicture.src = redChosenSRC;
        AlphaTeamlogoPicture.alt = "we-bulk-picture";
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

var footerDiscreptionDiv = document.getElementById("footerDiscreptionDiv");

function StyleFeedBack(displayScaleOne, displayScaleTwo) {
    footerDiscreptionDiv.style.display = displayScaleOne;
    feedBackDiv.style.display = displayScaleTwo;
}
function BackToButtons(message) {
    setTimeout(() => {thanksSpan.innerHTML = message;}, 4000);
    setTimeout(() => {
        feedBackSubmit.style.visibility = "visible";
        footerGoBack.style.visibility = "visible";
        thanksSpan.style.visibility = "hidden";
        thanksSpan.style.opacity = 0;
        thanksSpan.style.top = -8 +"px";
    }, 8000);
}

feedBackSpan.onclick = function() {StyleFeedBack("none", "inline-block");}
feedBackSubmit.onclick = function() {
    if (feedBackInput.value == "") {
        feedBackSubmit.style.visibility = "hidden";
        footerGoBack.style.visibility = "hidden";
        thanksSpan.innerHTML = "Make sure to enter your feedback";
        thanksSpan.style.color = "black";
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
    else {
        feedBackSubmit.style.visibility = "hidden";
        footerGoBack.style.visibility = "hidden";
        thanksSpan.innerHTML = "Your feedback is being processed, please wait a moment...";
        thanksSpan.style.color = "rgb(140, 0, 0)";
        thanksSpan.style.visibility = "visible";
        thanksSpan.style.opacity = 1;
        thanksSpan.style.top = -45 +"px";
        var submittedFeedback = feedBackInput.value;
        fetch('https://i-bulk-feedback-server.vercel.app/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({submittedFeedback})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {BackToButtons("Thanks, your feedback has been sent successfully.");}
            else {BackToButtons("Oops! An error has been occured, try again later.");}
        })
        .catch(error => {
            console.log(error);
            BackToButtons("Oops! An error has been occured, try again later.");
        }); 
    }
}
footerGoBack.onclick = function() {StyleFeedBack("block", "none");}

//  Emojis Script
var emojisDiv = document.getElementById("emojisDiv");
var emojisContainer = document.getElementById("emojisContainer");
var emojisClose = document.getElementById("emojisClose");
var emojisSpan = document.getElementById("emojisSpan");
var emojis = document.getElementsByClassName("emojis");

var emojisArray = [
    "&#10084;&#65039;", /*❤️*/ 
    "&#128512", /*😊*/ "&#128525", /*😍*/ "&#128526", /*😎*/ "&#129392", /*🥰*/ "&#129321", /*🤩*/
    "&#128514", /*😂*/ "&#129315", /*🤣*/ "&#128514", /*😅*/ "&#128516", /*😆*/ "&#128515", /*😁*/ 
    "&#128540", /*😜*/ "&#128523", /*😋*/ "&#129303", /*🤗*/ "&#129300", /*🤔*/ "&#128580", /*🙄*/
    "&#128527", /*😏*/ "&#128534", /*😒*/ "&#128527", /*😌*/ "&#128546", /*😢*/ "&#128557", /*😭*/
    "&#128552", /*😨*/ "&#128561", /*😱*/ "&#128563", /*😳*/ "&#129402", /*🥺*/ "&#128545", /*😡*/
    "&#128548", /*😤*/ "&#128567", /*😷*/ "&#129327", /*🤒*/ "&#129326", /*🤢*/ "&#129328", /*🤮*/
    "&#128153", /*💙*/ "&#128154", /*💚*/" &#128155", /*💛*/ "&#128156", /*💜*/ "&#129505", /*🧡*/  
    "&#128151", /*💖*/ "&#128150", /*💗*/ "&#128105", /*👩*/ "&#128104", /*👨*/ "&#128103", /*👧*/  
    "&#128102", /*👦*/ "&#128118", /*👶*/ "&#129501", /*🧑*/ "&#129504", /*🧒*/ "&#128117", /*👵*/
    "&#128079", /*👏*/ "&#128077", /*👍*/ "&#128078", /*👎*/ "&#128076", /*👌*/ "&#9995", /*✋*/
    "&#129310", /*🤚*/ "&#9996", /*🖐️*/ "&#129310", /*🤞*/ "&#128080", /*👐*/ "&#129309", /*🤝*/
    "&#128640", /*🚀*/ "&#127752", /*🌈*/ "&#127829", /*🍕*/ "&#127881", /*🎉*/ "&#127942", /*🏆*/
    "&#129412", /*🦄*/ "&#127846", /*🍦*/ "&#127821", /*🍍*/ "&#127928", /*🎸*/ "&#127757", /*🌍*/
    "&#128214", /*📚*/ "&#127880", /*🎈*/ "&#127802", /*🌺*/ "&#127849", /*🍩*/ "&#127964", /*🏖️*/
    "&#127917", /*🎭*/ "&#128690", /*🚲*/ "&#128641", /*🚁*/ "&#127912", /*🎨*/ "&#127853", /*🍭*/
    "&#127775", /*🌟*/ "&#128663", /*🚗*/ "&#127815", /*🍇*/ "&#127911", /*🎧*/ "&#127828", /*🍔*/
    "&#127922", /*🎲*/ "&#128247", /*📷*/ "&#128674", /*🚢*/ "&#127984", /*🏰*/ "&#128640", /*🚀*/
    "&#127865", /*🍹*/ "&#127940", /*🏄‍♂️*/ "&#127790", /*🌮*/ "&#127936", /*🏀*/ "&#127913", /*🎩*/
    "&#127747", /*🌙*/ "&#127839", /*🍟*/ "&#127908", /*🎤*/ "&#128044", /*🐬*/ "&#127795", /*🌳*/
    "&#128116", /*👴*/ "&#128145", /*💑*/ "&#127801", /*🌹*/ "&#129344", /*🥀*/ "&#127989" /*🏵️*/
];

function EmojisState(visibilityScale, opacityScale) {
    emojisDiv.style.visibility = visibilityScale;
    emojisDiv.style.opacity = opacityScale;
}

for (var i = 0; i < emojisArray.length; i++) {
    var emojiSpan = document.createElement("span");
    emojiSpan.innerHTML = emojisArray[i];
    emojiSpan.classList.add("emojis");
    emojisContainer.append(emojiSpan);
}
for (let i = 0; i < emojisArray.length; i++) {emojis[i].onclick = function() {
    var emojiSpan = document.createElement("span");
    emojiSpan.innerHTML = emojisArray[i];
    feedBackInput.value += emojiSpan.textContent;}
}
emojisSpan.onclick = function() {EmojisState("visible", 1);}
emojisClose.onclick = function() {EmojisState("hidden", 0);}

//  Social Media Script
var socialMediaIcons = document.getElementsByClassName("socialMediaIcons");
var socialMediaArray = [
    "https://www.facebook.com/profile.php?id=100094572798608",
    "https://twitter.com/iBulk_69",
    "https://www.instagram.com/ibulk_fitness/",
    "https://www.tiktok.com/@ibulk69",
    ""
];
for (let i = 0; i < socialMediaIcons.length; i++) {socialMediaIcons[i].onclick = function() {window.open(socialMediaArray[i], "_blank");}}