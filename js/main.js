//DOM selectors

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-brand");
const navItems = document.querySelectorAll(".nav-item");

// Initial Menu State
let showMenu = false;

// Menu Displays on click

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    //if menu isn't open (showMenu = false), close button and show its contents
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //change Menu State
    showMenu = true;
  } else {
    //if menu is open (showMenu = true), set it back to default
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //change Menu State
    showMenu = false;
  }
}
