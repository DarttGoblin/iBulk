var coachService = document.getElementById("coachService");
var nutritionService= document.getElementById("nutritionService");
var equipementService = document.getElementById("equipementService");
var groupeFitnessClass = document.getElementById("groupeFitnessClass");
var gymLibrary = document.getElementById("gymLibrary");
var somethingElse = document.getElementById("somethingElse");
var dynamicPhrase = document.getElementById("dynamicPhrase");
var serviceWord = document.getElementById("serviceWord");
setTimeout(() => {
    dynamicPhrase.style.visibility = "visible";
    dynamicPhrase.style.top = 0 + "px";
    dynamicPhrase.style.color = "black";
}, 500);
var specialServiceBtn = document.getElementById("specialServiceBtn");
var specialpara = document.getElementById("specialpara");
var specialTextarea = document.getElementById("specialTextarea");
specialServiceBtn.onclick = function() {
    if (specialTextarea.value == "") {
        specialServiceBtn.style.visibility = "hidden";
        specialServiceBtn.style.opacity = 0;
        specialpara.innerHTML = "Please, make sure to enter your needs!";
        specialpara.style.visibility = "visible";     
        specialpara.style.color = "black";     
        specialpara.style.opacity = 1;        
        specialpara.style.top = -80 + "px";
        setTimeout(() => {
            specialServiceBtn.style.visibility = "visible";
            specialServiceBtn.style.opacity = 1;
            specialpara.style.visibility = "hidden";      
            specialpara.style.opacity = 0;        
            specialpara.style.top = -20 + "px";
        }, 3000);
    }
    else {
        specialServiceBtn.style.visibility = "hidden";
        specialServiceBtn.style.opacity = 0;
        specialpara.style.visibility = "visible";
        specialpara.style.color = "rgb(140,0,0)";
        specialpara.innerHTML = "Your special service has been sent!";      
        specialpara.style.opacity = 1;        
        specialpara.style.top = -80 + "px";   
        setTimeout(() => {
            specialServiceBtn.style.visibility = "visible";
            specialServiceBtn.style.opacity = 1;
            specialpara.style.visibility = "hidden";      
            specialpara.style.opacity = 0;       
            specialpara.style.top = -20 + "px";
        }, 4000);
        var specialTextAreaValue = specialTextarea.value;
        fetch('http://localhost:9000', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({specialTextAreaValue})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {alert("Special Service has been sent successfully");
            } else {
                var errorMessage = "Error sending Special Service: " + data.error; 
                alert(errorMessage);
            }
        })
        .catch(error => {alert('Error sending Special Service:', error);}); 
    }
}

//  Service divs pages linking
var servicesDivs = document.getElementsByClassName("servicesDivs");
var serviceIMGS = document.getElementsByClassName("serviceIMGS");
for (var i = 0; i < servicesDivs.length; i++) {servicesDivs[i].onclick = function() {alert("This service is not available for now, please try again later");}}