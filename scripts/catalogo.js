var variabile = localStorage.getItem('modello');


if (variabile === null) {
    console.log(variabile);
    localStorage.setItem('modello', 'uomo');
  // La variabile non esiste ancora nel localStorage e viene settata a uomo
} else {
    const tShirtCategory = document.querySelector('#t-shirt')
    const longSleevedTShirtCategory = document.querySelector('#long-sleeved-t-shirt')
    const canottaCategory = document.querySelector('#canotta')
    tShirtCategory.src = `../img/${variabile}/T-shirt/immagine-t-shirt-${variabile}-bianca.png`;
    longSleevedTShirtCategory.src = `../img/${variabile}/long-sleeved-t-shirt/immagine-long-sleeved-t-shirt-${variabile}-bianca.png`;
    canottaCategory.src = `../img/${variabile}/Canotta/immagine-canotta-${variabile}-bianca.png`;
  // La variabile esiste già nel localStorage, puoi utilizzarne il suo valore   donna uomo o bambino

}
