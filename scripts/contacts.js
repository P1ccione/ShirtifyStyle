const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission
  toggleThanks();
});

function toggleThanks() {
    const thanksDiv = document.querySelector('.thanksContainer');
    if (thanksDiv.style.display === 'none') {
      thanksDiv.style.display = 'block';
    } else {
      thanksDiv.style.display = 'none';
    }
  }