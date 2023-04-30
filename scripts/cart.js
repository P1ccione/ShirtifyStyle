const cartArray = JSON.parse(localStorage.getItem("cartArray"));
if (cartArray == null) {
  localStorage.setItem("cartArray", []);
} else {
  console.log(cartArray);
}
