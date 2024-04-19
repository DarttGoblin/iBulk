var contentDivs = document.getElementsByClassName("contentDivs");

var foodCategoriesEmbPages = [
    "iBulkDictionaryEmbededPages/Meat.html",
    "iBulkDictionaryEmbededPages/Grains.html",
    "iBulkDictionaryEmbededPages/Fats.html",
    "iBulkDictionaryEmbededPages/Nuts.html",
    "iBulkDictionaryEmbededPages/Vegetables.html",
    "iBulkDictionaryEmbededPages/Fruits.html",
    "iBulkDictionaryEmbededPages/Dairy.html",
]
var foodCategories = [
    "iBulkDictionaryMedia/meat.jpg",
    "iBulkDictionaryMedia/grains.jpg",
    "iBulkDictionaryMedia/fats.jpg",
    "iBulkDictionaryMedia/nuts.jpg",
    "iBulkDictionaryMedia/vegetables.jpg",
    "iBulkDictionaryMedia/fruits.jpg",
    "iBulkDictionaryMedia/dairy.jpg",
];

for (var i = 0; i < foodCategories.length; i++) {
    var bgImage = document.createElement("img");
    bgImage.src = foodCategories[i];
    bgImage.style.height = "250px";
    bgImage.style.width = "250px";
    bgImage.style.borderRadius = "30px";
    contentDivs[i].appendChild(bgImage);
}
for (let i = 0; i < foodCategories.length; i++) {contentDivs[i].onclick = function() {window.location.href = foodCategoriesEmbPages[i];}}
for (let i = 0; i < foodCategories.length; i++) {contentDivs[i].onmouseenter = function() {contentDivs[i].style.scale = 1.05;}}
for (let i = 0; i < foodCategories.length; i++) {contentDivs[i].onmouseleave = function() {contentDivs[i].style.scale = 1;}}