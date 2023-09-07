var dots = document.getElementsByClassName("dots");
var dotsIndex = 0;
function StyleDots(Thedot, opacityScale, visibilityScale) {
    Thedot.style.visibility = visibilityScale;
    Thedot.style.opacity = opacityScale;
}
function SwitchDots() {
    if (dotsIndex == 3) { //  Hide Dots And Return To The Intial State
        for (var i = 0; i < dots.length; i++) {
            StyleDots(dots[i], 0, "hidden");
        }
        dotsIndex = 0;
    }
    else {
        StyleDots(dots[dotsIndex], 1, "visible");
        return dotsIndex++;
    }
}
setInterval(SwitchDots, 500);