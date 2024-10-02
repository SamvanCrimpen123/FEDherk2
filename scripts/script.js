const menuButton = document.querySelector("header button");
const hetMenu = document.querySelector("header nav");

function toggleMenu() {
	hetMenu.classList.toggle("open");
}

menuButton.onclick = toggleMenu;

console.log("hallo")