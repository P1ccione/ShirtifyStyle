const productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
const productSelected = JSON.parse(localStorage.getItem("productSelected"));

const productImage = document.querySelector(".t-shirt-img");
const priceSpan = document.querySelector("#price-span");
let colorSelect = document.querySelector("#color");
let sizeSelect = document.querySelector("#size");
let newProductSelectedt = productSelected;

priceSpan.innerHTML = `${productSelected.prezzo} €`;
productImage.style.backgroundImage = `url(${productSelected.img}`;

const imageFile = document.querySelector("#file");
const imageTshirt = document.querySelector("#personal-img");

for (let i = 0; i < colorSelect.options.length; i++) {
  if (colorSelect.options[i].value === productSelected.colore) {
    colorSelect.selectedIndex = i;
    break;
  }
}

for (let i = 0; i < sizeSelect.options.length; i++) {
  if (sizeSelect.options[i].value === productSelected.taglia) {
    sizeSelect.selectedIndex = i;
    break;
  }
}

sizeSelect = document.querySelector("#size");

imageFile.addEventListener("change", () => {
  const file = imageFile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imageTshirt.src = reader.result;
  });
  reader.readAsDataURL(file);
});

colorSelect.addEventListener("change", () => {
  const colorSelect = document.querySelector("#color");
  const color = colorSelect.options[colorSelect.selectedIndex].value;
  let control = false;
  productsArray.forEach((product) => {
    if (
      product.modello == newProductSelectedt.modello &&
      product.categoria == newProductSelectedt.categoria &&
      product.taglia == newProductSelectedt.taglia &&
      product.colore == color
    ) {
      productImage.style.backgroundImage = `url(${product.img}`;
      newProductSelectedt = product;
      control = true;
    }
  });
  if(control == false) {
    alert(`Non ci sono ${newProductSelectedt.categoria} per ${newProductSelectedt.modello} di taglia ${newProductSelectedt.taglia} con colore ${color}`)  
    for (let i = 0; i < colorSelect.options.length; i++) {
      if (colorSelect.options[i].value === newProductSelectedt.colore) {
        colorSelect.selectedIndex = i;
        break;
      }
    }
  }
});

sizeSelect.addEventListener("change", () => {
  const sizeSelect = document.querySelector("#size");
  const size = sizeSelect.options[sizeSelect.selectedIndex].value;
  let control = false;
  productsArray.forEach((product) => {
    if (
      product.modello == newProductSelectedt.modello &&
      product.categoria == newProductSelectedt.categoria &&
      product.colore == newProductSelectedt.colore &&
      product.taglia == size
    ) {
      productImage.style.backgroundImage = `url(${product.img}`;
      newProductSelectedt = product;
      control = true;
    }
  });
  if(control == false) {
    alert(`Non ci sono ${newProductSelectedt.categoria} per ${newProductSelectedt.modello} di colore ${newProductSelectedt.colore} con taglia ${size}`)
    for (let i = 0; i < sizeSelect.options.length; i++) {
      if (sizeSelect.options[i].value === newProductSelectedt.taglia) {
        sizeSelect.selectedIndex = i;
        break;
      }
    }
  }
});
