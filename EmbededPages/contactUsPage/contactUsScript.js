var yassineInfo = document.getElementById("yassineInfo"); 
var yassinePicture = document.getElementById("yassinePicture"); 
var anonymousOneInfo = document.getElementById("anonymousOneInfo"); 
var anonymousOnePic = document.getElementById("anonymousOnePic");
var anonymousTwoInfo = document.getElementById("anonymousTwoInfo");
var anonymousTwoPic = document.getElementById("anonymousTwoPic");
var anonymousThreeInfo = document.getElementById("anonymousThreeInfo");
var anonymousThreePic = document.getElementById("anonymousThreePic");
var yassineCopiedEmail = document.getElementById("yassineCopiedEmail");

function AdjustWhenMouseEnter(userInfo, userPicture, rightScale) {
	userInfo.style.height = 633 + "px";
	userInfo.style.width = 441 + "px";
	userInfo.style.right = rightScale + "px";
	userPicture.style.height = 204 + "px";
	userPicture.style.width = 202 + "px";
}
function AdjustWhenMouseLeave(userInfo, userPicture, rightScale) {
	userInfo.style.height = 603 + "px";
	userInfo.style.width = 411 + "px";
	userInfo.style.right = rightScale + "px";
	userPicture.style.height = 174 + "px";
	userPicture.style.width = 172 + "px";
}
function CopyEmail() {
	var tempInput = document.createElement("textarea");
	tempInput.value = "yassine.bazgour@gmail.com"; 
	document.body.appendChild(tempInput);
	tempInput.select();
	try {
		const copied = document.execCommand("copy");
		if (copied) {
			alert("Email has been successfully copied");
		}
	} catch (err) {
		console.error("Failed to copy text:", err);
	}
	document.body.removeChild(tempInput);
}
			
//	Copy Founder Information
yassineCopiedEmail.onclick = CopyEmail;

//	User Interaction
yassineCopiedEmail.addEventListener("mouseenter", () => {
	AdjustWhenMouseEnter(yassineInfo, yassinePicture, 635);
	yassineInfo.style.boxShadow = "0px 0px 10px 20px rgb(74, 74, 74)";
})

yassineInfo.addEventListener("mouseenter", () => {
	AdjustWhenMouseEnter(yassineInfo, yassinePicture, 635);
	yassineInfo.style.boxShadow = "0px 0px 10px 20px rgb(74, 74, 74)";
})
yassineInfo.addEventListener("mouseleave", () => {
	AdjustWhenMouseLeave(yassineInfo, yassinePicture, 650);
	yassineInfo.style.boxShadow = "0px 0px 5px 10px rgb(74, 74, 74)";
})
yassinePicture.addEventListener("mouseenter", () => {
	AdjustWhenMouseEnter(yassineInfo, yassinePicture, 635);
	yassineInfo.style.boxShadow = "0px 0px 10px 20px rgb(74, 74, 74)";
})
yassinePicture.addEventListener("mouseleave", () => {
	AdjustWhenMouseLeave(yassineInfo, yassinePicture, 650);
	yassineInfo.style.boxShadow = "0px 0px 5px 10px rgb(74, 74, 74)";
})

anonymousOneInfo.addEventListener("mouseenter", () => {
	AdjustWhenMouseEnter(anonymousOneInfo, anonymousOnePic, 160);
	anonymousOneInfo.style.boxShadow = "0px 0px 10px 20px rgba(184, 120, 131, 0.956)";
	anonymousOnePic.style.right = 275 + "px";
})
anonymousOneInfo.addEventListener("mouseleave", () => {
	AdjustWhenMouseLeave(anonymousOneInfo, anonymousOnePic, 175);
	anonymousOneInfo.style.boxShadow = "0px 0px 5px 10px rgba(137, 89, 97, 0.956)";
	anonymousOnePic.style.right = 290 + "px";
})
anonymousOnePic.addEventListener("mouseenter", () => {
	AdjustWhenMouseEnter(anonymousOneInfo, anonymousOnePic, 160);
	anonymousOneInfo.style.boxShadow = "0px 0px 10px 20px rgba(184, 120, 131, 0.956)";
	anonymousOnePic.style.right = 275 + "px";
})
anonymousTwoInfo.addEventListener("mouseenter", () => {
	AdjustWhenMouseEnter(anonymousTwoInfo, anonymousTwoPic, 635);
	anonymousTwoInfo.style.boxShadow = "0px 0px 10px 20px rgb(0, 194, 222)";
	anonymousTwoPic.style.right = 800 + "px";
})
anonymousTwoInfo.addEventListener("mouseleave", () => {
	AdjustWhenMouseLeave(anonymousTwoInfo, anonymousTwoPic, 650);
	anonymousTwoInfo.style.boxShadow = "0px 0px 5px 10px rgb(0, 147, 188)";
	anonymousTwoPic.style.right = 815 + "px";
})
anonymousTwoPic.addEventListener("mouseenter", () => {
	AdjustWhenMouseEnter(anonymousTwoInfo, anonymousTwoPic, 635);
	anonymousTwoInfo.style.boxShadow = "0px 0px 10px 20px rgb(0, 194, 222)";
	anonymousTwoPic.style.right = 800 + "px";
})
anonymousThreeInfo.addEventListener("mouseenter", () => {
	AdjustWhenMouseEnter(anonymousThreeInfo, anonymousThreePic, 105);
	anonymousThreeInfo.style.boxShadow = "0px 0px 10px 20px rgb(220, 0, 0)";
	anonymousThreePic.style.right = 275 + "px";
})
anonymousThreeInfo.addEventListener("mouseleave", () => {
	AdjustWhenMouseLeave(anonymousThreeInfo, anonymousThreePic, 120);
	anonymousThreeInfo.style.boxShadow = "0px 0px 5px 10px rgb(183, 0, 0)";
	anonymousThreePic.style.right = 290 + "px";
})
anonymousThreePic.addEventListener("mouseenter", () => {
	AdjustWhenMouseEnter(anonymousThreeInfo, anonymousThreePic, 105);
	anonymousThreeInfo.style.boxShadow = "0px 0px 10px 20px rgb(220, 0, 0)";
	anonymousThreePic.style.right = 275 + "px";
})
var contactUsSpan = document.getElementById("contactUsSpan");
var heart = document.getElementById("heart");
contactUsSpan.style.visibility = "visible";
setTimeout(() => {
	contactUsSpan.style.opacity = 1;
	contactUsSpan.style.right = 0 + "px";
}, 1000);
setTimeout(function() {
	heart.style.opacity = 1;
}, 2000);