//	Controling DOM elements
var frontMuscles = document.getElementsByClassName("frontMuscles");
var baackMuscles = document.getElementsByClassName("baackMuscles");
var principleImage = document.getElementById("principleImage");
var principleImageBV = document.getElementById("principleImageBV");
var takeMeToWorkout = document.getElementById("takeMeToWorkout");
var selectedMuscle = document.getElementById("selectedMuscle");
var maleBodyButton = document.getElementById("maleBodyButton");
var femaleBodyButton = document.getElementById("femaleBodyButton");
var welcomeKingQueen = document.getElementById("welcomeKingQueen");
var principleImage = document.getElementById("principleImage");
var anatomyParagraphSpan = document.getElementById("anatomyParagraphSpan");
var paragraphDiv = document.getElementById("paragraphDiv");
var anatomyImageDiv = document.getElementById("anatomyImageDiv");
var scrollLimit = document.getElementById("scrollLimit");

//	Creating Front Muscle Buttons
var bodyQuadracepsOne = document.createElement("img");
var bodyQuadracepsTwo = document.createElement("img");
var bodyAbs = document.createElement("img");
var bodyChestOne = document.createElement("img");
var bodyChestTwo = document.createElement("img");
var bodyBicepsOne = document.createElement("img");
var bodyBicepsTwo = document.createElement("img");
var bodyCalvesOne = document.createElement("img");
var bodyCalvesTwo = document.createElement("img");
var bodyShouldersOne = document.createElement("img");
var bodyShouldersTwo = document.createElement("img");
var bodyForearmsOne = document.createElement("img");
var bodyForearmsTwo = document.createElement("img");
var bodyLatsOne = document.createElement("img");
var bodyLatsTwo = document.createElement("img");
var bodyLatsThree = document.createElement("img");
var bodyLatsFour = document.createElement("img");
var bodyTrapsOne = document.createElement("img");
var bodyTrapsTwo = document.createElement("img");

//	Linking Front Muscles To Images
bodyQuadracepsOne.src = "ProjectMedia/ProjectPictures/maleBody/bodyQuadraceps.png";
bodyQuadracepsTwo.src = "ProjectMedia/ProjectPictures/maleBody/bodyQuadraceps.png";
bodyAbs.src = "ProjectMedia/ProjectPictures/maleBody/bodyAbs.png";
bodyChestOne.src = "ProjectMedia/ProjectPictures/maleBody/bodyChest.png";
bodyChestTwo.src = "ProjectMedia/ProjectPictures/maleBody/bodyChest.png";
bodyBicepsOne.src = "ProjectMedia/ProjectPictures/maleBody/bodyBiceps.png";
bodyBicepsTwo.src = "ProjectMedia/ProjectPictures/maleBody/bodyBiceps.png";
bodyCalvesOne.src = "ProjectMedia/ProjectPictures/maleBody/bodyCalves.png";
bodyCalvesTwo.src = "ProjectMedia/ProjectPictures/maleBody/bodyCalves.png";
bodyShouldersOne.src = "ProjectMedia/ProjectPictures/maleBody/bodyShoulders.png";
bodyShouldersTwo.src = "ProjectMedia/ProjectPictures/maleBody/bodyShoulders.png";
bodyForearmsOne.src = "ProjectMedia/ProjectPictures/maleBody/bodyForearms.png";
bodyForearmsTwo.src = "ProjectMedia/ProjectPictures/maleBody/bodyForearms.png";
bodyLatsOne.src = "ProjectMedia/ProjectPictures/maleBody/bodyLats.png";
bodyLatsTwo.src = "ProjectMedia/ProjectPictures/maleBody/bodyLats.png";
bodyLatsThree.src = "ProjectMedia/ProjectPictures/maleBody/bodyLats.png";
bodyLatsFour.src = "ProjectMedia/ProjectPictures/maleBody/bodyLats.png";
bodyTrapsOne.src = "ProjectMedia/ProjectPictures/maleBody/bodyTraps.png";
bodyTrapsTwo.src = "ProjectMedia/ProjectPictures/maleBody/bodyTraps.png";

