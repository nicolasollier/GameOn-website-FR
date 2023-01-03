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
  modalbg.style.display = "none";
}

// validate form inputs
let isFirstValid = false;
let isLastValid = false;
let isEmailValid = false;
let isBirthdateValid = false;
let isQuantityValid = false;

function validateForm() {
  let isFormValid = isFirstValid && isLastValid && isEmailValid && isBirthdateValid && isQuantityValid;
  if (!isFormValid) {
    document.getElementById("submit-button").classList.add("disabled");
    return false;
  }
}

function clearForm(num) {
  formData[num].removeAttribute('data-error-visible');
  formData[num].setAttribute('data-error', '');
  document.getElementById("submit-button").classList.remove("disabled");
}

function triggerFormError(num, message) {
  formData[num].setAttribute('data-error-visible', 'true');
  formData[num].setAttribute('data-error', message);
}

first.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'-]{2,50}$/u;

  if (regex.test(input)) {
    clearForm(0);
    isFirstValid = true;
  }
  if (regex.test(input) === false) {
    triggerFormError(0, 'Veuillez entrer un prénom valide compris entre 2 et 50 caractères');
    isFirstValid = false;
  }
})
last.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'-]{2,50}$/u;

  if (regex.test(input)) {
    clearForm(1);
    isLastValid = true;
  }
  if (regex.test(input) === false) {
    triggerFormError(1, 'Veuillez entrer un nom valide compris entre 2 et 50 caractères');
    isLastValid = false;
  }
})

email.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (regex.test(input)) {
    clearForm(2);
    isEmailValid = true;
  }
  if (regex.test(input) === false) {
    triggerFormError(2, 'Veuillez entrer une adresse email valide');
    isEmailValid = false;
  }
})

birthdate.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

  if (regex.test(input)) {
    clearForm(3);
    isBirthdateValid = true;
  }
  if (regex.test(input) === false) {
    triggerFormError(3, 'Veuillez entrer une date de naissance valide');
    isBirthdateValid = false;
  }
})

quantity.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^[0-9]{1,2}$/;

  if (regex.test(input)) {
    clearForm(4);
    isQuantityValid = true;
  }
  if (regex.test(input) === false) {
    triggerFormError(4, 'Veuillez entrer un nombre de tournois valide');
    isQuantityValid = false;
  }
})


