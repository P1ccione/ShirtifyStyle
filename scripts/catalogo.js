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

  tShirtCategory.src = `../img/${modello}/t-shirt/immagine-t-shirt-${modello}-bianco.png`;
  longSleevedTShirtCategory.src = `../img/${modello}/long-sleeved-t-shirt/immagine-long-sleeved-t-shirt-${modello}-bianco.png`;
  canottaCategory.src = `../img/${modello}/canotta/immagine-canotta-${modello}-bianco.png`;
  tShirtCategory.style.opacity = "1";
  longSleevedTShirtCategory.style.opacity = "1";
  canottaCategory.style.opacity = "1";

// La variabile esiste già nel localStorage, puoi utilizzarne il suo valore   donna uomo o bambino
const categories = document.querySelectorAll(".category");
categories.forEach((category) => {
  category.addEventListener("click", () => {
    localStorage.setItem("categoria", category.classList[1]);

    window.location.href = "./t-shirt-modify.html";
  });
});