//	Creating Back Muscle Buttons
var bodyBackQuadracepsOne = document.createElement("img");
var bodyBackQuadracepsTwo = document.createElement("img");
var bodyAss = document.createElement("img");
var bodyLowerBack = document.createElement("img");
var bodyLowerTraps = document.createElement("img");
var bodyTricepsOne= document.createElement("img");
var bodyTricepsTwo = document.createElement("img");
var bodyBackCalvesOne = document.createElement("img");
var bodyBackCalvesTwo= document.createElement("img");
var bodyBackShouldersOne = document.createElement("img");
var bodyBackShouldersTwo = document.createElement("img");
var bodyBackForearmsOne = document.createElement("img");
var bodyBackForearmsTwo = document.createElement("img");
var bodyBackTraps = document.createElement("img");
var bodyBackLatsOne = document.createElement("img");
var bodyBackLatsTwo = document.createElement("img");
var bodyBackLatsThree = document.createElement("img");
var bodyBackLatsFour = document.createElement("img");

//	Linking Back Muscles To Images
bodyBackQuadracepsOne.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackQuadraceps.png";
bodyBackQuadracepsTwo.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackQuadraceps.png";
bodyAss.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyAss.png";
bodyLowerBack.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyLowerBack.png";
bodyLowerTraps.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyLowerTraps.png";
bodyTricepsOne.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyTriceps.png";
bodyTricepsTwo.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyTriceps.png";
bodyBackCalvesOne.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackCalves.png";
bodyBackCalvesTwo.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackCalves.png";
bodyBackShouldersOne.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackShoulders.png";
bodyBackShouldersTwo.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackShoulders.png";
bodyBackForearmsOne.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackForearms.png";
bodyBackForearmsTwo.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackForearms.png";
bodyBackTraps.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackTraps.png";
bodyBackLatsOne.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackLats.png";
bodyBackLatsTwo.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackLats.png";
bodyBackLatsThree.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackLats.png";
bodyBackLatsFour.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBackLats.png";

var frontMusclesArray = [bodyQuadracepsOne, bodyQuadracepsTwo, bodyAbs, bodyChestOne, bodyChestTwo, bodyBicepsOne, bodyBicepsTwo, bodyCalvesOne, bodyCalvesTwo, bodyShouldersOne, bodyShouldersTwo, bodyForearmsOne, bodyForearmsTwo, bodyTrapsOne, bodyTrapsTwo, bodyLatsOne, bodyLatsTwo, bodyLatsThree, bodyLatsFour];
var backMusclesArray = [bodyBackQuadracepsOne, bodyBackQuadracepsTwo, bodyAss, bodyLowerBack, bodyLowerTraps, bodyTricepsOne, bodyTricepsTwo, bodyBackCalvesOne, bodyBackCalvesTwo, bodyBackShouldersOne, bodyBackShouldersTwo, bodyBackForearmsOne, bodyBackForearmsTwo, bodyBackTraps, bodyBackLatsOne, bodyBackLatsTwo, bodyBackLatsThree, bodyBackLatsFour];

principleImage.src = "ProjectMedia/ProjectPictures/maleBody/body.png";
principleImageBV.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBV.png";

