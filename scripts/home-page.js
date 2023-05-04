const sections = document.querySelectorAll('.main-section');

sections.forEach(section => {
  section.addEventListener ('click', ()=> {
    localStorage.setItem('modello', section.id);

    window.location.href='./pages/catalogo.html';
  } )

  
})