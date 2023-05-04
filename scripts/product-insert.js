let productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
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
  console.log("esiste", product);
  if (productsArray.length <= 0) {
    productsArray.push(product);
    localStorage.setItem("arrayProdotti", JSON.stringify(productsArray));
  } else {
    productsArray.forEach((element) => {
      if (
        product.colore == element.colore &&
        product.taglia == element.taglia &&
        product.modello == element.modello &&
        product.categoria == element.categoria
      ) {
        alert("ESISTE GIA UN PRODOTTO CON QUESTE CARATTERISTICHE");
      } else {
        productsArray.push(product);
        localStorage.setItem("arrayProdotti", JSON.stringify(productsArray));
      }
    });
  }
});
