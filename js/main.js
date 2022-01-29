
// activate flip card (for mobile)
function activateFlip() {
    let inner = document.getElementsByClassName("flip-card-inner");
    if(inner != 'active'){
      inner.toggleClass('active');
    } else {
    inner.toggleClass('inactive'); 
    }
}
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("button").innerHTML = "";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("button").innerHTML = "|||";
    document.getElementById("mySidenav").style.width = "0";
  }