const productsArray = [
  {
    idProdottoCatalogo: 1,
    colore: "bianco",
    taglia: "S",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "t-shirt",
    img: "../img/uomo/t-shirt/immagine-t-shirt-uomo-bianco.png",
    modello: "uomo",
  },
  {
    idProdottoCatalogo: 10,
    colore: "bianco",
    taglia: "M",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "t-shirt",
    img: "../img/uomo/t-shirt/immagine-t-shirt-uomo-bianco.png",
    modello: "uomo",
  },
  {
    idProdottoCatalogo: 2,
    colore: "blu",
    taglia: "M",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "canotta",
    img: "../img/uomo/canotta/immagine-canotta-uomo-blu.png",
    modello: "uomo",
  },
  {
    idProdottoCatalogo: 3,
    colore: "viola",
    taglia: "L",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "long-sleeved-t-shirt",
    img: "../img/uomo/long-sleeved-t-shirt/immagine-long-sleeved-t-shirt-uomo-viola.png",
    modello: "uomo",
  },
  {
    idProdottoCatalogo: 4,
    colore: "rosso",
    taglia: "XL",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "t-shirt",
    img: "../img/donna/t-shirt/immagine-t-shirt-donna-rosso.png",
    modello: "donna",
  },
  {
    idProdottoCatalogo: 5,
    colore: "verde",
    taglia: "M",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "canotta",
    img: "../img/donna/canotta/immagine-canotta-donna-verde.png",
    modello: "donna",
  },
  {
    idProdottoCatalogo: 6,
    colore: "blu",
    taglia: "M",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "long-sleeved-t-shirt",
    img: "../img/donna/long-sleeved-t-shirt/immagine-long-sleeved-t-shirt-donna-blu.png",
    modello: "donna",
  },
  {
    idProdottoCatalogo: 7,
    colore: "rosso",
    taglia: "S",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "t-shirt",
    img: "../img/bambino/t-shirt/immagine-t-shirt-bambino-rosso.png",
    modello: "bambino",
  },
  {
    idProdottoCatalogo: 8,
    colore: "nero",
    taglia: "M",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "canotta",
    img: "../img/bambino/canotta/immagine-canotta-bambino-nero.png",
    modello: "bambino",
  },
  {
    idProdottoCatalogo: 9,
    colore: "rosa",
    taglia: "L",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "long-sleeved-t-shirt",
    img: "../img/bambino/long-sleeved-t-shirt/immagine-long-sleeved-t-shirt-bambino-rosa.png",
    modello: "bambino",
  },
];

const productsContainer = document.querySelector(".products");
const filterBtn = document.querySelector(".btn");

let filteredProducts = [];

const modelloSelezionato = localStorage.getItem("modello");

const selectModello = document.getElementById("modello");

if (modelloSelezionato) {
  for (let i = 0; i < selectModello.options.length; i++) {
    if (selectModello.options[i].value === modelloSelezionato) {
      selectModello.selectedIndex = i;
      break;
    }
  }
  showProductsByModel(modelloSelezionato);
} else {
  showAllProducts();
}

function showAllProducts() {
  productsArray.forEach((product) => {
    renderProduct(product);
  });
  productClick();
}

function showProductsByModel(model) {
  productsArray
    .filter((product) => product.modello === model)
    .forEach((product) => renderProduct(product));

  productClick();
}

function renderProduct(product) {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.id = product.idProdottoCatalogo;
  productElement.innerHTML = `
    <span class="product-name">${
      product.categoria + " " + product.modello
    }</span>
    <img src="${product.img}" alt="" class="product-image" />
    <span class="text">taglia: ${product.taglia}</span>
    <span class="text">colore: ${product.colore}</span>
    <span class="text">prezzo: ${product.prezzo}</span>
  `;
  productsContainer.appendChild(productElement);
}

filterBtn.addEventListener("click", () => {
  const filterModel = document.querySelector("#modello");
  const filterColor = document.querySelector("#colore");
  const filterSize = document.querySelector("#taglia");
  const optionModel = filterModel.options[filterModel.selectedIndex].value;
  const optionColor = filterColor.options[filterColor.selectedIndex].value;
  const optionSize = filterSize.options[filterSize.selectedIndex].value;

  filteredProducts = productsArray.filter(
    (product) =>
      (optionModel === "all" || product.modello === optionModel) &&
      (optionColor === "all" || product.colore === optionColor) &&
      (optionSize === "all" || product.taglia === optionSize)
  );

  productsContainer.innerHTML = "";

  if (filteredProducts.length != 0) {
    productsContainer.classList.remove("active");
    filteredProducts.forEach((product) => {
      renderProduct(product);
    });
    productClick();
  } else {
    const text = document.createElement("span");
    text.classList.add("product-text");
    text.innerHTML = "Non ci sono prodotti con queste caratteristiche";
    productsContainer.classList.add("active");
    productsContainer.appendChild(text);
  }
});

function productClick() {
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    product.addEventListener("click", () => {
      localStorage.setItem("productSelected", product.id);
      window.location.href = "./t-shirt-modify.html";
    });
  });
}