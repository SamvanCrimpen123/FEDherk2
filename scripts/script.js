const menuButton = document.querySelector("header button");
const hetMenu = document.querySelector("header nav section:first-of-type");
menuButton.onclick = toggleMenu;
function toggleMenu() {
	hetMenu.classList.toggle("open");
}



const navButton = document.querySelector("header nav section:nth-of-type(1) ul li:nth-of-type(1) img");
const hetNav = document.querySelector("header nav section:first-of-type");
navButton.onclick = sluitNav;

function sluitNav() {
	hetNav.classList.remove("open");
}



voor scrollbaar: js "if scroll etc etc"

