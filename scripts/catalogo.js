var variabile = localStorage.getItem('modello');


if (variabile === null) {
    console.log(variabile);
    localStorage.setItem('modello', 'uomo');
  // La variabile non esiste ancora nel localStorage e viene settata a uomo
} else {
    console.log(variabile);
    const categories = document.querySelectorAll('.category img')
    categories.forEach()
  // La variabile esiste già nel localStorage, puoi utilizzarne il suo valore   donna uomo o bambino

}