//	Helping Function
function StyleBody(element) {element.style.boxShadow = "0px 0px 50px 5px grey"; element.style.borderRadius = "50px";}
function ShowFrontMuscles(muscle) {principleImage.src = muscle.src; StyleBody(muscle);}
function HideFrontMuscles() {principleImage.src = "ProjectMedia/ProjectPictures/maleBody/body.png"; StyleBody(principleImage);}
function ShowBackMuscles(muscle) {principleImageBV.src = muscle.src; StyleBody(muscle);}
function HideBackMuscles() {principleImageBV.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBV.png"; StyleBody(principleImageBV);}
function SwitchMusclesToOtherGender(visibilityScale) {/* Resize The Muscles To Fit The Female Body Instead Creating New Ones*/
	for (var i = 0; i < frontMuscles.length; i++) {frontMuscles[i].style.visibility = visibilityScale;}
	for (var i = 0; i < baackMuscles.length; i++) {baackMuscles[i].style.visibility = visibilityScale;}
}
function StyleGenderButtons(selected, notSelected) {
	selected.style.backgroundColor = "rgb(140, 0, 0)";
	selected.style.color = "white";
	notSelected.style.color = "black";
	notSelected.style.backgroundColor = "white";
	if (selected == femaleBodyButton) {welcomeKingQueen.innerHTML = "Welcome Queen"}
	else {welcomeKingQueen.innerHTML = "Welcome King"};
	welcomeKingQueen.style.visibility = "visible";
	welcomeKingQueen.style.color = "black";
	setTimeout(() => {welcomeKingQueen.style.color = "white"}, 3000);
}
function informationHiddenDivMouseEnter() {clearInterval(intervalOne); clearInterval(intervalTwo);}
function informationHiddenDivMouseLeave() {intervalOne = setInterval(animate, 20); intervalTwo = setInterval(randomColors, 300);}

//	User Interaction With Front Muscles
for (let i = 0; i < frontMuscles.length; i++) {
	frontMuscles[i].addEventListener("mouseenter", () => {ShowFrontMuscles(frontMusclesArray[i]);})
	frontMuscles[i].onmouseleave = HideFrontMuscles;
}

//	User Interaction With Back Muscles
for (let i = 0; i < baackMuscles.length; i++) {
	baackMuscles[i].addEventListener("mouseenter", () => {ShowBackMuscles(backMusclesArray[i]);})
	baackMuscles[i].onmouseleave = HideBackMuscles;
}

//	Gender Switch Script Section
femaleBodyButton.onclick = function() {
	StyleGenderButtons(femaleBodyButton, maleBodyButton);
	principleImage.src = "ProjectMedia/ProjectPictures/femaleBody/femaleBody.png";
	principleImageBV.src = "ProjectMedia/ProjectPictures/femaleBodyBV/femaleBodyBV.png";
	StyleBody(principleImage);
	StyleBody(principleImageBV);
	SwitchMusclesToOtherGender("hidden");
}
maleBodyButton.onclick = function() {
	StyleGenderButtons(maleBodyButton, femaleBodyButton);
	principleImage.src = "ProjectMedia/ProjectPictures/maleBody/body.png";
	principleImageBV.src = "ProjectMedia/ProjectPictures/maleBodyBV/bodyBV.png";
	StyleBody(principleImage);
	StyleBody(principleImageBV);
	SwitchMusclesToOtherGender("visible");
}

//	Moving Span
var choosingMuscleMovingSpan = document.getElementById("choosingMuscleMovingSpan");
var informationHiddenDiv = document.getElementById("informationHiddenDiv");
var upOrDown = Math.round(Math.random()); //  determines the upDownDirection of the span;
var rightOrLeft = Math.round(Math.random()); //  determines the rightLeftDirection of the span;
var stepUpDown = 1;
var stepRightLeft = 1;
var choosingMuscleMovingSpanRightLeft = 0;
var choosingMuscleMovingSpanTopDown = -270;
var intervalOne;
var intervalTwo;
var topEdge = -503;
var bottomEdge = -30;
var rightEdge = -432;
var leftEdge = 432;
function choosingMuscleMovingSpanDirections() {
	if (upOrDown === 1 && rightOrLeft === 1) {
		choosingMuscleMovingSpan.style.top = choosingMuscleMovingSpanTopDown + "px";
		choosingMuscleMovingSpanTopDown -= stepUpDown;
		choosingMuscleMovingSpan.style.right = choosingMuscleMovingSpanRightLeft + "px";
		choosingMuscleMovingSpanRightLeft -= stepRightLeft; //goesEast
	}
	else if (upOrDown === 1 && rightOrLeft === 0) {
		choosingMuscleMovingSpan.style.top = choosingMuscleMovingSpanTopDown + "px";
		choosingMuscleMovingSpanTopDown -= stepUpDown;
		choosingMuscleMovingSpan.style.right = choosingMuscleMovingSpanRightLeft + "px";
		choosingMuscleMovingSpanRightLeft += stepRightLeft; // goesNorth
	}
	else if (upOrDown === 0 && rightOrLeft === 1) {
		choosingMuscleMovingSpan.style.top = choosingMuscleMovingSpanTopDown + "px";
		choosingMuscleMovingSpanTopDown += stepUpDown;
		choosingMuscleMovingSpan.style.right = choosingMuscleMovingSpanRightLeft + "px";
		choosingMuscleMovingSpanRightLeft -= stepRightLeft; // goesSouth
	}
	else {
		choosingMuscleMovingSpan.style.top = choosingMuscleMovingSpanTopDown + "px";
		choosingMuscleMovingSpanTopDown += stepUpDown;
		choosingMuscleMovingSpan.style.right = choosingMuscleMovingSpanRightLeft + "px";
		choosingMuscleMovingSpanRightLeft += stepRightLeft; // goesWest
	}
}

function choosingMuscleMovingSpanEdges() {
	if (choosingMuscleMovingSpanTopDown > topEdge && choosingMuscleMovingSpanTopDown <  bottomEdge) {
		choosingMuscleMovingSpanDirections();
	}
	else if (choosingMuscleMovingSpanTopDown <= topEdge) {
		upOrDown = 0;
		choosingMuscleMovingSpanDirections();
		return upOrDown;
	}
	else if (choosingMuscleMovingSpanTopDown >= bottomEdge) {
		upOrDown = 1;
		choosingMuscleMovingSpanDirections();
		return upOrDown;
	}
	if (choosingMuscleMovingSpanRightLeft > rightEdge && choosingMuscleMovingSpanRightLeft < leftEdge) {
		choosingMuscleMovingSpanDirections();
	}
	if (choosingMuscleMovingSpanRightLeft >= leftEdge) {
		rightOrLeft = 1;
		choosingMuscleMovingSpanDirections();
		return rightOrLeft;
	}
	else if (choosingMuscleMovingSpanRightLeft <= rightEdge) {
		rightOrLeft = 0;
		choosingMuscleMovingSpanDirections();
		return rightOrLeft;
	}
}
function randomColors() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	choosingMuscleMovingSpan.style.color = "rgb(" + r + "," + g + "," + b + ")";
}

