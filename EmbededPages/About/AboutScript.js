var employeFormSectionBg = document.getElementById("employeFormSectionBg");
var employeFormSection = document.getElementById("employeFormSection");
var professionSelect = document.getElementById("professionSelect");
var countrySelect = document.getElementById("countrySelect");
var sendEmButton = document.getElementById("sendEmButton");
var resetEmButton = document.getElementById("resetEmButton");
var employeInputs = document.getElementsByClassName("employeInputs");
var dropArea = document.getElementById("dropArea");
var fileInput = document.getElementById("fileInput");
var fileNameDisplay = document.getElementById("fileNameDisplay");
var EmClosingForm = document.getElementById("EmClosingForm");
var hiringLink = document.getElementById("hiringLink");
var takeMeTo = document.getElementById("takeMeTo");
var moreInfo = document.getElementById("moreInfo");
var takeMeToLink = document.getElementById("takeMeToLinks");
var moreInfoLink = document.getElementById("moreInfoLinks");
var iBulkDiscriptions = document.getElementsByClassName("iBulkDiscriptions");
var sendResponse = document.getElementById("sendResponse");

var professionsArray = ["Bodybuilding coach", "Medical Assistant", "Motivational coach"];
var countryNames = ["United States", "India", "United Kingdom", "Brazil", "Canada", "Australia", "Germany", "Japan", "South Africa"];
var countryNumbers = ["+1", "+91", "+44", "+55", "+1", "+61", "+49", "+81", "+27"];

var validForm = true;
var emFirstName, emLastName, emAdress, emEmail, emTel, emCountry, emProfession, cvFile;

function FetchToTheServer(emFirstName, emLastName, emAdress, emEmail, emTel, emCountry, emProfession, cvFile) {
    const formData = new FormData();

    formData.append('emFirstName', emFirstName);
    formData.append('emLastName', emLastName);
    formData.append('emAdress', emAdress);
    formData.append('emEmail', emEmail);
    formData.append('emTel', emTel);
    formData.append('emCountry', emCountry);
    formData.append('emProfession', emProfession);
    formData.append('cv', cvFile);

    fetch('https://i-bulk-employee-server.vercel.app/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            setTimeout(() => {sendResponse.innerHTML = "Submission has been sent successfully.";}, 3000);
            setTimeout(() => {
                sendEmButton.style.visibility = "visible";
                resetEmButton.style.visibility = "visible";
                sendResponse.style.visibility = "hidden";      
                sendResponse.style.opacity = 0;       
                sendResponse.style.top = 0 + "px";
            }, 6000);
            // BackToButtons("Submission has been sent successfully.");
        }
        else {
            setTimeout(() => {sendResponse.innerHTML = "An error has been occured.";}, 3000);
            setTimeout(() => {
                sendEmButton.style.visibility = "visible";
                resetEmButton.style.visibility = "visible";
                sendResponse.style.visibility = "hidden";      
                sendResponse.style.opacity = 0;       
                sendResponse.style.top = 0 + "px";
            }, 6000);
            // BackToButtons("An error has been occured.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        setTimeout(() => {sendResponse.innerHTML = "An error has been occured.";}, 3000);
        setTimeout(() => {
            sendEmButton.style.visibility = "visible";
            resetEmButton.style.visibility = "visible";
            sendResponse.style.visibility = "hidden";      
            sendResponse.style.opacity = 0;       
            sendResponse.style.top = 0 + "px";
        }, 6000);
        // BackToButtons("An error has been occured.");
    });
}

