var takeMeTo = document.getElementById("takeMeTo");
var moreInfo = document.getElementById("moreInfo");
var takeMeToLink = document.getElementById("takeMeToLinks");
var moreInfoLink = document.getElementById("moreInfoLinks");
var iBulkDiscriptions = document.getElementsByClassName("iBulkDiscriptions");

takeMeTo.onclick = function() {
    moreInfoLink.style.visibility = "hidden";
    takeMeToLink.style.visibility = "visible";
}
moreInfo.onclick = function() {
    takeMeToLink.style.visibility = "hidden";
    moreInfoLink.style.visibility = "visible";
}

for (let i = 0; i < iBulkDiscriptions.length; i++) {iBulkDiscriptions[i].onclick = function() {window.scrollTo({top: 0, behavior: 'smooth'});}}
