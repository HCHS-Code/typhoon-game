// mmmm... im hungy
const hamburger = document.getElementById("hamburger");
var mobileNavs = document.getElementById("nav-links");
var hamburgerImage = document.getElementById("hamburger-img");

var enabled = false;
mobileNavs.style.display = 'none';

hamburger.addEventListener("click", function(event){
  if (enabled == false) {
    enabled = true;
    mobileNavs.style.display = 'block';
  } else {
    enabled = false;
    mobileNavs.style.display = 'none';
  }
});