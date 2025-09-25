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

function openlijst(id_nav) {
  const x = document.getElementById(id_nav);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function inverted(){
  const buttontext = document.getElementById("halloweenkleur");
  const Main=document.getElementById("mainback")
  const geluid=document.getElementById("geluidseffect")
  if(buttontext.innerText == "halloween kleuren"){
    buttontext.innerText = "Normale Kleuren";
    Main.style.backgroundColor="orange";
    geluid.play();
  } else {
    buttontext.innerText = "halloween kleuren";
    Main.style.backgroundColor="#d4ebff"
    geluid.pause();
    geluid.currentTime=0;
  }
}

function kleur(mokkleuren){
const mokImage=document.getElementById("mokkleur");
const moknaam = document.querySelector("main h3:first-of-type");
if(mokkleuren=="rood"){
  mokImage.src="images/mokrood.jpeg"
  moknaam.innerText="kleur rood"
} else if(mokkleuren=="geel"){
  mokImage.src="images/mokgeel.jpeg"
  moknaam.innerText="kleur geel"
} else if(mokkleuren=="groen"){
  mokImage.src="images/mokgroen.jpeg"
  moknaam.innerText="kleur groen"
} else if(mokkleuren=="oranje"){
  mokImage.src="images/mokoranje.jpeg"
  moknaam.innerText="kleur oranje"
} else if(mokkleuren=="bruin"){
  mokImage.src="images/mokbruin.jpeg"
  moknaam.innerText="kleur bruin"
} else if(mokkleuren=="blauw"){
  mokImage.src="images/mokblauw.jpeg"
  moknaam.innerText="kleur blauw"
} 
}


// voor scrollbaar: js "if scroll etc etc"

