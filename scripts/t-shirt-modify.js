let productsArray = JSON.parse(localStorage.getItem("arrayProdotti")).filter(
  (product) => product.quantita > 0
);
const productSelected = JSON.parse(localStorage.getItem("productSelected"));

if (productSelected == null || productsArray.length <= 0 || productsArray == null) {
  window.location.href = "./catalogo.html";
}

let cartArray = JSON.parse(localStorage.getItem("cartArray"));

if (!cartArray) {
  const cartArray2 = [];
  localStorage.setItem("cartArray", JSON.stringify(cartArray2));
  cartArray = JSON.parse(localStorage.getItem("cartArray"));
}

const productImage = document.querySelector(".productImg");
const title = document.querySelector(".title");
const priceSpan = document.querySelector("#price-span");
const colorSelect = document.querySelector("#color");
const sizeSelect = document.querySelector("#size");
let newProductSelected = productSelected;
const imageFile = document.querySelector("input.custom-file-input");
const imageTshirt = document.querySelector("#personal-img");
const quantityInput = document.querySelector("#quantity");
quantityInput.max = newProductSelected.quantita;
let image;

const form = document.querySelector("form");

title.innerHTML = `${productSelected.categoria} ${productSelected.modello}`;
priceSpan.innerHTML = `${productSelected.prezzo} €`;
productImage.src = `${productSelected.img}`;

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
      quantityInput.max = newProductSelected.quantita;
      localStorage.setItem(
        "productSelected",
        JSON.stringify(newProductSelected)
      );
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
        quantityInput.max = newProductSelected.quantita;
        localStorage.setItem(
          "productSelected",
          JSON.stringify(newProductSelected)
        );
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
      quantityInput.max = newProductSelected.quantita;
      localStorage.setItem(
        "productSelected",
        JSON.stringify(newProductSelected)
      );
    }
  });
}

changeColorsSizes();
changeOption();

imageFile.addEventListener("change", () => {
  const file = imageFile.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    image = reader.result;
    imageTshirt.src = image;
  };
  reader.readAsDataURL(file);
  document.querySelector("#name").value = `${imageFile.files[0].name}`;
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

form.addEventListener("submit", function (event) {
  event.preventDefault(); // rimuove l'evento predefinito del form
  // esegui la tua funzione qui
  const cartProduct = {
    idRiga: Date.now(),
    idCarrello: Math.random().toString(36).substr(2, 9),
    idProdotto: newProductSelected.idProdottoCatalogo,
    quantita: parseInt(quantityInput.value),
    taglia: sizeSelect.options[sizeSelect.selectedIndex].value,
    userImg: image,
    infoSpedizione: newProductSelected.infoSpedizione,
    infoStampa: "Offset",
  };
  let control = false;
  cartArray.forEach(element => {

    if(element.idProdotto == cartProduct.idProdotto && element.taglia == cartProduct.taglia && element.userImg == cartProduct.userImg && element.infoSpedizione == cartProduct.infoSpedizione){
      console.log(element.quantita);
      element.quantita = parseInt(element.quantita) + parseInt(cartProduct.quantita);
      console.log(element.quantita);
      control = true;
    }
    
  });
  if(control != true){
    cartArray.push(cartProduct);
  }
  localStorage.setItem("cartArray", JSON.stringify(cartArray));
  window.location.href = "./cart.html";

});
