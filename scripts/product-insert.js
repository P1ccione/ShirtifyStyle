const imageFile = document.querySelector("#file");
const imageProduct = document.querySelector("#immagine-prodotto");

imageFile.addEventListener("change", () => {
  const file = imageFile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imageProduct.src = reader.result;
  });
  reader.readAsDataURL(file);
});