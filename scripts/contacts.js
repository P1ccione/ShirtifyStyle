
function toggleThanks() {
    const thanksDiv = document.querySelector('.thanksContainer');
    if (thanksDiv.style.display === 'none') {
      thanksDiv.style.display = 'block';
    } else {
      thanksDiv.style.display = 'none';
    }
  }