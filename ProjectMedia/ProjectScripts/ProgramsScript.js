var helpTimer = document.getElementById("helpTimer");
var helpDownload = document.getElementById("helpDownload");
var setTimer = document.getElementById("setTimer");
var startTimer = document.getElementById("startTimer");
var resetTimer = document.getElementById("resetTimer");
var removeTimer = document.getElementById("removeTimer");
var weeks = document.getElementById("weeks");
var days = document.getElementById("days");
var downloadButton = document.getElementById("downloadButton");
var programParagraph = document.getElementById("programParagraph");
var programTitle = document.getElementById("programTitle");

function TimeTracker(enteredTime) {
    var currentDate = new Date();
    var expirationDate = new Date(currentDate);
    expirationDate.setDate(expirationDate.getDate() + enteredTime);
    return Math.ceil(Math.abs(expirationDate - currentDate) / (1000 * 60 * 60 * 24));
}

helpTimer.onclick = function() {alert("This section is designed to help you track the time remaining for changing your workout program due to muscle shock. You won't be able to start another program while one is in progress. Choose the duration of your plan, typically suggested between 4 to 8 weeks. Good luck!");}
helpDownload.onclick = function() {alert("You can download the workout plan on your device in PDF format to have access while you are offline!");}

setTimer.onclick = function() {
    var timeLeft;
    var setTimerRequest = prompt("Enter your workout plan duration in weeks: ");
    if (setTimerRequest <= 0 || setTimerRequest > 100) {alert("Invalid input, please insert a value between 1 and 100!");}
    else if (setTimerRequest != null && setTimerRequest != "") {
        var planTimeInDays = setTimerRequest * 7;
        if (setTimerRequest < 4 || setTimerRequest > 8) {alert("The recommended time to stick with a workout program before changing is about 4 to 8 weeks before making significant changes.");}
        timeLeft = TimeTracker(planTimeInDays);
        weeks.innerHTML = timeLeft / 7;
        days.innerHTML = timeLeft % 7;
        fetch('http://localhost:8071', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({planTimeInDays})
        })
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch(error => {console.log(error)});
    } 
}
startTimer.onclick = function() {
    // if (fs.existsSync("WorkoutPlanTime.txt")) {
    //     console.log('File exists.');
    // } else {
    //     console.log('File does not exist.');
    // }
    //	if the file is empty you can start a one, else you cant because anothor program is in progress
    //	use the setinstervel with 1000 * 60 * 60 * 5 duration
}
resetTimer.onclick = function() {/*reset the file that contains the program timer*/}
removeTimer.onclick = function() {/*delete the file that contains the program timer*/}

downloadButton.onclick = function() {
    var programParagraphTextContent = programParagraph.textContent;
    var programTitleTextContent = programTitle.textContent;
    fetch('http://localhost:8070', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({programParagraphTextContent, programTitleTextContent})
    })
    .then(response => response.json())
    .then(data => {console.log(data)})
    .catch(error => {console.log(error)}); 
}