function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    document.getElementById('drop-area').style.border = '2px dashed #333';
}
function dropHandler(event) {
    event.preventDefault();
    document.getElementById('drop-area').style.border = '2px dashed #ccc';
    var files = event.dataTransfer.files;
    handleFiles(files);
}
function openFileInput() {fileInput.click();}
function handleFiles(files) {
    fileInput.files = files;
    fileNameDisplay.innerHTML = '';
    for (var i = 0; i < files.length; i++) {
        console.log("Selected file: " + files[i].name);
        fileNameDisplay.innerHTML += 'Selected file: ' + files[i].name + '<br>';
    }
} 
function HideEmForm(visibilityScale, opacityScale) {
    employeFormSectionBg.style.visibility = visibilityScale;
    employeFormSectionBg.style.opacity = opacityScale;
    employeFormSection.style.visibility = visibilityScale;
    employeFormSection.style.opacity = opacityScale;
}
// function BackToButtons(message) {
//     setTimeout(() => {sendResponse.innerHTML = message;}, 3000);
//     setTimeout(() => {
//         sendEmButton.style.visibility = "visible";
//         resetEmButton.style.visibility = "visible";
//         sendResponse.style.visibility = "hidden";      
//         sendResponse.style.opacity = 0;       
//         sendResponse.style.top = 0 + "px";
//     }, 6000);
// }

hiringLink.onclick = function() {HideEmForm("visible", 1);}
EmClosingForm.onclick = function() {HideEmForm("hidden", 0);}
takeMeTo.onclick = function() {
    moreInfoLink.style.visibility = "hidden";
    takeMeToLink.style.visibility = "visible";
}
moreInfo.onclick = function() {
    takeMeToLink.style.visibility = "hidden";
    moreInfoLink.style.visibility = "visible";
}
for (let i = 0; i < iBulkDiscriptions.length; i++) {iBulkDiscriptions[i].onclick = function() {window.scrollTo({top: 0, behavior: 'smooth'});}}
for (var i = 0; i < countryNames.length; i++) {
    var option = document.createElement("option");
    option.text = countryNumbers[i];
    option.value = countryNumbers[i];
    countrySelect.add(option);
}
for (var i = 0; i < professionsArray.length; i++) {
    var option = document.createElement("option");
    option.text = professionsArray[i];
    option.value = i + 1;
    professionSelect.add(option);
}
dropArea.ondragover = function(event) {dragOverHandler(event);}
dropArea.ondrop = function(event) {dropHandler(event);}
dropArea.onclick = function() {openFileInput();}
fileInput.onchange = function() {handleFiles(this.files);}
resetEmButton.onclick = function() {
    for (var i = 0; i < employeInputs.length; i++) {employeInputs[i].value = "";}
    countrySelect.value = "+212";
    professionSelect.value = "Select your profession";
    var newFileInput = document.createElement('input');
    newFileInput.type = 'file';
    newFileInput.id = 'fileInput';
    newFileInput.accept = '.pdf, .doc, .docx';
    newFileInput.onchange = function() {handleFiles(this.files);}
    fileInput.parentNode.replaceChild(newFileInput, fileInput);
    fileInput = newFileInput;
    fileNameDisplay.innerHTML = '';
}
sendEmButton.onclick = function() {
    for (var i = 0; i < employeInputs.length; i++) {
        if (employeInputs[i].value == "") {
            alert("Please fill all the fields before submitting."); 
            return validForm = false;
        }
        else {validForm = true;}
    }
    if (professionSelect.value == "Select your profession") {
        alert("Please choose a profession before submitting."); 
        return validForm = false;
    }
    else if (fileInput.files.length === 0) {
        alert('Please choose a file before submitting.');
        return validForm = false;
    }
    else {validForm = true;}
    if (validForm) {
        sendEmButton.style.visibility = "hidden";
        resetEmButton.style.visibility = "hidden";
        sendResponse.innerHTML = "Submission in process, wait a moment...";
        sendResponse.style.visibility = "visible";
        sendResponse.style.opacity = 1;
        sendResponse.style.top = -50 + "px";
        emFirstName = employeInputs[0].value;
        emLastName = employeInputs[1].value;
        emAdress = employeInputs[2].value;
        emEmail = employeInputs[3].value;
        emTel = employeInputs[4].value;
        emCountry = countrySelect.value;
        emProfession = professionSelect.options[professionSelect.value].text;
        cvFile = fileInput.files[0];
        FetchToTheServer(emFirstName, emLastName, emAdress, emEmail, emTel, emCountry, emProfession, cvFile);
    }
}



