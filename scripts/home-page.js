
const divDonna = document.querySelector("#donna > img");
const divUomo = document.querySelector("#uomo > img");
const divBambino = document.querySelector("#bambino > img");

const imgTshirtDonna = [
  "../img/donna/T-Shirt/T-Shirt-donna-bianca.png",
  "../img/donna/T-Shirt/T-Shirt-donna-nera.png",
  "../img/donna/T-Shirt/T-Shirt-donna-blu.png",
  "../img/donna/T-Shirt/T-Shirt-donna-verde.png",
  "../img/donna/T-Shirt/T-Shirt-donna-viola.png",
  "../img/donna/T-Shirt/T-Shirt-donna-rosa.png",
  "../img/donna/T-Shirt/T-Shirt-donna-rossa.png",
];

const imgTshirtUomo = [
  "../img/uomo/T-Shirt/T-Shirt-uomo-bianca.png",
  "../img/uomo/T-Shirt/T-Shirt-uomo-nera.png",
  "../img/uomo/T-Shirt/T-Shirt-uomo-blu.png",
  "../img/uomo/T-Shirt/T-Shirt-uomo-verde.png",
  "../img/uomo/T-Shirt/T-Shirt-uomo-viola.png",
  "../img/uomo/T-Shirt/T-Shirt-uomo-rosa.png",
  "../img/uomo/T-Shirt/T-Shirt-uomo-rossa.png",
];

const imgTshirtBambino = [
  "../img/bambino/T-Shirt/T-Shirt-bambino-bianca.png",
  "../img/bambino/T-Shirt/T-Shirt-bambino-nera.png",
  "../img/bambino/T-Shirt/T-Shirt-bambino-blu.png",
  "../img/bambino/T-Shirt/T-Shirt-bambino-verde.png",
  "../img/bambino/T-Shirt/T-Shirt-bambino-viola.png",
  "../img/bambino/T-Shirt/T-Shirt-bambino-rosa.png",
  "../img/bambino/T-Shirt/T-Shirt-bambino-rossa.png",
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