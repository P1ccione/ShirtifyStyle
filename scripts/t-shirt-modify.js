
const modello = localStorage.getItem('modello');
const categoria = localStorage.getItem('categoria');


if (modello === null) {
    localStorage.setItem('modello', 'uomo');
    
  if (categoria === null) {
    localStorage.setItem('categoria', 't-shirt');
  }
  // La variabile non esiste ancora nel localStorage e viene settata a uomo
} else {
      
  if (categoria === null) {
    localStorage.setItem('categoria', 't-shirt');
  }

  const immagineCategoria = document.querySelector(".container .t-shirt .t-shirt-img");

  immagineCategoria.style.backgroundImage = `url(../img/${modello}/${categoria}/immagine-${categoria}-${modello}-bianca.png)`

}



const colors = document.querySelectorAll(".fa-circle");
const tShirt = document.querySelector(".container .t-shirt .t-shirt-img");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    setColor(color);
  });
});
function setColor(color) {
  colors.forEach((color) => {
    color.classList.remove("active");
  });
  tShirt.style.backgroundImage = `url(../img/${modello}/${categoria}/immagine-${categoria}-${modello}-${color.id}.png)`;
  color.classList.add("active");
}

const imageFile = document.querySelector("#file");
const quantity = document.querySelector("#quantity");
const price = document.querySelector("#price-span");
const imageTshirt = document.querySelector("#personal-img");

imageFile.addEventListener("change", () => {
  const file = imageFile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imageTshirt.src = reader.result;
  });
  reader.readAsDataURL(file);
});

quantity.addEventListener("change", () => {
  price.innerHTML = `${10 * parseInt(quantity.value)} €`;
});