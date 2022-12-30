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

//validates form
let formIsValid = validateFirstName() || validateLastName() || validateEmail() || validateBirthDate() || validateQuantity() || validateLocation() || validateTerms();

function validateFirstName() {
  //validates the input with name "first" in div class "formData"
  let firstName = document.forms["reserve"]["first"].value;
  // watches if filled out
  if (firstName === "") {
    return false;
  }
  // watches if only letters
  if (!/^[a-zA-Z]+$/.test(firstName)) {
    return false;
  }
  // watches if more than 2 letters
  if (firstName.length < 2) {
    return false;
  }
  // watches if less than 25 letters
  if (firstName.length > 25) {
    return false;
  }
  return true;
}

function validateLastName() {
  //validates the input with name "last" in div class "formData"
  let lastName = document.forms["reserve"]["last"].value;
  // watches if filled out
  if (lastName === "") {
    return false;
  }
  // watches if only letters
  if (!/^[a-zA-Z]+$/.test(lastName)) {
    return false;
  }
  // watches if more than 2 letters
  if (lastName.length < 2) {
    return false;
  }
  // watches if less than 25 letters
  if (lastName.length > 25) {
    return false;
  }
  return true;
}

function validateEmail() {
  //validates the input with name "email" in div class "formData"
  let email = document.forms["reserve"]["email"].value;
  // watches if filled out
  if (email === "") {
    return false;
  }
  // watches if email is valid
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

function validateBirthDate() {
  //validates the input with name "birthdate" in div class "formData"
  let birthDate = document.forms["reserve"]["birthdate"].value;
  // watches if filled out
  if (birthDate === "") {
    return false;
  }
  // watches if date is valid
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
    return false;
  }
  return true;
}

function validateQuantity() {
  //validates the input with name "quantity" in div class "formData"
  let quantity = document.forms["reserve"]["quantity"].value;
  // watches if filled out
  if (quantity === "") {
    return false;
  }
  // watches if number is valid
  if (!/^[0-9]+$/.test(quantity)) {
    return false;
  }
  return true;
}

