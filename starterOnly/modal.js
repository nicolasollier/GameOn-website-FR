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

//validates form
let formIsValid = validateFirstName() || validateLastName() || validateEmail() || validateBirthDate() || validateQuantity() || validateLocation() || validateTerms();

function validateFirstName() {
  //validates the input with name "first" in div class "formData"
  let firstName = document.forms["reserve"]["first"].value;
  // watches if filled out
  if (firstName === "") {
    console.log("First name must be filled out");
    return false;
  }
  // watches if only letters
  if (!/^[a-zA-Z]+$/.test(firstName)) {
    console.log("First name must only contain letters");
    return false;
  }
  // watches if more than 2 letters
  if (firstName.length < 2) {
    console.log("First name must be at least 2 letters long");
    return false;
  }
  // watches if less than 25 letters
  if (firstName.length > 25) {
    console.log("First name must be less than 25 letters long");
    return false;
  }
  return true;
}

function validateLastName() {
  //validates the input with name "last" in div class "formData"
  let lastName = document.forms["reserve"]["last"].value;
  // watches if filled out
  if (lastName === "") {
    console.log("Last name must be filled out");
    return false;
  }
  // watches if only letters
  if (!/^[a-zA-Z]+$/.test(lastName)) {
    console.log("Last name must only contain letters");
    return false;
  }
  // watches if more than 2 letters
  if (lastName.length < 2) {
    console.log("Last name must be at least 2 letters long");
    return false;
  }
  // watches if less than 25 letters
  if (lastName.length > 25) {
    console.log("Last name must be less than 25 letters long");
    return false;
  }
  return true;
}

function validateEmail() {
  //validates the input with name "email" in div class "formData"
  let email = document.forms["reserve"]["email"].value;
  // watches if filled out
  if (email === "") {
    console.log("Email must be filled out");
    return false;
  }
  // watches if email is valid
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.log("Email must be valid");
    return false;
  }
  return true;
}

function validateBirthDate() {
  //validates the input with name "birthdate" in div class "formData"
  let birthDate = document.forms["reserve"]["birthdate"].value;
  // watches if filled out
  if (birthDate === "") {
    console.log("Birthdate must be filled out");
    return false;
  }
  // watches if date is valid
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
    console.log("Birthdate must be valid");
    return false;
  }
  return true;
}

function validateQuantity() {
  //validates the input with name "quantity" in div class "formData"
  let quantity = document.forms["reserve"]["quantity"].value;
  // watches if filled out
  if (quantity === "") {
    console.log("Quantity must be filled out");
    return false;
  }
  // watches if number is valid
  if (!/^[0-9]+$/.test(quantity)) {
    console.log("Quantity must be valid");
    return false;
  }
  return true;
}