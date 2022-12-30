function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const first = document.forms["reserve"]["first"];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate form inputs
let isFormValid = false;

first.addEventListener('input', (e) => {
  const isValid = e.target.checkValidity();
  if (isValid) {
    formData[0].removeAttribute('data-error-visible');
    formData[0].setAttribute('data-error', '');
    return isFormValid = true;
  } else {
    formData[0].setAttribute('data-error-visible', !isValid);
    formData[0].setAttribute('data-error', 'Veuillez entrer entre 2 et 50 caractères pour le champ du prénom.');
    return isFormValid = false;
  }
})