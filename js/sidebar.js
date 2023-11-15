const sidebar = document.getElementById("sidebar");
const minimizeButton = document.getElementById("minimize");

function checkScreenWidth() {
  if (window.innerWidth <= 1024) {
    sidebar.classList.add("small");
  } else {
    sidebar.classList.remove("small");
  }
}

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

minimizeButton.addEventListener("click", () => {
  sidebar.classList.toggle("small");
});

checkScreenWidth();
