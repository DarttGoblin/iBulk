var quizSection = document.getElementById("quizSection");
var mindBody = document.getElementById("mindBody");
var now = document.getElementById("now");
var nutritionQuiz = document.getElementById("nutritionQuiz");
var anatomyQuiz = document.getElementById("anatomyQuiz");
var workoutQuiz = document.getElementById("workoutQuiz");
var comingSoonOne = document.getElementById("comingSoonOne");
var comingSoonTwo = document.getElementById("comingSoonTwo");
var quizContainer = document.getElementById("quizContainer");
var questionindex = document.getElementById("questionIndex");
var question = document.getElementById("question");
var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");
var optionThree = document.getElementById("optionThree");
var optionFour = document.getElementById("optionFour");
var optionDivs = document.getElementsByClassName("optionDivs");
var optionOneDiv = document.getElementById("optionOneDiv");
var optionTwoDiv = document.getElementById("optionTwoDiv");
var optionThreeDiv = document.getElementById("optionThreeDiv");
var optionFourDiv = document.getElementById("optionFourDiv");
var buttonNextQuestion = document.getElementById("nextQuestion");
var corrAnsInd = document.getElementById("corrAnsInd");
var timerSpan = document.getElementById("timerSpan");
var finishQuiz = document.getElementById("finishQuiz");

var randomQuestion = 0, randomOption = 0, num = 1, correctAnswers = 0
var checked = false, choice;

//  Support Functions
function Random(range) {return Math.floor(Math.random() * range);} //  Return Random Number In A Specific Range To Generate Questions Options
function HideInitialState() { //  Start The Quiz
    mindBody.style.visibility = "hidden";
    nutritionQuiz.style.visibility = "hidden";
    anatomyQuiz.style.visibility = "hidden";
    workoutQuiz.style.visibility = "hidden";
    comingSoonOne.style.visibility = "hidden";
    comingSoonTwo.style.visibility = "hidden";
}
function ShowInitialState() { //  Go Back To The Menu  
    mindBody.style.visibility = "visible";
    nutritionQuiz.style.visibility = "visible";
    anatomyQuiz.style.visibility = "visible";
    workoutQuiz.style.visibility = "visible";
    comingSoonOne.style.visibility = "visible";
    comingSoonTwo.style.visibility = "visible";
    quizContainer.style.visibility = "hidden";
    basicSettingsDiv.style.visibility = "hidden";
    quizSection.style.backgroundImage = "url('ProjectMedia/ProjectPictures/QuizPictures/QuizImage.jpg')";
}
function optionOneMouseEnter() {optionOneDiv.style.backgroundColor = "rgb(5, 184, 184)"; optionOneDiv.style.color = "black";}
function optionTwoMouseEnter() {optionTwoDiv.style.backgroundColor = "rgb(5, 184, 184)"; optionTwoDiv.style.color = "black";}
function optionThreeMouseEnter() {optionThreeDiv.style.backgroundColor = "rgb(5, 184, 184)"; optionThreeDiv.style.color = "black";}
function optionFourMouseEnter() {optionFourDiv.style.backgroundColor = "rgb(5, 184, 184)"; optionFourDiv.style.color = "black";}

function optionOneMouseLeave() {optionOneDiv.style.backgroundColor = "black"; optionOneDiv.style.color = "white";}
function optionTwoMouseLeave() {optionTwoDiv.style.backgroundColor = "black"; optionTwoDiv.style.color = "white";}
function optionThreeMouseLeave() {optionThreeDiv.style.backgroundColor = "black"; optionThreeDiv.style.color = "white";}
function optionFourMouseLeave() {optionFourDiv.style.backgroundColor = "black"; optionFourDiv.style.color = "white";}

