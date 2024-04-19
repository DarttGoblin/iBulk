const mealsPictures = document.getElementsByClassName("mealsPictures");
const containerScroll = document.getElementsByClassName("containerScroll");
const caloriesAmount = document.getElementsByClassName("caloriesAmount");
const mealTitles = document.getElementsByClassName("mealTitles");

const mealTitlesArr = [
    "Lunch: Savory Chicken Rice Delight"
];
const mealsInfo = [
    [["brown rice", 195, 111],
    ["chicken breast", 150, 165], 
    ["broccoli", 150, 34],
    ["avocado", 75, 160],
    ["BBQ sauce", 50], 153],
    [],
    [],
    [],
];

// function IntialAmntOfCals() {
    // for (var )
// }
function AmountOfCals() {

}

for (let i = 0; i < mealsInfo[0].length; i++) {
    const ingredient = mealsInfo[0][i];
    const ingredientSpan = document.createElement("span");
    const rangeInput = document.createElement("input");
    const valueSpan = document.createElement("span");

    ingredientSpan.classList.add("ingredient");
    ingredientSpan.textContent = ingredient[0];

    rangeInput.classList.add("rangeScroll");
    rangeInput.type = "range";
    rangeInput.max = 300;
    rangeInput.value = ingredient[1];
    
    valueSpan.classList.add("valueScroll");
    valueSpan.textContent = ingredient[1] + "g";
    caloriesAmount.innerHTML = 

    containerScroll[0].appendChild(ingredientSpan);
    containerScroll[0].appendChild(rangeInput);
    containerScroll[0].appendChild(document.createElement("br"));
    containerScroll[0].appendChild(valueSpan);
    containerScroll[0].appendChild(document.createElement("br"));

    rangeInput.addEventListener("input", function() {
        valueSpan.textContent = Math.round(this.value / 10) * 10 + "g";
    });
}

// Display meal images
for (let i = 0; i < mealsPictures.length; i++) {
    const mealImage = document.createElement("img");
    mealImage.style.width = "100%";
    mealImage.style.borderRadius = "20px";
    mealImage.src = "../PersonalMealPlanMedia/MealPic" + (i + 1) + ".png";
    mealsPictures[i].appendChild(mealImage);
    mealTitles[i].innerHTML = mealTitlesArr[i];
}