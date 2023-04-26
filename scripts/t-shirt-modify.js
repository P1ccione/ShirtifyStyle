const productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
const productSelected = JSON.parse(localStorage.getItem("productSelected"));

if (productSelected == null) {
  window.location.href = "./catalogo.html";
}

const productImage = document.querySelector(".t-shirt-img");
const title = document.querySelector(".title");
const priceSpan = document.querySelector("#price-span");
const colorSelect = document.querySelector("#color");
const sizeSelect = document.querySelector("#size");
let newProductSelected = productSelected;
const imageFile = document.querySelector("#file");
const imageTshirt = document.querySelector("#personal-img");
const quantityInput = document.querySelector("#quantity");

title.innerHTML = `${productSelected.categoria} ${productSelected.modello}`;
priceSpan.innerHTML = `${productSelected.prezzo} €`;
productImage.style.backgroundImage = `url(${productSelected.img}`;

function changeOption() {
  for (let i = 0; i < colorSelect.options.length; i++) {
    if (colorSelect.options[i].value === newProductSelected.colore) {
      colorSelect.selectedIndex = i;
      break;
    }
  }
  for (let i = 0; i < sizeSelect.options.length; i++) {
    if (sizeSelect.options[i].value === newProductSelected.taglia) {
      sizeSelect.selectedIndex = i;
      break;
    }
  }
}

function changeColorsSizes() {
  const arrayColors = [];
  const arraySizes = [];
  productsArray.forEach((product, index) => {
    if (
      product.modello == newProductSelected.modello &&
      product.categoria == newProductSelected.categoria
    ) {
      if (!arrayColors.includes(product.colore)) {
        arrayColors.push(product.colore);
      }
    }
    if (
      product.modello == newProductSelected.modello &&
      product.categoria == newProductSelected.categoria &&
      product.colore == newProductSelected.colore
    ) {
      if (!arraySizes.includes(product.taglia)) {
        arraySizes.push(product.taglia);
      }
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

function showProductByColor() {
  const color = colorSelect.options[colorSelect.selectedIndex].value;
  const size = sizeSelect.options[sizeSelect.selectedIndex].value;
  let control = false;
  productsArray.forEach((product) => {
    if (
      product.modello == newProductSelected.modello &&
      product.categoria == newProductSelected.categoria &&
      product.taglia == size &&
      product.colore == color
    ) {
      productImage.style.backgroundImage = `url(${product.img}`;
      newProductSelected = product;
      changeColorsSizes();
      changeOption();
    } else {
      control = true;
    }
  });
  if (control == true) {
    productsArray.forEach((product) => {
      if (
        product.modello == newProductSelected.modello &&
        product.categoria == newProductSelected.categoria &&
        product.colore == color
      ) {
        productImage.style.backgroundImage = `url(${product.img}`;
        newProductSelected = product;
        changeColorsSizes();
        changeOption();
      }
    });
  }
}

function showProductBySize() {
  const color = colorSelect.options[colorSelect.selectedIndex].value;
  const size = sizeSelect.options[sizeSelect.selectedIndex].value;
  productsArray.forEach((product) => {
    if (
      product.modello == newProductSelected.modello &&
      product.categoria == newProductSelected.categoria &&
      product.taglia == size &&
      product.colore == color
    ) {
      productImage.style.backgroundImage = `url(${product.img}`;
      newProductSelected = product;
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
  showProductByColor();
});

sizeSelect.addEventListener("change", () => {
  showProductBySize();
});

quantityInput.addEventListener("change", () => {
  const quantity = parseInt(quantityInput.value);
  priceSpan.innerHTML = `${quantity * newProductSelected.prezzo} €`;
});
