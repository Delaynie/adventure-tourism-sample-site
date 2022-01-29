
// activate flip card (for mobile)
function activateFlip() {
    let inner = document.getElementsByClassName("flip-card-inner");
      inner.toggleClass('active');
      if(inner == 'active'){
        inner.style.display = "none";
      } else {
        inner.toggleClass('active');
      }
    
}
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("button").style.color = "transparent";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("button").style.color = "white";
    document.getElementById("mySidenav").style.width = "0";
  }