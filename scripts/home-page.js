
const divDonna = document.querySelector("#donna > img");
const divUomo = document.querySelector("#uomo > img");
const divBambino = document.querySelector("#bambino > img");

const imgTshirtDonna = [
  "../img/donna/t-shirt/immagine-t-shirt-donna-bianca.png",
  "../img/donna/t-shirt/immagine-t-shirt-donna-nera.png",
  "../img/donna/t-shirt/immagine-t-shirt-donna-blu.png",
  "../img/donna/t-shirt/immagine-t-shirt-donna-verde.png",
  "../img/donna/t-shirt/immagine-t-shirt-donna-viola.png",
  "../img/donna/t-shirt/immagine-t-shirt-donna-rosa.png",
  "../img/donna/t-shirt/immagine-t-shirt-donna-rossa.png",
];

const imgTshirtUomo = [
  "../img/uomo/t-shirt/immagine-t-shirt-uomo-bianca.png",
  "../img/uomo/t-shirt/immagine-t-shirt-uomo-nera.png",
  "../img/uomo/t-shirt/immagine-t-shirt-uomo-blu.png",
  "../img/uomo/t-shirt/immagine-t-shirt-uomo-verde.png",
  "../img/uomo/t-shirt/immagine-t-shirt-uomo-viola.png",
  "../img/uomo/t-shirt/immagine-t-shirt-uomo-rosa.png",
  "../img/uomo/t-shirt/immagine-t-shirt-uomo-rossa.png",
];

const imgTshirtBambino = [
  "../img/bambino/t-shirt/immagine-t-shirt-bambino-bianca.png",
  "../img/bambino/t-shirt/immagine-t-shirt-bambino-nera.png",
  "../img/bambino/t-shirt/immagine-t-shirt-bambino-blu.png",
  "../img/bambino/t-shirt/immagine-t-shirt-bambino-verde.png",
  "../img/bambino/t-shirt/immagine-t-shirt-bambino-viola.png",
  "../img/bambino/t-shirt/immagine-t-shirt-bambino-rosa.png",
  "../img/bambino/t-shirt/immagine-t-shirt-bambino-rossa.png",
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


const sections = document.querySelectorAll('.main-section');

sections.forEach(section => {
  section.addEventListener ('click', ()=> {
    localStorage.setItem('modello', section.id);

    window.location.href='./catalogo.html';
  } )

  
})