// activate flip card (for mobile)
function activateFlip() {
    let inner = document.getElementsByClassName("flip-card-inner");
    if(inner.style.transform = "rotateY(180deg") {
        inner.style.transform = "rotateY(-180deg)";
    } else {
    inner.style.transform = "rotateY(180deg)";
    }
}