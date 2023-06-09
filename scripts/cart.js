const cartArray = JSON.parse(localStorage.getItem("cartArray"));
let productsArray = JSON.parse(localStorage.getItem("arrayProdotti"));
let prodotto;
let totale = 0;
const productsContainer = document.querySelector(".container");
if (!cartArray || cartArray.length <= 0) {
  productsContainer.innerHTML = `<span style="margin-top: 50px; font-size: 2rem; text-align: center;">IL TUO CARRELLO E' VUOTO</span>`;
} else {
  productsContainer.innerHTML = "";
  cartArray.forEach((product) => {
    productsArray.forEach((product2) => {
      if (product.idProdotto === product2.idProdottoCatalogo) {
        prodotto = product2;
      }
    });
    totale = totale + (parseInt(product.quantita) * parseInt(prodotto.prezzo));
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
            <span class="text price"
                >€ ${ parseInt(product.quantita) * parseInt(prodotto.prezzo) }</span
            >
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
            <form id="productRemove${product.idRiga}" class="btnDiv">
            <input
                type="number"
                name=""
                id="removeQuantity${product.idRiga}"
                min="1"
                max="${product.quantita}"
                value="1"
                required
                class="numberRemove"
            />
            <button type="submit" class="btn">RIMUOVI</button>
            </form>
            </div>
            `;

    productsContainer.insertAdjacentHTML("beforeend", itemHTML);
    const productRemove = document.querySelector(
      `#productRemove${product.idRiga}`
    );
    productRemove.addEventListener("submit", () => {
      const removeNumber = parseInt(
        document.querySelector(`#removeQuantity${product.idRiga}`).value
      );
      if (removeNumber == product.quantita) {
        const index = cartArray.findIndex(
          (item) => item.idRiga === product.idRiga
        );
        if (index !== -1) {
          cartArray.splice(index, 1);
        }
      } else {
        product.quantita = parseInt(product.quantita) - removeNumber;
      }
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
      window.location.href = "./cart.html";
    });
  });

  const lastDiv = `
    <div class="lastDiv">
        <button id="return" class="btn" onclick="window.location.href='./catalogo.html'">CONTINUA A COMPRARE</button>
        <span id="totPrice" style="font-size: 2rem;">TOTALE: € ${totale}</span>
        <button id="continue" class="btn" onclick="window.location.href='./orderFeedback.html'">PROSEGUI AL PAGAMENTO</button>
      </div>
    `;

  document.querySelector(".main").insertAdjacentHTML("beforeend", lastDiv);
}

localStorage.removeItem("productSelected");
