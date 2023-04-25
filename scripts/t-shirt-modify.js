const productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
const productSelected = JSON.parse(localStorage.getItem("productSelected"));

const productImage = document.querySelector(".t-shirt-img");
const priceSpan = document.querySelector("#price-span");
const arrayColors = [];
const arraySizes = [];
const colorSelect = document.querySelector("#color");
const sizeSelect = document.querySelector("#size");
let newProductSelectedt = productSelected;
const imageFile = document.querySelector("#file");
const imageTshirt = document.querySelector("#personal-img");
const quantityInput = document.querySelector("#quantity");

priceSpan.innerHTML = `${productSelected.prezzo} €`;
productImage.style.backgroundImage = `url(${productSelected.img}`;

function changeOption() {
  for (let i = 0; i < colorSelect.options.length; i++) {
    if (colorSelect.options[i].value === newProductSelectedt.colore) {
      colorSelect.selectedIndex = i;
      break;
    }
  }
  for (let i = 0; i < sizeSelect.options.length; i++) {
    if (sizeSelect.options[i].value === newProductSelectedt.taglia) {
      sizeSelect.selectedIndex = i;
      break;
    }
  }
}

function changeColorsSizes() {
  const arrayColors = [];
  const arraySizes = [];
  productsArray.forEach((product) => {
    if (
      product.modello == newProductSelectedt.modello &&
      product.categoria == newProductSelectedt.categoria &&
      product.taglia == newProductSelectedt.taglia &&
      !(product.colore in arrayColors)
    ) {
      arrayColors.push(product.colore);
    }
    if (
      product.modello == newProductSelectedt.modello &&
      product.categoria == newProductSelectedt.categoria &&
      product.colore == newProductSelectedt.colore &&
      !(product.taglia in arraySizes)
    ) {
      arraySizes.push(product.taglia);
    }
  });
  colorSelect.innerHTML = "";
  for (let i = 0; i < arrayColors.length; i++) {
    const option = document.createElement("option");
    option.text = arrayColors[i];
    option.value = arrayColors[i];
    colorSelect.appendChild(option);
  }
  sizeSelect.innerHTML = "";
  for (let i = 0; i < arraySizes.length; i++) {
    const option = document.createElement("option");
    option.text = arraySizes[i];
    option.value = arraySizes[i];
    sizeSelect.appendChild(option);
  }
}

function showProduct() {
  const colorSelect = document.querySelector("#color");
  const color = colorSelect.options[colorSelect.selectedIndex].value;
  const size = sizeSelect.options[sizeSelect.selectedIndex].value;
  productsArray.forEach((product) => {
    if (
      product.modello == newProductSelectedt.modello &&
      product.categoria == newProductSelectedt.categoria &&
      product.taglia == size &&
      product.colore == color
    ) {
      productImage.style.backgroundImage = `url(${product.img}`;
      newProductSelectedt = product;
      changeColorsSizes();
      changeOption();
    }
  });
}

changeColorsSizes();
changeOption();

imageFile.addEventListener("change", () => {
  const file = imageFile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imageTshirt.src = reader.result;
  });
  reader.readAsDataURL(file);
});

colorSelect.addEventListener("change", () => {
  showProduct();
});

sizeSelect.addEventListener("change", () => {
  showProduct();
});

quantityInput.addEventListener("change", () => {
  const quantity = parseInt(quantityInput.value);
  priceSpan.innerHTML = `${quantity * newProductSelectedt.prezzo} €`;
});