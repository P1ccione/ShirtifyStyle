const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100vh";
}

const logo = document.querySelector("nav .logo");

logo.addEventListener("click", () => {
  window.location.href = "../"
})

document.querySelector('.arrow').addEventListener('click', function() {
  // scrolliamo la pagina all'inizio
  window.scrollTo({ top: 0, behavior: 'smooth' });
});