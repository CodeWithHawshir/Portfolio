// Toggle the menu visibility
let menuList = document.getElementById("menuList");
let menuIcon = document.getElementById("menu-icon");

menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px"; // Adjust as needed
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// Attach the toggleMenu function to the menu icon
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x"); // Change the icon to indicate toggle state
  toggleMenu();
});

// Initialize Typed.js when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  let typed = new Typed(".auto-type", {
    strings: ["Web Developer", "UI / UX Designer", "Frontend Designer"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    showCursor: false,
  });
});
