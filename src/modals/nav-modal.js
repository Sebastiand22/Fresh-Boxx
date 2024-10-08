const openMenuBtn = document.getElementById('openMenuBtn');
const menuModal = document.getElementById('menuModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalLinks = menuModal.querySelectorAll('a'); // Selectează toate linkurile din modal

// Funcția pentru deschiderea modalului
openMenuBtn.addEventListener('click', function () {
  menuModal.style.display = 'block'; // Arată modalul
  openMenuBtn.style.display = 'none'; // Ascunde butonul hamburger
  closeModalBtn.style.display = 'block'; // Arată butonul de închidere
  document.body.classList.add('no-scroll'); // Oprește scroll-ul pe body
});

// Funcția pentru închiderea modalului
closeModalBtn.addEventListener('click', function () {
  closeModal(); // Apelează funcția de închidere a modalului
});

// Funcția de închidere a modalului (refactorizată pentru a fi reutilizabilă)
function closeModal() {
  menuModal.style.display = 'none'; // Ascunde modalul
  openMenuBtn.style.display = 'block'; // Arată butonul hamburger
  closeModalBtn.style.display = 'none'; // Ascunde butonul de închidere
  document.body.classList.remove('no-scroll'); // Permite scroll-ul din nou
  console.log("Modal închis"); // Verificare pentru a vedea dacă funcția este apelată
}

// Închiderea modalului dacă utilizatorul face clic oriunde în afara conținutului
window.addEventListener('click', function(event) {
  if (event.target === menuModal) {
    closeModal(); // Închide modalul
  }
});

// Închiderea modalului când se dă clic pe un link din interiorul acestuia
modalLinks.forEach(link => {
  link.addEventListener('click', function () {
    closeModal(); // Închide modalul la clic pe un link
  });
});



