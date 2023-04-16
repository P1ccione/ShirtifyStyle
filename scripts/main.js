const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

const divDonna = document.querySelector("#donna > img");
const divUomo = document.querySelector("#uomo > img");
const divBambino = document.querySelector("#bambino > img");

const imgTshirtDonna = [
  "../img/donna/T-Shirt-donna-bianca.png",
  "../img/donna/T-Shirt-donna-nera.png",
  "../img/donna/T-Shirt-donna-blu.png",
  "../img/donna/T-Shirt-donna-verde.png",
  "../img/donna/T-Shirt-donna-viola.png",
  "../img/donna/T-Shirt-donna-rosa.png",
  "../img/donna/T-Shirt-donna-rossa.png",
];

const imgTshirtUomo = [
  "../img/uomo/T-Shirt-uomo-bianca.png",
  "../img/uomo/T-Shirt-uomo-nera.png",
  "../img/uomo/T-Shirt-uomo-blu.png",
  "../img/uomo/T-Shirt-uomo-verde.png",
  "../img/uomo/T-Shirt-uomo-viola.png",
  "../img/uomo/T-Shirt-uomo-rosa.png",
  "../img/uomo/T-Shirt-uomo-rossa.png",
];

const imgTshirtBambino = [
  "../img/bambino/T-Shirt-bambino-bianca.png",
  "../img/bambino/T-Shirt-bambino-nera.png",
  "../img/bambino/T-Shirt-bambino-blu.png",
  "../img/bambino/T-Shirt-bambino-verde.png",
  "../img/bambino/T-Shirt-bambino-viola.png",
  "../img/bambino/T-Shirt-bambino-rosa.png",
  "../img/bambino/T-Shirt-bambino-rossa.png",
];

let index = 0;

function changeImage() {
  index = (index + 1) % imgTshirtDonna.length;
  divUomo.src = imgTshirtUomo[index];
  divBambino.src = imgTshirtBambino[index];
  divDonna.src = imgTshirtDonna[index];
}

window.addEventListener('load', () => {
  setInterval(changeImage, 4000);
})