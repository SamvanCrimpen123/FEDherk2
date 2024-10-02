const menuButton = document.querySelector("button");
const hetMenu = document.querySelector("nav");

function toggleMenu() {
	hetMenu.classList.toggle("open");
}

menuButton.onclick = toggleMenu;