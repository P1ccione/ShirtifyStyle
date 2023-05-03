const cartArray = JSON.parse(localStorage.getItem("cartArray"));
const productsArray = (JSON.parse(localStorage.getItem("arrayProdotti"))).filter((product) => product.quantita > 0);
let prodotto;
const productsContainer = document.querySelector(".container");
if (!cartArray) {
    alert("non ci sono prodotti nel carrello");
  } else {
    cartArray.forEach(product => {
        productsArray.forEach(product2 => {
            if (product.idProdotto === product2.idProdottoCatalogo) {
                prodotto = product2;
            }
        });
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
                <span class="text price">€ ${parseInt(product.quantita) * parseInt(prodotto.prezzo)}</span>
                </div>
                <div class="item-column">
                <span class="column-title">Quantità</span>
                <span class="text quantity">${parseInt(product.quantita)}</span>
                </div>
                <div class="item-column">
                <span class="column-title">Subtotale</span>
                <span class="text subtotal">€ ${(parseInt(product.quantita) * parseInt(prodotto.prezzo))+(((parseInt(product.quantita) * parseInt(prodotto.prezzo))/100)*10)}</span>
                </div>
                <div class="item-column">
                <span class="column-title">Descrizione</span>
                <div class="description">
                    <div class="color">
                    <span class="title">Colore: </span>
                    <span class="text">${prodotto.colore}</span>
                    </div>
                    <div class="size">
                    <span class="title">Taglia: </span>
                    <span class="text">${product.taglia}</span>
                    </div>
                    <div class="materials">
                    <span class="title">Materiali: </span>
                    <span class="text">${prodotto.materiale}</span>
                    </div>
                    <div class="print-type">
                    <span class="title">Tipo stampa: </span>
                    <span class="text">${product.infoStampa}</span>
                    </div>
                </div>
                </div>
                <button class="btn">RIMUOVI</button>
            </div>
            <hr class="item-hr" />
            `;
            
        productsContainer.insertAdjacentHTML("beforeend", itemHTML);
        const productRemoveBtn = document.querySelector(".btn")
        productRemoveBtn.addEventListener("click", () => {

        })
    });
  }

