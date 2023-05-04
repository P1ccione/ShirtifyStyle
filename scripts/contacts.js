const form = document.querySelector('form');
const formContainer = document.querySelector(".formContainer");
const mainContainer = document.querySelector(".mainContainer");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  mainContainer.innerHTML="";
  mainContainer.innerHTML=`
  <div class="thanksContainer">
    <span class="tanksText">Grazie per il tuo messaggio!</span>
    <div class ="tanksSocialContainer">
    <h3>Seguici anche sui nostri social</h3>
    <div class="tanksSocial-icon"">
      <i class="fab fa-facebook social-icon" style="font-size: 50px"></i>
      <i class="fab fa-instagram social-icon" style="font-size: 50px"></i>
      <i class="fab fa-twitter social-icon" style="font-size: 50px"></i>
  </div>
</div>

  </div>
  
  `;
  mainContainer.style.height = "85vh";
});