
// activate flip card (for mobile)
function activateFlip() {
    let inner = document.getElementsByClassName("flip-card-inner");
      inner.toggleClass('active');
}
/* Open/Close the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("button").style.color = "transparent";
  }
function closeNav() {
    document.getElementById("button").style.color = "white";
    document.getElementById("mySidenav").style.width = "0";
  }

/* register form js */
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }