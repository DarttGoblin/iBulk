var programsDivs = document.getElementsByClassName("programsDivs");
var programsArray = [
    "ProgramsEmbededPages/bro_split.html",
    "ProgramsEmbededPages/ppl_split.html",
    "ProgramsEmbededPages/upper_lower_split.html",
    "ProgramsEmbededPages/full_body_split.html",
    "ProgramsEmbededPages/home_workout.html"
];
for (let i = 0; i < programsArray.length; i++) {programsDivs[i].onclick = function() {window.location.href = programsArray[i];}}
for (let i = programsArray.length; i < programsDivs.length; i++) {programsDivs[i].onclick = function() {alert("This program is not available now, check later.");}}