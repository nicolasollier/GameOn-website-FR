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
let isFormValid = false;

first.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'-]{2,50}$/u;

  if (regex.test(input)) {
    formData[0].removeAttribute('data-error-visible');
    formData[0].setAttribute('data-error', '');
  }
  if (regex.test(input) === false) {
    formData[0].setAttribute('data-error-visible', 'true');
    formData[0].setAttribute('data-error', 'Veuillez entrer un prénom valide compris entre 2 et 50 caractères');
  }
})
last.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'-]{2,50}$/u;

  if (regex.test(input)) {
    formData[1].removeAttribute('data-error-visible');
    formData[1].setAttribute('data-error', '');
  }
  if (regex.test(input) === false) {
    formData[1].setAttribute('data-error-visible', 'true');
    formData[1].setAttribute('data-error', 'Veuillez entrer un nom valide compris entre 2 et 50 caractères');
  }
})

email.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (regex.test(input)) {
    formData[2].removeAttribute('data-error-visible');
    formData[2].setAttribute('data-error', '');
  }
  if (regex.test(input) === false) {
    formData[2].setAttribute('data-error-visible', 'true');
    formData[2].setAttribute('data-error', 'Veuillez entrer une adresse email valide');
  }
})

birthdate.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

  if (regex.test(input)) {
    formData[3].removeAttribute('data-error-visible');
    formData[3].setAttribute('data-error', '');
  }
  if (regex.test(input) === false) {
    formData[3].setAttribute('data-error-visible', 'true');
    formData[3].setAttribute('data-error', 'Veuillez entrer une date de naissance valide');
  }
})

quantity.addEventListener('input', (e) => {
  let input = e.target.value;
  const regex = /^[0-9]{1,2}$/;

  if (regex.test(input)) {
    formData[4].removeAttribute('data-error-visible');
    formData[4].setAttribute('data-error', '');
  }
  if (regex.test(input) === false) {
    formData[4].setAttribute('data-error-visible', 'true');
    formData[4].setAttribute('data-error', 'Veuillez entrer un nombre de tournois valide');
  }
})