function animate() {choosingMuscleMovingSpanEdges();}

const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {/*No aniamtion is available*/}
else {
	intervalOne = setInterval(animate, 20);
	intervalTwo = setInterval(randomColors, 300);
	informationHiddenDiv.onmouseenter = informationHiddenDivMouseEnter;
	choosingMuscleMovingSpan.onmouseenter = informationHiddenDivMouseEnter;
	informationHiddenDiv.onmouseleave = informationHiddenDivMouseLeave;
}



//  Hidden Information Div Script Section
//	Creating Muscle Images
var quadracepsPicture = document.createElement("img");
var absPicture = document.createElement("img");
var chestPicture = document.createElement("img");
var calvesPicture = document.createElement("img");
var shouldersPicture = document.createElement("img");
var bicepsPicture = document.createElement("img");
var forearmsPicture = document.createElement("img");
var trapsPicture = document.createElement("img");
var latsPicture = document.createElement("img");

var FrontMusclePara = ["The quadriceps, often abbreviated as 'quads,' is a group of four muscles located in the front of the thigh. These muscles work together to extend the knee joint and are crucial for activities such as walking, running, jumping, and squatting. The four muscles that make up the quadriceps are: Rectus Femoris: This muscle runs down the middle of the thigh and is the only one of the quadriceps muscles that crosses both the hip and knee joints. It originates from the ilium bone ('pelvis') and inserts onto the patella ('kneecap') and then continues as the quadriceps tendon to attach to the tibia ('shinbone'). Vastus Lateralis: Located on the outer side of the thigh, this muscle originates from the femur ('thigh bone') and attaches to the patella and tibia. It plays a major role in knee extension. Vastus Medialis: Positioned on the inner side of the thigh, this muscle originates from the femur and also attaches to the patella and tibia. It helps stabilize the patella during knee movements.",
"The quadriceps, often abbreviated as 'quads,' is a group of four muscles located in the front of the thigh. These muscles work together to extend the knee joint and are crucial for activities such as walking, running, jumping, and squatting. The four muscles that make up the quadriceps are: Rectus Femoris: This muscle runs down the middle of the thigh and is the only one of the quadriceps muscles that crosses both the hip and knee joints. It originates from the ilium bone ('pelvis') and inserts onto the patella ('kneecap') and then continues as the quadriceps tendon to attach to the tibia ('shinbone'). Vastus Lateralis: Located on the outer side of the thigh, this muscle originates from the femur ('thigh bone') and attaches to the patella and tibia. It plays a major role in knee extension. Vastus Medialis: Positioned on the inner side of the thigh, this muscle originates from the femur and also attaches to the patella and tibia. It helps stabilize the patella during knee movements.",
"The abdominal muscles, often referred to as the 'abs,' are a group of muscles located in the front of the torso. These muscles play a crucial role in supporting the spine, maintaining posture, and assisting in various movements, including bending, twisting, and stabilizing the core. The abdominal muscles can be divided into several key muscles: Rectus Abdominis: Commonly known as the 'six-pack' muscle, the rectus abdominis runs vertically along the front of the abdomen. It is responsible for flexing the spine, as in sit-ups, and helps stabilize the torso. External Obliques: These muscles run diagonally on the sides of the abdomen and play a role in rotating the torso and bending it sideways. Internal Obliques: Situated beneath the external obliques, the internal obliques perform similar functions, such as torso rotation and lateral flexion. Transverse Abdominis: This muscle lies deep within the abdominal wall and acts as a natural corset, providing stability to the spine and pelvis.",
"The pectoralis major (from Latin pectus 'breast') is a thick, fan-shaped or triangular\ convergent muscle, situated at the chest of the human body. It makes up the bulk of the chest muscles and lies under the breast. Beneath the pectoralis major is the pectoralis minor, a thin, triangular muscle. The pectoralis major's primary functions are flexion, adduction, and internal rotation of the humerus. The pectoral major may colloquially be referred to as 'pecs', 'pectoral muscle', or 'chest muscle', because it is the largest and most superficial muscle in the chest area.",
"The pectoralis major (from Latin pectus 'breast') is a thick, fan-shaped or triangular\ convergent muscle, situated at the chest of the human body. It makes up the bulk of the chest muscles and lies under the breast. Beneath the pectoralis major is the pectoralis minor, a thin, triangular muscle. The pectoralis major's primary functions are flexion, adduction, and internal rotation of the humerus. The pectoral major may colloquially be referred to as 'pecs', 'pectoral muscle', or 'chest muscle', because it is the largest and most superficial muscle in the chest area.",
"The biceps muscle, often simply referred to as the 'biceps,' is a prominent muscle in the upper arm. It is responsible for flexing the elbow joint and rotating the forearm. The name 'biceps' is derived from the Latin words 'bi' (meaning two) and 'ceps' (meaning head), referring to the muscle's two points of origin or 'heads.'The biceps muscle has two main heads: the long head and the short head. The long head originates from the supraglenoid tubercle of the scapula (shoulder blade) and runs along the upper part of the arm. The short head originates from the coracoid process of the scapula and runs along the lower part of the arm. Both heads merge and insert onto the radius bone in the forearm.When the biceps muscle contracts, it causes the forearm to move toward the shoulder (flexion) and can also assist in rotating the forearm, allowing actions like turning a doorknob or lifting objects. The biceps muscle is often associated with arm strength and aesthetics and is a commonly targeted muscle in strength training and bodybuilding exercises.",
"The biceps muscle, often simply referred to as the 'biceps,' is a prominent muscle in the upper arm. It is responsible for flexing the elbow joint and rotating the forearm. The name 'biceps' is derived from the Latin words 'bi' (meaning two) and 'ceps' (meaning head), referring to the muscle's two points of origin or 'heads.'The biceps muscle has two main heads: the long head and the short head. The long head originates from the supraglenoid tubercle of the scapula (shoulder blade) and runs along the upper part of the arm. The short head originates from the coracoid process of the scapula and runs along the lower part of the arm. Both heads merge and insert onto the radius bone in the forearm.When the biceps muscle contracts, it causes the forearm to move toward the shoulder (flexion) and can also assist in rotating the forearm, allowing actions like turning a doorknob or lifting objects. The biceps muscle is often associated with arm strength and aesthetics and is a commonly targeted muscle in strength training and bodybuilding exercises.",
"The calves, also known as the calf muscles or triceps surae, are the muscles located at the back of the lower leg. They play a crucial role in various movements, particularly in walking, running, jumping, and maintaining balance. The calves consist of two main muscles: Gastrocnemius: This is the larger and more superficial muscle of the calf. It has two heads or points of origin, one from above the knee joint on the femur's medial and lateral condyles. The gastrocnemius then extends downward and forms the Achilles tendon, which attaches to the heel bone (calcaneus). It is responsible for ankle plantar flexion, which involves pointing the toes downward, as well as aiding in knee flexion. Soleus: The soleus is located beneath the gastrocnemius and originates from the upper part of the tibia and fibula bones. Like the gastrocnemius, it also forms part of the Achilles tendon and contributes to ankle plantar flexion. The soleus is especially active during activities that involve a bent knee, such as squatting.",
"The calves, also known as the calf muscles or triceps surae, are the muscles located at the back of the lower leg. They play a crucial role in various movements, particularly in walking, running, jumping, and maintaining balance. The calves consist of two main muscles: Gastrocnemius: This is the larger and more superficial muscle of the calf. It has two heads or points of origin, one from above the knee joint on the femur's medial and lateral condyles. The gastrocnemius then extends downward and forms the Achilles tendon, which attaches to the heel bone (calcaneus). It is responsible for ankle plantar flexion, which involves pointing the toes downward, as well as aiding in knee flexion. Soleus: The soleus is located beneath the gastrocnemius and originates from the upper part of the tibia and fibula bones. Like the gastrocnemius, it also forms part of the Achilles tendon and contributes to ankle plantar flexion. The soleus is especially active during activities that involve a bent knee, such as squatting.",
"The human shoulder is made up of three bones: the clavicle (collarbone), the scapula (shoulder blade), and the humerus (upper arm bone) as well as associated muscles, ligaments and tendons. The articulations between the bones of the shoulder make up the shoulder joints. The shoulder joint, also known as the glenohumeral joint, is the major joint of the shoulder, but can more broadly include the acromioclavicular joint. In human anatomy, the shoulder joint comprises the part of the body where the humerus attaches to the scapula, and the head sits in the glenoid cavity.[1] The shoulder is the group of structures in the region of the joint.[2] The shoulder joint is the main joint of the shoulder. It is a ball and socket joint that allows the arm to rotate in a circular fashion or to hinge out and up away from the body. The joint capsule is a soft tissue envelope that encircles the glenohumeral joint and attaches to the scapula, humerus, and head of the biceps. It is lined by a thin, smooth synovial membrane.",
"The human shoulder is made up of three bones: the clavicle (collarbone), the scapula (shoulder blade), and the humerus (upper arm bone) as well as associated muscles, ligaments and tendons. The articulations between the bones of the shoulder make up the shoulder joints. The shoulder joint, also known as the glenohumeral joint, is the major joint of the shoulder, but can more broadly include the acromioclavicular joint. In human anatomy, the shoulder joint comprises the part of the body where the humerus attaches to the scapula, and the head sits in the glenoid cavity.[1] The shoulder is the group of structures in the region of the joint.[2] The shoulder joint is the main joint of the shoulder. It is a ball and socket joint that allows the arm to rotate in a circular fashion or to hinge out and up away from the body. The joint capsule is a soft tissue envelope that encircles the glenohumeral joint and attaches to the scapula, humerus, and head of the biceps. It is lined by a thin, smooth synovial membrane.",
"The forearms, also known as the antebrachium, are the region of the upper limbs between the elbow and the wrist. The forearms are composed of various muscles that play important roles in wrist and hand movements, as well as grip strength. These muscles are responsible for actions like flexing and extending the wrist, moving the fingers, and performing fine motor tasks. Some of the major muscles of the forearms include: Flexor Muscles: Flexor Carpi Radialis: This muscle runs along the inner side of the forearm and is involved in flexing the wrist. Flexor Carpi Ulnaris: Located along the outer side of the forearm, it also contributes to wrist flexion. Palmaris Longus: This muscle is absent in some individuals, but if present, it runs along the inner aspect of the forearm and assists in wrist flexion. Extensor Muscles: Extensor Carpi Radialis Longus and Brevis: These muscles are on the back of the forearm and are responsible for extending the wrist. Extensor Carpi Ulnaris: Situated on the outer side of the forearm, it aids in wrist extension.",
"The forearms, also known as the antebrachium, are the region of the upper limbs between the elbow and the wrist. The forearms are composed of various muscles that play important roles in wrist and hand movements, as well as grip strength. These muscles are responsible for actions like flexing and extending the wrist, moving the fingers, and performing fine motor tasks. Some of the major muscles of the forearms include: Flexor Muscles: Flexor Carpi Radialis: This muscle runs along the inner side of the forearm and is involved in flexing the wrist. Flexor Carpi Ulnaris: Located along the outer side of the forearm, it also contributes to wrist flexion. Palmaris Longus: This muscle is absent in some individuals, but if present, it runs along the inner aspect of the forearm and assists in wrist flexion. Extensor Muscles: Extensor Carpi Radialis Longus and Brevis: These muscles are on the back of the forearm and are responsible for extending the wrist. Extensor Carpi Ulnaris: Situated on the outer side of the forearm, it aids in wrist extension.",
"The trapezius is a large, triangular muscle that extends over the back of the neck, shoulders, and upper thorax. It plays a key role in moving, stabilizing, and supporting the shoulder blades and neck. The trapezius muscle can be divided into three regions: the upper, middle, and lower trapezius. The upper trapezius assists in elevating the shoulder blades, such as during shrugging or lifting. The middle trapezius helps retract the shoulder blades, pulling them toward the spine. The lower trapezius helps depress the shoulder blades and rotate them downward. The trapezius muscle is often targeted in exercises to improve posture, upper body strength, and overall shoulder function.",
"The trapezius is a large, triangular muscle that extends over the back of the neck, shoulders, and upper thorax. It plays a key role in moving, stabilizing, and supporting the shoulder blades and neck. The trapezius muscle can be divided into three regions: the upper, middle, and lower trapezius. The upper trapezius assists in elevating the shoulder blades, such as during shrugging or lifting. The middle trapezius helps retract the shoulder blades, pulling them toward the spine. The lower trapezius helps depress the shoulder blades and rotate them downward. The trapezius muscle is often targeted in exercises to improve posture, upper body strength, and overall shoulder function.",
"The latissimus dorsi, often referred to as the 'lats,' is a large, flat muscle located on the back. It is responsible for a variety of movements involving the shoulder and spine. The lats play a crucial role in activities such as pulling, lifting, and reaching. These muscles extend, adduct, and medially rotate the arm, which means they help pull the arm down, toward the midline of the body, and rotate it inward. Well-developed lats contribute to a V-shaped appearance of the upper body and are commonly targeted in strength training exercises to enhance back strength, posture, and overall upper body aesthetics and function.",
"The latissimus dorsi, often referred to as the 'lats,' is a large, flat muscle located on the back. It is responsible for a variety of movements involving the shoulder and spine. The lats play a crucial role in activities such as pulling, lifting, and reaching. These muscles extend, adduct, and medially rotate the arm, which means they help pull the arm down, toward the midline of the body, and rotate it inward. Well-developed lats contribute to a V-shaped appearance of the upper body and are commonly targeted in strength training exercises to enhance back strength, posture, and overall upper body aesthetics and function.",
"The latissimus dorsi, often referred to as the 'lats,' is a large, flat muscle located on the back. It is responsible for a variety of movements involving the shoulder and spine. The lats play a crucial role in activities such as pulling, lifting, and reaching. These muscles extend, adduct, and medially rotate the arm, which means they help pull the arm down, toward the midline of the body, and rotate it inward. Well-developed lats contribute to a V-shaped appearance of the upper body and are commonly targeted in strength training exercises to enhance back strength, posture, and overall upper body aesthetics and function.",
"The latissimus dorsi, often referred to as the 'lats,' is a large, flat muscle located on the back. It is responsible for a variety of movements involving the shoulder and spine. The lats play a crucial role in activities such as pulling, lifting, and reaching. These muscles extend, adduct, and medially rotate the arm, which means they help pull the arm down, toward the midline of the body, and rotate it inward. Well-developed lats contribute to a V-shaped appearance of the upper body and are commonly targeted in strength training exercises to enhance back strength, posture, and overall upper body aesthetics and function.",
];

