const colors = document.querySelectorAll(".fa-circle");
const tShirt = document.querySelector(".container .t-shirt .t-shirt-img");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    setColor(color);
  });
});
function setColor(color) {
  colors.forEach((color) => {
    color.classList.remove("active");
  });
  tShirt.style.backgroundImage = `url(../img/uomo/T-Shirt-uomo-${color.id}.png)`;
  color.classList.add("active");
}
