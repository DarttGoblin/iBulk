//  animated phrase
var childTitle = document.getElementById("childTitle");
function childTitleFuncion() {
    childTitle.style.visibility = "visible";
    childTitle.style.opacity = 1;
    childTitle.style.top = 20 + "px";
}
setTimeout(childTitleFuncion, 1000); //  intialise animation after 1 second from loading the page

//  the background extended div
var extendedDiv = document.getElementById("extendedDiv");
var rightPic = document.getElementById("rightPic");
var leftPic = document.getElementById("leftPic");
function extend() {
    extendedDiv.style.width = 1300 + "px";
    extendedDiv.style.height = 400 + "px";
    extendedDiv.style.borderTopRightRadius = 20 + "px";
    extendedDiv.style.borderTopLeftRadius = 20 + "px";
}
function ShowExtraMeals() {
    rightPic.style.opacity = 1;
    leftPic.style.opacity = 1;
    rightPic.style.right = 0 + "px";
    leftPic.style.right = 0 + "px";
}
setTimeout(extend, 200);
setTimeout(()=>{
    rightPic.style.display = "inline";
    leftPic.style.display = "inline";
}, 1400);
setTimeout(ShowExtraMeals, 1500);

//  Temporare Event Till Content Is Avainlable
var contentDivs = document.getElementsByClassName("contentDivs");
for (let i = 0; i < contentDivs.length; i++) {contentDivs[i].onclick = function() {alert("This service is not available now, check later!");}}