quadracepsPicture.src = "ProjectMedia/ProjectPictures/AnotomyPictures/quadriceps.jpg";
absPicture.src = "ProjectMedia/ProjectPictures/AnotomyPictures/abs.jpg";
chestPicture.src = "ProjectMedia/ProjectPictures/AnotomyPictures/chestPicture.png";
bicepsPicture.src = "ProjectMedia/ProjectPictures/AnotomyPictures/bicepsPicture.png";
calvesPicture.src = "ProjectMedia/ProjectPictures/AnotomyPictures/calves.jpg";
shouldersPicture.src = "ProjectMedia/ProjectPictures/AnotomyPictures/shouldersPicture.png";
forearmsPicture.src = "ProjectMedia/ProjectPictures/AnotomyPictures/forearms.png";
trapsPicture.src = "ProjectMedia/ProjectPictures/AnotomyPictures/neckPicture.png";
latsPicture.src = "ProjectMedia/ProjectPictures/AnotomyPictures/oblics.jpg";

var frontMusclesPicArray = [quadracepsPicture, quadracepsPicture, absPicture, chestPicture, chestPicture, bicepsPicture, bicepsPicture, calvesPicture, calvesPicture, shouldersPicture, shouldersPicture, forearmsPicture, forearmsPicture, trapsPicture, trapsPicture, latsPicture, latsPicture, latsPicture, latsPicture];
var frontMusclesNamesArray = ["Quadriceps", "Quadriceps", "Abdominals", "Chest", "Chest", "Biceps", "Biceps", "Calves", "Calves", "Shoulders", "Shoulders", "Forearms", "Forearms", "Trapezuis", "Trapezuis", "Lats", "Lats", "Lats", "Lats"];