function optionDivsRemoveEvent() { //   Disable Interactions When Answer Is Revealed
    optionOneDiv.removeEventListener("mouseenter", optionOneMouseEnter)
    optionTwoDiv.removeEventListener("mouseenter", optionTwoMouseEnter)
    optionThreeDiv.removeEventListener("mouseenter", optionThreeMouseEnter)
    optionFourDiv.removeEventListener("mouseenter", optionFourMouseEnter)
    optionOneDiv.removeEventListener("mouseleave", optionOneMouseLeave)
    optionTwoDiv.removeEventListener("mouseleave", optionTwoMouseLeave)
    optionThreeDiv.removeEventListener("mouseleave", optionThreeMouseLeave)
    optionFourDiv.removeEventListener("mouseleave", optionFourMouseLeave)
}
function optionDivsAddEvent() { //  Enable Interactions
    optionOneDiv.addEventListener("mouseenter", optionOneMouseEnter)
    optionTwoDiv.addEventListener("mouseenter", optionTwoMouseEnter)
    optionThreeDiv.addEventListener("mouseenter", optionThreeMouseEnter)
    optionFourDiv.addEventListener("mouseenter", optionFourMouseEnter)
    optionOneDiv.addEventListener("mouseleave", optionOneMouseLeave)
    optionTwoDiv.addEventListener("mouseleave", optionTwoMouseLeave)
    optionThreeDiv.addEventListener("mouseleave", optionThreeMouseLeave)
    optionFourDiv.addEventListener("mouseleave", optionFourMouseLeave)
}

function Correct(element) { //  Applies If Answer Is Correct
    optionDivsRemoveEvent();
    element.style.backgroundColor = "green";
    element.style.borderColor = "green";
    checked = true;
    num++;
    correctAnswers++;
    setTimeout(() => {
        checked = false;
        for (var i = 0; i < 4; i++) {
            optionDivs[i].style.backgroundColor = ("black");
            optionDivs[i].style.color = ("white");
            optionDivs[i].style.borderColor = "rgb(5, 184, 184)";
        }
        optionDivsAddEvent();
        Quiz();
    }, 2000);
}
function Wrong(element,) { //  Applies If Answer Is Wrong
    optionDivsRemoveEvent();
    element.style.backgroundColor = "red";
    element.style.borderColor = "red";
    checked = true;
    num++;
    setTimeout(() => {
        checked = false;
        for (var i = 0; i < 4; i++) {
            optionDivs[i].style.backgroundColor = ("black");
            optionDivs[i].style.color = ("white");
            optionDivs[i].style.borderColor = "rgb(5, 184, 184)";
        }
        optionDivsAddEvent();
        Quiz();
    }, 2000);
}
function RevealCorrectAnswer(element) {
    element.style.backgroundColor = "green";
    element.style.borderColor = "green";
}
function RandomiseQuesion(array) { //  Randomise The Questions Of The Quiz
    randomQuestion = Random(array.length);
    randomOption = Random(4);
    question.innerHTML = array[randomQuestion];
    questionindex.innerHTML = num;
    corrAnsInd.innerHTML = correctAnswers;
}
function AnswerCheck(element, num) { //  Check For Answer If Its Correct Or Wrong
    element.onclick = function() {
        if (!checked) {
            if (randomOption == num) Correct(element);
            else {
                Wrong(element);
                if (randomOption == 0) RevealCorrectAnswer(optionOneDiv);
                else if (randomOption == 1) RevealCorrectAnswer(optionTwoDiv);
                else if (randomOption == 2) RevealCorrectAnswer(optionThreeDiv);
                else RevealCorrectAnswer(optionFourDiv);
            }
        }
    }
}
function StartQuizSupport(choiceScale) {
    quizSection.style.backgroundImage = "url(" + randomBackgrounds[Random(randomBackgrounds.length)] + ")";
    quizContainer.style.visibility = "visible";
    basicSettingsDiv.style.visibility = "visible";
    correctAnswers = 0;
    choice = choiceScale;
    num = 1;
}
function QuizSupport(TheQuestionsArray, TheOptionsArray) {
    RandomiseQuesion(TheQuestionsArray);
    if (randomOption == 0) {
        optionOne.innerHTML = TheOptionsArray[randomQuestion][0];
        optionTwo.innerHTML = TheOptionsArray[randomQuestion][1];
        optionThree.innerHTML = TheOptionsArray[randomQuestion][2];
        optionFour.innerHTML = TheOptionsArray[randomQuestion][3];
    }
    else if (randomOption == 1) {
        optionTwo.innerHTML = TheOptionsArray[randomQuestion][0];
        optionOne.innerHTML = TheOptionsArray[randomQuestion][1];
        optionThree.innerHTML = TheOptionsArray[randomQuestion][2];
        optionFour.innerHTML = TheOptionsArray[randomQuestion][3];
    }
    else if (randomOption == 2) {
        optionThree.innerHTML = TheOptionsArray[randomQuestion][0];
        optionOne.innerHTML = TheOptionsArray[randomQuestion][1];
        optionTwo.innerHTML = TheOptionsArray[randomQuestion][2];
        optionFour.innerHTML = TheOptionsArray[randomQuestion][3];
    }
    else {
        optionFour.innerHTML = TheOptionsArray[randomQuestion][0];
        optionOne.innerHTML = TheOptionsArray[randomQuestion][1];
        optionTwo.innerHTML = TheOptionsArray[randomQuestion][2];
        optionThree.innerHTML = TheOptionsArray[randomQuestion][3];
    }
}
function Quiz() {
    if (choice == 0) {QuizSupport(nutritionQuestionsArray, nutritionOptionsArray);}
    else if (choice == 1) {QuizSupport(workoutQuestionsArray, workoutOptionsArray);}
    else {QuizSupport(anatomyQuestionsArray, anatomyOptionsArray);}
}

