// Obține elementele modalului și formularului
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close-button');
const emailInput = document.getElementById('email'); // Elementul de input pentru email

// Afișează modalul doar dacă email-ul este valid
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Previne trimiterea formularului

  // Verifică dacă email-ul este valid
  const emailValue = emailInput.value;
  if (validateEmail(emailValue)) {
    modal.style.display = 'block'; // Afișează modalul
  } else {
    alert('Please enter your e-mail😉.')
  }
});

// Închide modalul când utilizatorul face clic pe butonul de închidere
closeButton.addEventListener('click', function () {
  modal.style.display = 'none'; // Ascunde modalul
});

// Închide modalul când utilizatorul face clic în afara modalului
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'; // Ascunde modalul
  }
});

// Funcție de validare a email-ului
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresie regulată simplă pentru email valid
  return emailPattern.test(email);
}