//	LocalStorage Variables
var selectedMuscleToWorkOut;
var selectedMuscleBoolean = false;

function ShowFrontMuscleInfo(muscleIndex) {
	choosingMuscleMovingSpan.style.visibility = "hidden";
	clearInterval(intervalOne);
	clearInterval(intervalTwo);
	takeMeToWorkout.style.visibility = "visible";
	selectedMuscle.innerHTML = frontMusclesNamesArray[muscleIndex];
	paragraphDiv.style.visibility = "visible";
	anatomyParagraphSpan.innerHTML = FrontMusclePara[muscleIndex];
	anatomyImageDiv.style.visibility = "visible";
	anatomyImageDiv.innerHTML = "";
	frontMusclesPicArray[muscleIndex].style.top = 0 + "px";
	frontMusclesPicArray[muscleIndex].style.height = 450 + "px";
	frontMusclesPicArray[muscleIndex].style.width = 420 + "px";
	frontMusclesPicArray[muscleIndex].alt = frontMusclesNamesArray[muscleIndex] + "Image";
	anatomyImageDiv.appendChild(frontMusclesPicArray[muscleIndex]);
	scrollLimit.scrollIntoView({behavior: 'smooth'});
	selectedMuscleToWorkOut = frontMusclesNamesArray[muscleIndex];
}

