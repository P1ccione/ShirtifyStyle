let productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
let control = false;
if (!productsArray) {
  const productsArray2 = [];
  localStorage.setItem("arrayProdotti", JSON.stringify(productsArray2));
  productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
}
const imageFile = document.querySelector("#file");
const imageProduct = document.querySelector("#immagine-prodotto");
const form = document.querySelector("#form");

imageFile.addEventListener("change", () => {
  const file = imageFile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imageProduct.src = reader.result;
  });
  reader.readAsDataURL(file);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const file = imageFile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imageProduct.src = reader.result;
  });
  const product = {
    idProdottoCatalogo: Date.now(),
    colore: document.querySelector("#color").value,
    taglia: document.querySelector("#size").value,
    prezzo: document.querySelector("#prezzoProdotto").value,
    quantita: document.querySelector("#quantitaProdotto").value,
    materiale: document.querySelector("#materialeProdotto").value,
    infoSpedizione: document.querySelector("#spedizioneProdotto").value,
    categoria: document.querySelector("#category").value,
    img: imageProduct.src,
    modello: document.querySelector("#model").value,
  };
  if (productsArray.length <= 0) {
    productsArray.push(product);
    localStorage.setItem("arrayProdotti", JSON.stringify(productsArray));
  } else {
    const alert = document.querySelector(".alert");
    productsArray.forEach((element) => {
      if (
        product.colore == element.colore &&
        product.taglia == element.taglia &&
        product.modello == element.modello &&
        product.categoria == element.categoria
      ) {
        alert.style.backgroundColor = "red";
        alert.innerHTML = "ESISTE GIA UN PRODOTTO CON QUESTE CARATTERISTICHE";
        alertFade(alert);
        control = true;
      } else {
        alert.style.backgroundColor = "rgb(5, 250, 50)";
        alert.innerHTML = "IL PRODOTTO E' STATO INSERITO";
        alertFade(alert);
      }
    });
  }
  if (control == false) {
    productsArray.push(product);
    localStorage.setItem("arrayProdotti", JSON.stringify(productsArray));
  }
});

function alertFade(alert) {
  let opacity = 0;

  // Fade in
  const fadeTimer = setInterval(() => {
    opacity += 0.1;
    alert.style.opacity = opacity.toString();
    if (opacity >= 1) {
      clearInterval(fadeTimer);
      // Wait 4 seconds, then fade out
      setTimeout(() => {
        const fadeOutTimer = setInterval(() => {
          opacity -= 0.1;
          alert.style.opacity = opacity.toString();
          if (opacity <= 0) {
            clearInterval(fadeOutTimer);
          }
        }, 20);
      }, 4000);
    }
  }, 20);
}
