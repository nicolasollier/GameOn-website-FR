function editNav() {
  let x = document.getElementById("myTopnav");
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
const last = document.forms["reserve"]["last"];
const email = document.forms["reserve"]["email"];
const birthdate = document.forms["reserve"]["birthdate"];
const quantity = document.forms["reserve"]["quantity"];
const inputs = document.querySelectorAll('input');

// REGEX
const nameRegex = /^[a-z ,.'-]+$/i;
const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const quantityRegex = /^[0-9]+$/;

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  //switch displays between reserve form and confirmation modal
  document.getElementById('reserve').style.display = 'block';
  document.getElementById('confirmation').style.display = 'none';
  modalbg.style.display = "none";

  // Loop through inputs and apply clearInputErrors
  inputs.forEach(input => {
    clearInputErrors(input);
  });

  resetForm();
}
// Validates form
isFormValid = true;

function validateForm(e) {
  e.preventDefault();
  
  let now = new Date();
  let birthdateObj = new Date(birthdate.value);

  if (nameRegex.test(first.value) === false) {
    triggerFormError(first, 'Veuillez entrer un prénom valide');
    isFormValid = false;
  }

  if (nameRegex.test(last.value) === false) {
    triggerFormError(last, 'Veuillez entrer un nom valide');
    isFormValid = false;
  }

  if (emailRegex.test(email.value) === false) {
    triggerFormError(email, 'Veuillez entrer un email valide');
    isFormValid = false;
  }

  if (birthdateObj > now || birthdateObj < new Date(1923, 1, 1)) {
    triggerFormError(birthdate, 'Veuillez entrer une date de naissance correcte');
    isFormValid = false;
  }

  if (quantityRegex.test(quantity.value) === false) {
    triggerFormError(quantity, 'Veuillez entrer un nombre valide');
    isFormValid = false;
  }

  if (document.getElementById('checkbox1').checked === false) {
    triggerFormError(document.getElementById('checkbox1'), 'Veuillez accepter les conditions');
    isFormValid = false;
  }

  // Check if inputs are not empty
  inputs.forEach(input => {
    if (input.value === "") {
      triggerFormError(input, 'Ce champ est obligatoire');
      isFormValid = false;
    }
  });

  if (isFormValid) {
    document.getElementById('reserve').style.display = 'none';
    document.getElementById('confirmation').style.display = 'flex';
  }
}

function triggerFormError(element, message) {
  element.parentNode.setAttribute('data-error-visible', 'true');
  element.parentNode.setAttribute('data-error', message);
}

function resetForm() {
  document.getElementById('reserve').reset();
}

function clearInputErrors(input) {
  input.parentNode.setAttribute('data-error-visible', 'false');
  input.parentNode.setAttribute('data-error', '');
  isFormValid = true;
}

document.querySelector('form').addEventListener("submit", validateForm)