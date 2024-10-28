const menuButton = document.querySelector("header button");
const hetMenu = document.querySelector("header nav section:first-of-type");

function toggleMenu() {
	hetMenu.classList.toggle("open");
}

menuButton.onclick = toggleMenu;

console.log("hallo")