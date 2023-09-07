var signUpSection = document.getElementById("signUpSection");
var signUpSectionForm = document.getElementById("signUpSectionForm");
var principleForm = document.getElementById("principleForm");
var closingTag = document.getElementById("closingTag");
var socialMediaClosingTag = document.getElementById("socialMediaClosingTag");
var signUpSectionFormClosingTag = document.getElementById("signUpSectionFormClosingTag");
var facebookForm = document.getElementById("facebookForm");
var instagramForm = document.getElementById("instagramForm");
var twitterForm = document.getElementById("twitterForm");
var facebook = document.getElementById("facebook");
var instagram = document.getElementById("instagram");
var twitter = document.getElementById("twitter");
facebook.onclick = function() {
	facebookForm.style.visibility = "visible";
	socialMediaClosingTag.style.visibility = "visible";
	socialMediaClosingTag.style.color = "rgb(1, 82, 203)";
	instagramForm.style.visibility = "hidden";
	twitterForm.style.visibility = "hidden";
}
instagram.onclick = function() {
	instagramForm.style.visibility = "visible";
	socialMediaClosingTag.style.visibility = "visible";
	socialMediaClosingTag.style.color = "rgba(254, 90, 249, 0.569)";
	twitterForm.style.visibility = "hidden";
	facebookForm.style.visibility = "hidden";
}
twitter.onclick = function() {
	twitterForm.style.visibility = "visible";
	socialMediaClosingTag.style.visibility = "visible";
	socialMediaClosingTag.style.color = "rgb(112, 169, 255) ";
	facebookForm.style.visibility = "hidden";
	instagramForm.style.visibility = "hidden";
}
closingTag.onclick = function() {
    LoginPlatformeBackground.style.visibility = "hidden";
	principleForm.style.visibility = "hidden";
	closingTag.style.visibility = "hidden";
	facebookForm.style.visibility = "hidden";
	instagramForm.style.visibility = "hidden";
	twitterForm.style.visibility = "hidden";
	socialMediaClosingTag.style.visibility = "hidden";
	signUpSectionForm.style.visibility = "hidden";
	signUpSectionFormClosingTag.style.visibility = "hidden";
}
socialMediaClosingTag.onclick = function() {
	facebookForm.style.visibility = "hidden";
	instagramForm.style.visibility = "hidden";
	twitterForm.style.visibility = "hidden";
	socialMediaClosingTag.style.visibility = "hidden";
}
signUpSection.onclick = function() {
	signUpSectionForm.style.visibility = "visible";
	signUpSectionFormClosingTag.style.visibility = "visible";
	facebookForm.style.visibility = "hidden";
	instagramForm.style.visibility = "hidden";
	twitterForm.style.visibility = "hidden";
	socialMediaClosingTag.style.visibility = "hidden";
}
signUpSectionFormClosingTag.onclick = function() {
	signUpSectionForm.style.visibility = "hidden";
	signUpSectionFormClosingTag.style.visibility = "hidden";
}
var login = document.getElementById("login");
var LoginPlatformeBackground = document.getElementById("LoginPlatformeBackground");
login.onclick = function() {
    LoginPlatformeBackground.style.visibility = "visible";
    principleForm.style.visibility = "visible";
    closingTag.style.visibility = "visible";
}

var eyeIconBoolean = false; //	Password Is Invisible By Default
var eyeIcon = document.getElementById("eyeIcon");
var signUpSectionInputEyeClassList = document.getElementById("signUpSectionInputEyeClassList");
eyeIcon.onclick = function() {
	if (!eyeIconBoolean) { //	Password Is Invisible
		signUpSectionInputEyeClassList.type = "text";
		eyeIcon.classList.remove("fa-eye");
		eyeIcon.classList.add("fa-eye-slash");
		eyeIconBoolean = true;
	}
	else { //	Password Is Visible
		signUpSectionInputEyeClassList.type = "password";
		eyeIcon.classList.remove("fa-eye-slash");
		eyeIcon.classList.add("fa-eye");
		eyeIconBoolean = false;
	}
}