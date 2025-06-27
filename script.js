
// JS Placeholder - animations, interactions
console.log("Script cargado correctamente.");
// Lightbox para imagen principal
const img = document.getElementById('proyecto-img');
const lightbox = document.getElementById('lightbox');
const imgModal = document.getElementById('img-modal');
const closeBtn = document.querySelector('.close');

if (img && lightbox && imgModal && closeBtn) {
  img.onclick = () => {
    lightbox.style.display = "block";
    imgModal.src = img.src;
  }

  closeBtn.onclick = () => {
    lightbox.style.display = "none";
  }

  window.onclick = (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  }
}

