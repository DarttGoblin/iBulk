var slides = document.getElementById("slides");
var hearderPictures = [
    "ProjectMedia/ProjectPictures/FitnessPictures/maxresdefault.jpg",
    "ProjectMedia/ProjectPictures/FitnessPictures/wp2861304.jpg",
    "ProjectMedia/ProjectPictures/FitnessPictures/backgroundImageOneNew.jpg",
    "ProjectMedia/ProjectPictures/FitnessPictures/2481596.jpg",
    "ProjectMedia/ProjectPictures/FitnessPictures/Untitled.png",
    "ProjectMedia/ProjectPictures/FitnessPictures/1245319.jpg",
    "ProjectMedia/ProjectPictures/FitnessPictures/girl-fitness-model-pic.jpg",
    "ProjectMedia/ProjectPictures/FitnessPictures/1244979.jpg",
    "ProjectMedia/ProjectPictures/FitnessPictures/202450-working_out-exercise-barbell-gyms.jpg",
    "ProjectMedia/ProjectPictures/FitnessPictures/2040342.jpg",
    "ProjectMedia/ProjectPictures/FitnessPictures/1245630.jpg"
];

var slideIndex = 0;
var slidingSpeed = 3000;

// slides.src = hearderPictures[0];

function slidingPictures() {
    for (i = 0; i < hearderPictures.length; i++) {
      slides.style.display = "none";
    }
    slideIndex++;
    if (slideIndex > hearderPictures.length) {
      slideIndex = 1;
    }
    slides.src = hearderPictures[slideIndex - 1];
    slides.style.display = "block";
    setTimeout(slidingPictures, slidingSpeed);
}

slidingPictures();

document.getElementById("navigationDiv").style.borderRadius = 0 + "%";