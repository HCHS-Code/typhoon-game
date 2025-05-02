// mmmm... im hungy
const hamburger = document.getElementById("hamburger");
const mobileNavs = document.getElementById("nav-links");
let enabled = false;

mobileNavs.style.display = 'none'

hamburger.addEventListener("click", () => {
  enabled = !enabled;
  mobileNavs.style.display = enabled ? 'block' : 'none';
  // (for future reference) this code means ^ is enabled? enabledoption : disabledoption:
});