const productsArray = [
  {
    idProdottoCatalogo: 1,
    colore: "rosso",
    taglia: "M",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "t-shirt",
    img: "../img/uomo/t-shirt/immagine-t-shirt-uomo-rosso.png",
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
    taglia: "M",
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
    taglia: "M",
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
    taglia: "M",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "t-shirt",
    img: "../img/bambino/t-shirt/immagine-t-shirt-bambino-rosso.png",
    modello: "bambino",
  },
  {
    idProdottoCatalogo: 8,
    colore: "verde",
    taglia: "M",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "canotta",
    img: "../img/bambino/canotta/immagine-canotta-bambino-verde.png",
    modello: "bambino",
  },
  {
    idProdottoCatalogo: 9,
    colore: "blu",
    taglia: "M",
    prezzo: "€10.00",
    quantita: 534,
    infoSpedizione: "domani",
    categoria: "long-sleeved-t-shirt",
    img: "../img/bambino/long-sleeved-t-shirt/immagine-long-sleeved-t-shirt-bambino-blu.png",
    modello: "bambino",
  },
];

const productsContainer = document.querySelector(".products");

productsArray.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.id = product.idProdottoCatalogo;
  productElement.innerHTML = `
    <span class="product-name">${product.categoria}</span>
    <img src="${product.img}" alt="" class="product-image" />
    <span class="price">${product.prezzo}</span>
  `;
  productsContainer.appendChild(productElement);
});

const filterBtn = document.querySelector(".btn");
let array = [];

filterBtn.addEventListener("click", () => {
  array = [];
  const filterModel = document.querySelector("#modello");
  const filterColor = document.querySelector("#colore");
  productsContainer.innerHTML = "";
  const optionModel = filterModel.options[filterModel.selectedIndex].value;
  const optionColor = filterColor.options[filterColor.selectedIndex].value;

  if (optionModel != "all" && optionColor != "all") {
    productsArray.forEach((product) => {
      if (optionModel == product.modello && optionColor == product.colore) {
        array.push(product);
      }
    });
  } else if(optionModel != "all" && optionColor == "all") {
    productsArray.forEach((product) => {
      if (optionModel == product.modello) {
        array.push(product);
      }
    });
  } else if(optionModel == "all" && optionColor != "all") {
    productsArray.forEach((product) => {
      if (optionColor == product.colore) {
        array.push(product);
      }
    });
  } else {
    array = productsArray;
  }

  array.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.id = product.idProdottoCatalogo;
    productElement.innerHTML = `
  <span class="product-name">${product.categoria}</span>
  <img src="${product.img}" alt="" class="product-image" />
  <span class="price">${product.prezzo}</span>
`;
    productsContainer.appendChild(productElement);
  });
});
