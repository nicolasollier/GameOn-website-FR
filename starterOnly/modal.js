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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  document.getElementById('reserve').style.display = 'block';
  document.getElementById('confirmation').style.display = 'none';
  modalbg.style.display = "none";

  //select all inputs
  const inputs = document.querySelectorAll('input');
  //loop through inputs and apply clearInputErrors
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

  if (first.value === '') {
    triggerFormError(first, 'Veuillez entrer votre prénom');
    isFormValid = false;
  }

  if (/^[a-z ,.'-]+$/i.test(first.value) === false) {
    triggerFormError(first, 'Veuillez entrer un prénom valide');
    isFormValid = false;
  }

  if (last.value === '') {
    triggerFormError(last, 'Veuillez entrer votre nom');
    isFormValid = false;
  }

  if (/^[a-z ,.'-]+$/i.test(last.value) === false) {
    triggerFormError(last, 'Veuillez entrer un nom valide');
    isFormValid = false;
  }

  if (email.value === '') {
    triggerFormError(email, 'Veuillez entrer votre email');
    isFormValid = false;
  }

  if (/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email.value) === false) {
    triggerFormError(email, 'Veuillez entrer un email valide');
    isFormValid = false;
  }

  if (birthdate.value === '') {
    triggerFormError(birthdate, 'Veuillez entrer votre date de naissance');
    isFormValid = false;
  }

  if (birthdateObj > now) {
    triggerFormError(birthdate, 'Veuillez entrer une date de naissance correcte');
    isFormValid = false;
  }

  if (quantity.value === '') {
    triggerFormError(quantity, 'Veuillez entrer le nombre de tournois');
    isFormValid = false;
  }

  if (/^[0-9]+$/.test(quantity.value) === false) {
    triggerFormError(quantity, 'Veuillez entrer un nombre valide');
    isFormValid = false;
  }

  if (document.getElementById('checkbox1').checked === false) {
    triggerFormError(document.getElementById('checkbox1'), 'Veuillez accepter les conditions');
    isFormValid = false;
  }

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
  isFormValid = true;
}

document.querySelector('form').addEventListener("submit", validateForm)