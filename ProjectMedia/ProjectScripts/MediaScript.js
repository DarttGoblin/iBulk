var musicLyricsParagraph = document.getElementById("musicLyricsParagraph");
var musicButton = document.getElementById("musicButton");
var musicSelect = document.getElementById("musicSelect");
var selectedMusic = document.getElementById("selectedMusic");
var videoButton = document.getElementById("videoButton");
var videoSelect = document.getElementById("videoSelect");
var selectedVideo = document.getElementById("selectedVideo");
var quotes = document.getElementById("quotes");
var quotesParagraph = document.getElementById("quotesParagraph");
var media = document.getElementById("media");
var musicSection = document.getElementById("musicSection");
var videoSection = document.getElementById("videoSection");
var links = document.getElementsByClassName("links");
var musicLyrics = document.getElementById("musicLyrics");
var RecievingMusicCurrentTime = Number(localStorage.getItem("sendingMusicCurrentTime")); //  Recieving the music data
var RecievingMusicCurrentSRC = localStorage.getItem("sendingMusicCurrentSRC");
var RecievingMusicCurrentName = localStorage.getItem("sendingMusicCurrentName");
var RecievingMusicCurrentLyrics = localStorage.getItem("sendingMusicCurrentLyrics");
var continueMusicBackground = document.getElementById("continueMusicBackground");
var continueMusic = document.getElementById("continueMusic");
var yes = document.getElementById("yes");
var no = document.getElementById("no");

var quotesTimer = 0;
var quotesArrayIndex = 1;
var mediaBool = false;

//  Select Elements Script
for (var i = 0; i < musicsNamesArray.length; i++) {
    var option = document.createElement("option");
    option.text = musicsNamesArray[i];
    option.value = i;
    musicSelect.add(option);
}
for (var i = 0; i < videosArray.length; i++) {
    var option = document.createElement("option");
    option.text = "motivational video " + (i + 1);
    option.value = i;
    videoSelect.add(option);
}

musicButton.onclick = function() {
    if (musicSelect.value == "choose a music") {
        alert("Choose a Music From The List!");
        selectedMusic.currentTime = 0;
        selectedMusic.src = "";
        musicLyricsParagraph.innerHTML = "Pick a music to have its lyrics here!";
    }
    else {
        selectedMusic.src = musicArray[musicSelect.value];
        musicLyricsParagraph.innerHTML = musicLyricsArray[musicSelect.value];
    }
}

videoButton.onclick = function() {
    if (videoSelect.value == "choose a video") alert("Choose a Video From The List!");
    selectedVideo.src = videosArray[videoSelect.value];
}

quotesParagraph.innerHTML = quotesArray[Math.floor(Math.random() * 9)];
quotesInterval = setInterval(RandomQuote, 4000);
quotes.addEventListener("mouseenter", () => {clearInterval(quotesInterval);})
quotes.addEventListener("mouseleave", () => {quotesInterval = setInterval(RandomQuote, 4000);});

if (RecievingMusicCurrentTime != 0) {
    continueMusicBackground.style.visibility = "visible";
    continueMusic.style.visibility = "visible";
    window.addEventListener("keydown", RecievingFunction, {once:true}); //  If user choosed keyboard
    yes.onclick = function() {
        RecievingFunction();
        window.removeEventListener("keydown", RecievingFunction, {once:true});
    }
    no.onclick = function() {
        continueMusicBackground.style.visibility = "hidden";
        continueMusic.style.visibility = "hidden";
        localStorage.setItem("sendingMusicCurrentTime", null);
        window.removeEventListener("keydown", RecievingFunction, {once:true});
    }
}
else {/* do none, music data either was lost or continuety has been canceled */}

for (let i = 0; i < links.length; i++) {links[i].onclick = MediaDataSending;}
// for (let i = 0; i < programsArray.length; i++) {programsDivs[i].onclick = MediaDataSending;}

media.onclick = function() {
    if (!mediaBool) {
        musicSection.style.visibility = "visible";
        videoSection.style.visibility = "visible";
        MediaSuuport(1, 27, "Close", true);
    }
    else {
        setTimeout(() => {
            musicSection.style.visibility = "hidden";
            videoSection.style.visibility = "hidden";
        }, 500);
        MediaSuuport(0, 23, "Media", false);
    }
}