//  User Interaction
now.onclick = function() {
    nutritionQuiz.style.visibility = "visible";
    anatomyQuiz.style.visibility = "visible";
    workoutQuiz.style.visibility = "visible";
    comingSoonOne.style.visibility = "visible";
    comingSoonTwo.style.visibility = "visible";
    nutritionQuiz.style.opacity = 1;
    anatomyQuiz.style.opacity = 1;
    workoutQuiz.style.opacity = 1;
    comingSoonOne.style.opacity = 0.4;
    comingSoonTwo.style.opacity = 0.4;
    nutritionQuiz.style.top = 0 + "px";
    anatomyQuiz.style.top = 0 + "px";
    workoutQuiz.style.top = 0 + "px";
    comingSoonOne.style.top = 0 + "px";
    comingSoonTwo.style.top = 0 + "px";
}
nutritionQuiz.onclick = function() {
    HideInitialState();
    StartQuizSupport(0);
    Quiz();
}
workoutQuiz.onclick = function() {
    HideInitialState();
    StartQuizSupport(1);
    Quiz();
}
anatomyQuiz.onclick = function() {
    HideInitialState();
    StartQuizSupport(2);
    Quiz();
}
comingSoonOne.disabled = true;
comingSoonTwo.disabled = true;
finishQuiz.onclick = function() {ShowInitialState();}

AnswerCheck(optionOneDiv, 0);
AnswerCheck(optionTwoDiv, 1);
AnswerCheck(optionThreeDiv, 2);
AnswerCheck(optionFourDiv, 3);

optionDivsAddEvent();

var seconds = document.getElementById("seconds");
var milliSec = document.getElementById("milliSec");
var milliSecsTimer = 99, timerValue = 5, milliSecStoper = 0;
var questionInterval;

