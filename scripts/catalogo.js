let productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
if (!productsArray) {
  const productsArray2 = [];
  localStorage.setItem("arrayProdotti", JSON.stringify(productsArray2));
  productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
} else {
  productsArray = JSON.parse(localStorage.getItem("arrayProdotti")).filter(
    (product) => product.quantita > 0
  );
}



const productsContainer = document.querySelector(".products");
const filterBtn = document.querySelector(".btn");

let filteredProducts = [];

const modelloSelezionato = localStorage.getItem("modello");

const selectModello = document.getElementById("modello");

if (modelloSelezionato != null) {
  console.log("modello diverso da null");
  for (let i = 0; i < selectModello.options.length; i++) {
    if (selectModello.options[i].value === modelloSelezionato) {
      selectModello.selectedIndex = i;
      break;
    }
  }
  showProductsByModel(modelloSelezionato);
} else {
  console.log("modello uguale da null");
  if (productsArray.length <= 0) {
    const text = document.createElement("span");
    text.classList.add("product-text");
    text.innerHTML = "Non ci sono prodotti con queste caratteristiche";
    productsContainer.classList.add("active");
    productsContainer.appendChild(text);
  } else {
  showAllProducts();
  }
}

function showAllProducts() {
    productsArray.forEach((product) => {
      renderProduct(product);
    });
    productClick();
}

function showProductsByModel(model) {
  const newArray = productsArray.filter(
    (product) => product.modello === model && product.quantita > 0
  );
  if (newArray.length <= 0) {
    const text = document.createElement("span");
    text.classList.add("product-text");
    text.innerHTML = "Non ci sono prodotti con queste caratteristiche";
    productsContainer.classList.add("active");
    productsContainer.appendChild(text);
  } else {
    newArray.forEach((product) => renderProduct(product));
    productClick();
  }
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
    <span class="text">prezzo: € ${product.prezzo}</span>
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
      productsArray.forEach((product2) => {
        if (product2.idProdottoCatalogo == product.id) {
          localStorage.setItem("productSelected", JSON.stringify(product2));
        }
      });
      window.location.href = "./t-shirt-modify.html";
    });
  });
}

localStorage.removeItem("modello");
