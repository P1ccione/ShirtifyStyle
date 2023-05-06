const sections = document.querySelectorAll('.main-section');

sections.forEach(section => {
  section.addEventListener ('click', ()=> {
    localStorage.setItem('modello', section.id);

    window.location.href='./pages/catalogo.html';
  } )

  
})

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
  mainMenu.style.top = "-100vh";
}

const logo = document.querySelector("nav .logo");

logo.addEventListener("click", () => {
  window.location.href = "../"
})


/*const images = ['img/image1.jpeg', 'img/image2.jpeg', 'img/image3.jpeg']; 
const image = document.getElementById('image');

let currentImageIndex = 0;

setInterval(() => {
  image.src = images[currentImageIndex];
  image.style.transform = 'translateX(-100%)';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  setTimeout(() => {
    image.style.transform = 'translateX(0%)';
  }, 500);
}, 2500);*/


// Array con i nomi delle immagini
const images = ['img2/image1.jpeg', 'img2/image2.jpeg', 'img2/image3.jpeg']; 

// Indice dell'immagine attualmente visualizzata
let currentImageIndex = 0;

// Intervallo di tempo in millisecondi (in questo caso, 2.5 secondi)
setInterval(() => {
  const image = document.getElementById('image');
  image.src = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 2) % images.length;
}, 2500);



var swiper = new Swiper(".swiper-carousel", {
navigation: { 
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
pagination: {
el: ".swiper-pagination",
},
});

// Imposta l'intervallo di tempo tra ogni animazione in millisecondi
var interval = 3000;

// Definisci la funzione che esegue l'animazione
function animaCarousel() {
// Ottieni l'elemento attualmente attivo nel carosello
var elementoAttivo = document.querySelector(".swiper-slide-active");

// Ottieni l'elemento successivo nel carosello
var elementoSuccessivo = elementoAttivo.nextElementSibling;

// Se non ci sono elementi successivi, torna al primo elemento
if (!elementoSuccessivo) {
elementoSuccessivo = document.querySelector(".swiper-slide:first-child");
}

// Ottieni la larghezza del carosello
var larghezzaCarousel = document.querySelector(".swiper-carousel").offsetWidth;

// Calcola la posizione del prossimo elemento
var posizioneSuccessiva = elementoSuccessivo.offsetLeft;

// Calcola la distanza da spostare il carosello
var distanza = -(posizioneSuccessiva);

// Esegui l'animazione utilizzando la funzione CSS translateX()
document.querySelector(".swiper-wrapper").style.transform = "translateX(" + distanza + "px)";

// Aggiungi la classe .swiper-slide-active al prossimo elemento
elementoSuccessivo.classList.add("swiper-slide-active");

// Rimuovi la classe .swiper-slide-active dall'elemento attivo
elementoAttivo.classList.remove("swiper-slide-active");
}

// Avvia l'animazione automatica
var intervallo = setInterval(animaCarousel, interval);