function questionSecsTimer() {
    if (timerValue > 0) {
        if (timerValue > 9) {
            seconds.innerHTML = timerValue;
            timerValue--;
            // optionDivsRemoveEvent();
            // if (randomOption == 0) RevealCorrectAnswer(optionOneDiv);
            // else if (randomOption == 1) RevealCorrectAnswer(optionTwoDiv);
            // else if (randomOption == 2) RevealCorrectAnswer(optionThreeDiv);
            // else RevealCorrectAnswer(optionFourDiv);
            // interval = setInterval(timer, 2000);
            // secsTimer = 1;
            // milliSecsTimer = 0;
        }
        else {
            seconds.innerHTML = "0" + timerValue;
            timerValue--;
        }
    }
    else {
        seconds.innerHTML = "00";
        clearInterval(questionSecsTimer);
        // clearInterval(questionMilliSecsTimer);
        // alert("Time's Up!");
        // next question
    }
}
function questionMilliSecsTimer() {
    if (milliSecsTimer > 0) {
        if (milliSecStoper == timerValue) {
            clearInterval(questionMilliSecsTimer);
            milliSec.innerHTML = "00";
            milliSecsTimer--;
        }
        else {
            if (milliSecsTimer < 10) {milliSec.innerHTML = "0" + milliSecsTimer;}
            else {milliSec.innerHTML = milliSecsTimer;}
            milliSecsTimer--;
        }
    }
    else {
        milliSecsTimer = 99;
        milliSecStoper++;
    }
}
questionSecsTimer();
questionSecsTimer = setInterval(questionSecsTimer, 1000);
questionMilliSecsTimer = setInterval(questionMilliSecsTimer, 10);

var settingsDiv = document.getElementById("settingsDiv");
var quizSettings = document.getElementById("quizSettings");
var basicSettingsDiv = document.getElementById("basicSettingsDiv");
var returnToQuiz = document.getElementById("returnToQuiz");
var adjustTimer = document.getElementById("adjustTimer");
var settingsColors = document.getElementsByClassName("settingsColors");
var changeColor = document.getElementById("changeColor");
var settingsColorsDiv = document.getElementById("settingsColorsDiv");

function SettingsSupport(hiddenElemnt, visibleElement, 
    HEvisiblityScale, HEopacityScale, HErightScale, 
    VEvisiblityScale, VEopacityScale, VErightScale) {
    visibleElement.style.right = VErightScale;
    visibleElement.style.visibility = VEvisiblityScale;
    visibleElement.style.opacity = VEopacityScale;
    hiddenElemnt.style.right = HErightScale;
    hiddenElemnt.style.opacity = HEopacityScale;
    setTimeout(() => {hiddenElemnt.style.visibility = HEvisiblityScale;}, 500);
}

for (var i = 0; i < colors.length; i++) {settingsColors[i].style.color = colors[i];}

quizSettings.onclick = function() {SettingsSupport(basicSettingsDiv, settingsDiv, "hidden", 0, "100px", "visible", 1, "0px");}
returnToQuiz.onclick = function() {SettingsSupport(settingsDiv, basicSettingsDiv, "hidden", 0, "-100px", "visible", 1, "0px");}
changeColor.onclick = function() {SettingsSupport(settingsDiv, settingsColorsDiv, "hidden", 0, "100px", "visible", 1, "0px");}

for (let i = 0; i < settingsColors.length; i++) {
    settingsColors[i].onclick = function() {
        SettingsSupport(settingsColorsDiv, settingsDiv, "hidden", 0, "-100px", "visible", 1, "0px");
        // quizColor = settingsColors[this.i];
        corrAnsSpan.style.color = colors[i];
        timerSpan.style.color = colors[i];
        questionNoSpan.style.color = colors[i];
        for (var j = 0; j < optionDivs.length; j++) {optionDivs[j].style.borderColor = colors[i];}
        questionDiv.style.borderColor = colors[i];
    }
}
adjustTimer.onclick = function() {
    do {
        timerValue = prompt("Enter the new timer value. Must be between 5 and 60: ");
    } while (timerValue < 5 || timerValue > 60);
    // Quiz();
}

var questionDiv = document.getElementById("questionDiv");
var corrAnsSpan = document.getElementById("corrAnsSpan");
var timerSpan = document.getElementById("timerSpan");
var questionNoSpan = document.getElementById("questionNoSpan");