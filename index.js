const navBtn = document.getElementById("mini-menu");
const closeBtn = document.getElementById("close-btn");
const navDisplay = document.getElementById("menu-cont");

navDisplay.style.display = "none";

navBtn.addEventListener("click", function () {
  if (navDisplay.style.display === "none") {
    navDisplay.style.display = "block";
  } else {
    navDisplay.style.display = "none";
  }
});

closeBtn.addEventListener("click", function () {
  navDisplay.style.display = "none";
});