function ShowBackMuscleInfo(muscleIndex) {
	choosingMuscleMovingSpan.style.visibility = "hidden";
	clearInterval(intervalOne);
	clearInterval(intervalTwo);
	// takeMeToWorkout.style.visibility = "visible";
	// selectedMuscle.innerHTML = frontMusclesNamesArray[muscleIndex];
	// paragraphDiv.style.visibility = "visible";
	// anatomyParagraphSpan.innerHTML = FrontMusclePara[muscleIndex];
	// anatomyImageDiv.style.visibility = "visible";
	anatomyImageDiv.innerHTML = "";
	// frontMusclesPicArray[muscleIndex].style.top = 0 + "px";
	// frontMusclesPicArray[muscleIndex].style.height = 450 + "px";
	// frontMusclesPicArray[muscleIndex].style.width = 420 + "px";
	// frontMusclesPicArray[muscleIndex].alt = frontMusclesNamesArray[muscleIndex] + "Image";
	// anatomyImageDiv.appendChild(frontMusclesPicArray[muscleIndex]);
	scrollLimit.scrollIntoView({behavior: 'smooth'});
	// selectedMuscleToWorkOut = frontMusclesNamesArray[muscleIndex];
}

for (let i = 0; i < frontMuscles.length; i++) {frontMuscles[i].onclick = function() {ShowFrontMuscleInfo(i)}}
for (let i = 0; i < baackMuscles.length; i++) {baackMuscles[i].onclick = function() {ShowBackMuscleInfo(i)}}

takeMeToWorkout.onclick = function() {
	selectedMuscleBoolean = true;
	localStorage.setItem("selectedMuscleToWorkOut", selectedMuscleToWorkOut);
	localStorage.setItem("selectedMuscleBoolean", selectedMuscleBoolean);
	window.location.href = "EmbededPages/workoutPage/workout.html";
}