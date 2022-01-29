// activate flip card (for mobile)
function activateFlip() {
    let inner = document.getElementsByClassName("flip-card-inner");
        inner.toggleClass('active');   
}

let hideBars = document.getElementById("button");
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    hideBars.innerHTML = "";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    hideBars.innerHTML = "|||";
  }