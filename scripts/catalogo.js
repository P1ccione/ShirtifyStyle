let modello = localStorage.getItem("modello");

if (modello === null) {
  localStorage.setItem("modello", "uomo");
  modello = localStorage.getItem("modello");
  // La variabile non esiste ancora nel localStorage e viene settata a uomo
}

const tShirtCategory = document.querySelector("#t-shirt");
const longSleevedTShirtCategory = document.querySelector(
  "#long-sleeved-t-shirt"
);
const canottaCategory = document.querySelector("#canotta");
tShirtCategory.src = `../img/${modello}/T-shirt/immagine-t-shirt-${modello}-bianca.png`;
longSleevedTShirtCategory.src = `../img/${modello}/long-sleeved-t-shirt/immagine-long-sleeved-t-shirt-${modello}-bianca.png`;
canottaCategory.src = `../img/${modello}/Canotta/immagine-canotta-${modello}-bianca.png`;
// La variabile esiste già nel localStorage, puoi utilizzarne il suo valore   donna uomo o bambino
const categories = document.querySelectorAll(".category");
categories.forEach((category) => {
  category.addEventListener("click", () => {
    localStorage.setItem("categoria", category.classList[1]);

    window.location.href = "./t-shirt-modify.html";
  });
});
