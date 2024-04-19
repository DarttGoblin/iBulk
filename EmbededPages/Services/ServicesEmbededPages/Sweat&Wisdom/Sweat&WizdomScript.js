var books = document.getElementsByClassName("books");
var allBook = document.getElementsByClassName("allBook");
var anatomyBook = document.getElementsByClassName("anatomyBook");
var nutritionBook = document.getElementsByClassName("nutritionBook");
var workoutBook = document.getElementsByClassName("workoutBook");
var historyBook = document.getElementsByClassName("historyBook");
var booksSelect = document.getElementById("booksSelect");

var booksClasses = [allBook, anatomyBook, nutritionBook, workoutBook, historyBook];
var booksCategories = ["All", "Anatomy", "Nutrition", "Workout", "History"];

function BooksGenerater(ImageSrc, bookIndex) {
    var bookImage = document.createElement("img");
    bookImage.style.height = "400px";
    bookImage.style.width = "320px";
    bookImage.style.borderRadius = "20px";
    bookImage.style.transition = "scale 0.2s";
    bookImage.onmouseenter = function() {bookImage.style.scale = "1.1";}
    bookImage.onmouseleave = function() {bookImage.style.scale = "1";}
    bookImage.src = ImageSrc;
    books[bookIndex].appendChild(bookImage);
}

for (var i = 0; i < books.length; i++) {BooksGenerater(booksImages[i], i);}
for (let i = 0; i < books.length; i++) {books[i].onclick = function() {window.open(booksLinks[i], "_blank");}}
for (var i = 0; i < booksCategories.length; i++) {
    var option = document.createElement("option");
    option.text = booksCategories[i];
    option.value = i;
    booksSelect.appendChild(option);
}
booksSelect.onchange = function() {
    for (var i = 0; i < books.length; i++) {books[i].style.display = "none";}
    for (var i = 0; i < booksClasses[booksSelect.value].length; i++) {booksClasses[booksSelect.value][i].style.display = "block";}
}