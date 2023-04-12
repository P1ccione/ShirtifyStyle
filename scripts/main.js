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
  "../img/T-Shirt-donna-bianca.png",
  "../img/T-Shirt-donna-nera.png",
  "../img/T-Shirt-donna-blu.png",
  "../img/T-Shirt-donna-verde.png",
  "../img/T-Shirt-donna-viola.png",
  "../img/T-Shirt-donna-rosa.png",
  "../img/T-Shirt-donna-rossa.png",
];

const imgTshirtUomo = [
  "../img/T-Shirt-uomo-bianca.png",
  "../img/T-Shirt-uomo-nera.png",
  "../img/T-Shirt-uomo-blu.png",
  "../img/T-Shirt-uomo-verde.png",
  "../img/T-Shirt-uomo-viola.png",
  "../img/T-Shirt-uomo-rosa.png",
  "../img/T-Shirt-uomo-rossa.png",
];

const imgTshirtBambino = [
  "../img/T-Shirt-bambino-bianca.png",
  "../img/T-Shirt-bambino-nera.png",
  "../img/T-Shirt-bambino-blu.png",
  "../img/T-Shirt-bambino-verde.png",
  "../img/T-Shirt-bambino-viola.png",
  "../img/T-Shirt-bambino-rosa.png",
  "../img/T-Shirt-bambino-rossa.png",
];

let index = 0;

function changeImage() {
  index = (index + 1) % imgTshirtDonna.length;
  divUomo.src = imgTshirtUomo[index];
  divBambino.src = imgTshirtBambino[index];
  divDonna.src = imgTshirtDonna[index];
}

document.addEventListener("load", () => {
  setInterval(changeImage, 4000);
})