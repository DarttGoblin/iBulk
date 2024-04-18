var contentDivs = document.getElementsByClassName("contentDivs");
var moreWorkoutCatergories = document.getElementById("moreWorkoutCatergories");
var workoutButtons = document.getElementsByClassName("workoutButtons");
var WorkoutCatBtns = document.getElementsByClassName("WorkoutCatBtns");
var numberOfCategory = localStorage.getItem("numberOfCategory");

function DifferentPageScale(firstTop, SecondTop) {
    if (window.location.href.includes("iBulk.html")) {moreWorkoutCatergories.style.top = firstTop + "px";}
    else {moreWorkoutCatergories.style.top = SecondTop + "px";}
}
function StyleWorkoutButtonsHoverOn(element) {
    element.style.backgroundColor = "white";
    element.style.color = "black";
    element.style.border = "2px solid black";
}
function StyleWorkoutButtonsHoverOff(element) {
    element.style.backgroundColor = "black";
    element.style.color = "white";
    element.style.border = "2px solid black";
}
function StyleWorkoutButtonsClick(element, clickedButtonIndex) {
    for (let i = 0; i < workoutButtons.length; i++) {StyleWorkoutButtonsHoverOff(workoutButtons[i]);}
    StyleWorkoutButtonsHoverOn(element);
    if (element != workoutButtons[workoutButtons.length - 1]) {
        moreWorkoutCatergories.style.opacity = 0;
        DifferentPageScale(-1430, 0);
        setTimeout(() => {moreWorkoutCatergories.style.visibility = "hidden";}, 300);
    }
    localStorage.setItem("numberOfCategory", clickedButtonIndex);
}
function HideMoreCatButtonFunction(i) {
    workoutButtons[workoutButtons.length - 1].textContent = WorkoutCatBtns[i].textContent;
    clickedCategory = workoutButtons.length + i;
    moreWorkoutCatergories.style.opacity = 0;
    DifferentPageScale(-1420, 0);
    setTimeout(() => {moreWorkoutCatergories.style.visibility = "hidden";}, 300);
}
function ShowMoreCatButtonFunction() {
    moreWorkoutCatergories.style.visibility = "visible";
    moreWorkoutCatergories.style.opacity = 1;
    DifferentPageScale(-1495, -47);
}

if (numberOfCategory == null) {StyleWorkoutButtonsHoverOn(workoutButtons[0]);} // Set initial styling for the first or previous chosen category
else {StyleWorkoutButtonsHoverOn(workoutButtons[numberOfCategory]);}
workoutButtons[workoutButtons.length - 1].addEventListener("click", ShowMoreCatButtonFunction);
for (let i = 0; i < workoutButtons.length; i++) {
    workoutButtons[i].addEventListener("mouseenter", () => {if (workoutButtons[i] != workoutButtons[localStorage.getItem("numberOfCategory")]) {StyleWorkoutButtonsHoverOn(workoutButtons[i]);}});
    workoutButtons[i].addEventListener("mouseleave", () => {if (workoutButtons[i] != workoutButtons[localStorage.getItem("numberOfCategory")]) {StyleWorkoutButtonsHoverOff(workoutButtons[i]);}});
    workoutButtons[i].addEventListener("click", (event) => {StyleWorkoutButtonsClick(event.target, i);});
}
for (let i = 0; i < WorkoutCatBtns.length; i++) {
    WorkoutCatBtns[i].addEventListener("mouseenter", () => {StyleWorkoutButtonsHoverOn(WorkoutCatBtns[i]);});
    WorkoutCatBtns[i].addEventListener("mouseleave", () => {StyleWorkoutButtonsHoverOff(WorkoutCatBtns[i]);});
    WorkoutCatBtns[i].addEventListener("click", () => {HideMoreCatButtonFunction(i);});
}
WorkoutCatBtns[0].style.borderTopLeftRadius = "15px"; 
WorkoutCatBtns[0].style.borderTopRightRadius = "15px"; 
WorkoutCatBtns[WorkoutCatBtns.length - 1].style.borderBottomRightRadius = "15px"; 
WorkoutCatBtns[WorkoutCatBtns.length - 1].style.borderBottomLeftRadius = "15px"; 
workoutButtons[0].style.borderTopLeftRadius = "15px";
workoutButtons[0].style.borderBottomLeftRadius = "15px"; 
workoutButtons[workoutButtons.length - 1].style.borderTopRightRadius = "15px"; 
workoutButtons[workoutButtons.length - 1].style.borderBottomRightRadius = "15px";
DifferentPageScale(-1420, 0);