function RandomQuote() {quotesParagraph.innerHTML = quotesArray[Math.floor(Math.random() * 9)];}
function RecievingFunction() {
    selectedMusic.src = RecievingMusicCurrentSRC;
    musicArray[musicSelect.value] = RecievingMusicCurrentSRC;
    selectedMusic.currentTime = RecievingMusicCurrentTime;
    musicLyricsParagraph.innerHTML = RecievingMusicCurrentLyrics;
    musicLyricsArray[musicSelect.value] = RecievingMusicCurrentLyrics;
    continueMusicBackground.style.visibility = "hidden";
    continueMusic.style.visibility = "hidden";
}
function MediaDataSending() { //  responsable function for media data transefering
    var musicCurrentTime = selectedMusic.currentTime;
    var musicCurrentSRC = musicArray[musicSelect.value];
    var musicCurrentName = musicsNamesArray[musicSelect.value];
    var musicCurrentLyrics = musicLyricsArray[musicSelect.value];
    localStorage.setItem("sendingMusicCurrentTime", musicCurrentTime);
    localStorage.setItem("sendingMusicCurrentSRC", musicCurrentSRC);
    localStorage.setItem("sendingMusicCurrentName", musicCurrentName);
    localStorage.setItem("sendingMusicCurrentLyrics", musicCurrentLyrics);
}
function MediaSuuport(opacityScale, marginScale, MediaText, boolScale) {
    musicSection.style.opacity = opacityScale;
    videoSection.style.opacity = opacityScale;
    media.style.marginLeft = marginScale + "px";
    media.innerHTML = MediaText;
    mediaBool = boolScale;
}

// Height responsive media
// function AdjustMediaHeight(element, elementHeight) {
//     element.style.height = (elementHeight * window.innerHeight) / 929 + "px";
//     alert(elementHeight);
// }
// AdjustMediaHeight(musicLyrics, musicLyrics.offsetHeight);
// window.addEventListener('resize', () => {AdjustMediaHeight(musicLyrics, musicLyrics.offsetHeight);});

var musicLyricsArrow = document.getElementById("musicLyricsArrow");
var musicSearchContainer = document.getElementById("musicSearchContainer");
var musicSearchInput = document.getElementById("musicSearchInput");
var musicSearchBtn = document.getElementById("musicSearchBtn");
var musicSearchBool = false;

// var string = "Search";
// var lettersArray = string.split("");

// musicSearchBtn.innerHTML = lettersArray[0];
// for (var i = 1; i < lettersArray.length; i++) {
//     (function(index) {
//         setTimeout(() => {
//             musicSearchBtn.innerHTML += lettersArray[index];
//         }, 100 * index);
//     })(i);
// }

musicLyricsArrow.onclick = function() {
    if (!musicSearchBool || musicSearchBool == null) {
        musicLyrics.style.height = 660 + "px";
        musicLyricsArrow.style.top = 678 + "px";
        musicLyricsArrow.style.transform = "rotate(90deg)";
        musicLyricsArrow.style.right = -16 + "px";
        musicSearchContainer.style.opacity = 0;
        setTimeout(() => {musicSearchContainer.style.visibility = "hidden";}, 200);
        musicSearchBool = true;
    }
    else {
        musicLyrics.style.height = 520 + "px";
        musicLyricsArrow.style.top = 540 + "px";
        musicLyricsArrow.style.transform = "rotate(-90deg)";
        musicLyricsArrow.style.right = 0 + "px";
        setTimeout(() => {
            musicSearchContainer.style.visibility = "visible";
            musicSearchContainer.style.opacity = 1;
        }, 200);
        musicSearchBool = false;
    }
    
}
musicSearchBtn.onclick = function() {
    alert("This service is not available now, check later!");
    // var userMusic = musicSearchInput.value;
    // if (userMusic == "") {alert("Please enter a music name!");}
    // else {
    //     alert(userMusic);
    //     fetch('http:localhost:10001', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({userMusic})
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.success) {alert("done");}
    //         else {alert("nope");}
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         alert("nope");
    //     });
    // } 
}