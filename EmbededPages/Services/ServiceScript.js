var coachService = document.getElementById("coachService");
var nutritionService= document.getElementById("nutritionService");
var equipementService = document.getElementById("equipementService");
var groupeFitnessClass = document.getElementById("groupeFitnessClass");
var gymLibrary = document.getElementById("gymLibrary");
var somethingElse = document.getElementById("somethingElse");
var dynamicPhrase = document.getElementById("dynamicPhrase");
var serviceWord = document.getElementById("serviceWord");
var specialServiceBtn = document.getElementById("specialServiceBtn");
var specialpara = document.getElementById("specialpara");
var specialTextarea = document.getElementById("specialTextarea");

// function BackToButtons(message) {
//     setTimeout(() => {specialpara.innerHTML = message;}, 4000);
//     setTimeout(() => {
//         specialServiceBtn.style.visibility = "visible";
//         specialServiceBtn.style.opacity = 1;
//         specialpara.style.visibility = "hidden";      
//         specialpara.style.opacity = 0;       
//         specialpara.style.top = -20 + "px";
//     }, 8000);
// }

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
        specialpara.innerHTML = "Your request is being processed, please wait a moment...";      
        specialpara.style.opacity = 1;        
        specialpara.style.top = -80 + "px";   
        var specialTextAreaValue = specialTextarea.value;
        fetch('https://i-bulk-special-server-upqd.vercel.app/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({specialTextAreaValue})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setTimeout(() => {specialpara.innerHTML = "Your request has been successfully sent.";}, 2000);
                setTimeout(() => {
                    specialServiceBtn.style.visibility = "visible";
                    specialServiceBtn.style.opacity = 1;
                    specialpara.style.visibility = "hidden";      
                    specialpara.style.opacity = 0;       
                    specialpara.style.top = -20 + "px";
                }, 5000);
                // BackToButtons("Your request has been successfully sent.");
            } 
            else {
                setTimeout(() => {specialpara.innerHTML = "Error sending request, try again later.";}, 2000);
                setTimeout(() => {
                    specialServiceBtn.style.visibility = "visible";
                    specialServiceBtn.style.opacity = 1;
                    specialpara.style.visibility = "hidden";      
                    specialpara.style.opacity = 0;       
                    specialpara.style.top = -20 + "px";
                }, 5000);
                // BackToButtons("Error sending request, try again later.");}
            }
        })
        .catch(error => {
            console.log(error);
            setTimeout(() => {specialpara.innerHTML = "Error sending request, try again later.";}, 2000);
                setTimeout(() => {
                    specialServiceBtn.style.visibility = "visible";
                    specialServiceBtn.style.opacity = 1;
                    specialpara.style.visibility = "hidden";      
                    specialpara.style.opacity = 0;       
                    specialpara.style.top = -20 + "px";
                }, 5000);
        }); 
    }
}

//  Service divs pages linking
var servicesDivs = document.getElementsByClassName("servicesDivs");
var serviceIMGS = document.getElementsByClassName("serviceIMGS");

for (let i = 0; i < servicesDivs.length; i++) {servicesDivs[i].onclick = function() {alert("This service is not available for now, please try again later");}}
servicesDivs[4].onclick = function() {window.location.href = "ServicesEmbededPages/Sweat&Wisdom/Sweat&Wizdom.html";}