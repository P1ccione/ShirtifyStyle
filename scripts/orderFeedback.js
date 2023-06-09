const cartArray = JSON.parse(localStorage.getItem("cartArray"));
let productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
let prodotto;
const productsContainer = document.querySelector(".container");

cartArray.forEach((product) => {
  productsArray.forEach((product2) => {
    if (product.idProdotto === product2.idProdottoCatalogo) {
      prodotto = product2;
      product2.quantita = product2.quantita - product.quantita;
    }
  });
  localStorage.setItem("arrayProdotti", JSON.stringify(productsArray));
  const itemHTML = `
            <div class="item">
                <div class="item-column">
                <span class="column-title">Prodotto</span>
                <img src="${prodotto.img}" alt="" class="product-img" />
                </div>
                <div class="item-column">
                <span class="column-title">Immagine</span>
                <img src="${product.userImg}" alt="" class="user-img" />
                </div>
                <div class="item-column">
                <span class="column-title">Prezzo</span>
                <span class="text price">€ ${
                  parseInt(product.quantita) * parseInt(prodotto.prezzo)
                }</span>
                </div>
                <div class="item-column">
                <span class="column-title">Quantità</span>
                <span class="text quantity">${parseInt(product.quantita)}</span>
                </div>
                <div class="item-column">
                <span class="column-title">Descrizione</span>
                <div class="description">
                    <div class="color">
                    <span class="title">Colore: </span>
                    <span class="text1">${prodotto.colore}</span>
                    </div>
                    <div class="size">
                    <span class="title">Taglia: </span>
                    <span class="text1">${product.taglia}</span>
                    </div>
                    <div class="materials">
                    <span class="title">Materiali: </span>
                    <span class="text1">${prodotto.materiale}</span>
                    </div>
                    <div class="print-type">
                    <span class="title">Tipo stampa: </span>
                    <span class="text1">${product.infoStampa}</span>
                    </div>
                </div>
                </div>
            </div>
            <hr class="item-hr" />
            `;
  productsContainer.insertAdjacentHTML("beforeend", itemHTML);
});
localStorage.removeItem("cartArray");
