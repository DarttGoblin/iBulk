var signUpSection = document.getElementById("signUpSection");
var signUpSectionForm = document.getElementById("signUpSectionForm");
var principleForm = document.getElementById("principleForm");
var closingTag = document.getElementById("closingTag");
var signUpSectionFormClosingTag = document.getElementById("signUpSectionFormClosingTag");
var login = document.getElementById("login");
var LoginPlatformeBackground = document.getElementById("LoginPlatformeBackground");
var eyeIconBoolean = false; //	Password Is Invisible By Default
var eyeIcon = document.getElementById("eyeIcon");
var signUpSectionInputEyeClassList = document.getElementById("signUpSectionInputEyeClassList");
var principleFormInputEyeClassList = document.getElementById("principleFormInputEyeClassList");
var eyeIconTwo = document.getElementById("eyeIconTwo");
var eyeIconTwoBoolean = false;

function SupFunc(visibility) {
	signUpSectionForm.style.visibility = visibility;
	signUpSectionFormClosingTag.style.visibility = visibility;
}
function PasswordVisibility(eye, password, boolean) {
	if (!boolean) { //	Password Is Invisible
		password.type = "text"
		eye.classList.remove("fa-eye");
		eye.classList.add("fa-eye-slash");
		return true;
	}
	else { //	Password Is Visible
		password.type = "password";
		eye.classList.remove("fa-eye-slash");
		eye.classList.add("fa-eye");
		return false;
	}
}

closingTag.onclick = function() {
    LoginPlatformeBackground.style.visibility = "hidden";
    LoginPlatformeBackground.style.opacity = 0;
	principleForm.style.visibility = "hidden";
	principleForm.style.opacity = 0;
	closingTag.style.visibility = "hidden";
	SupFunc("hidden");
}
signUpSection.onclick = function() {SupFunc("visible")}
signUpSectionFormClosingTag.onclick = function() {SupFunc("hidden")}
login.onclick = function() {
    LoginPlatformeBackground.style.visibility = "visible";
    LoginPlatformeBackground.style.opacity = 1;
    principleForm.style.visibility = "visible";
    principleForm.style.opacity = 1;
    closingTag.style.visibility = "visible";
}
eyeIcon.onclick = function() {eyeIconBoolean = PasswordVisibility(eyeIcon, signUpSectionInputEyeClassList, eyeIconBoolean);}
eyeIconTwo.onclick = function() {eyeIconTwoBoolean = PasswordVisibility(eyeIconTwo, principleFormInputEyeClassList, eyeIconTwoBoolean);}